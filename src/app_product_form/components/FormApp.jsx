import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function FormApp() {
  const [FormInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email:'',
    birthDate: '',
    gender: 'female',
    hobbies: [],
    ville: '',
    adresse:'',
    image: ''
  });

  const villes = ['Agadir', 'Lqliaa', 'ait Melloul', 'biogra']

  const [isSubmitted, setisSubmitted] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...FormInput, [name]: value });
  };

  const handleHobbies = (e) => {
    const { value, checked } = e.target;
    const { hobbies } = FormInput;

    if (checked) {
      setFormInput({ ...FormInput, hobbies: [...hobbies, value] });
    } else {
      setFormInput({
        ...FormInput,
        hobbies: hobbies.filter((hobby) => hobby !== value),
      });
    }
  };

  const handleImage = (e) => {
    setFormInput({ ...FormInput, image: e.target.files[0] });
  };

  const Validation = ()=>{
    const hasEmptyField = Object.values(FormInput).some(value => {
        return value === '' || (Array.isArray(value) && value.length === 0);
    });

    if (hasEmptyField) {
        alert('All fields are required!!!');
        return;
    }
    if(!FormInput.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        alert('enter a valid email!!');
        return;
    }
      
    setisSubmitted(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Validation();

  };

  return (
    <>
      <div className="mx-5 align-items-center">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Formulaire</h1>

          <div className="mb-3 w-10">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={FormInput.firstName}
              className="form-control"
              onChange={handleInput}
            />
          </div>

          <div className="mb-3 w-10">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={FormInput.lastName}
              className="form-control"
              onChange={handleInput}
            />
          </div>

          <div className="mb-3 w-10">
            <label className="form-label">email:</label>
            <input
              type="text"
              name="email"
              value={FormInput.email}
              className="form-control"
              onChange={handleInput}
            />
          </div>

          <div className="mb-3 w-10">
            <label className="form-label">Birth Date:</label>
            <input
              type="Date"
              name="birthDate"
              value={FormInput.birthDate}
              className="form-control"
              onChange={handleInput}
            />
          </div>

          <div className="mb-3 w-10">
            <label className="form-label">Gender:</label><br />
            <input
              className="mx-2"
              type="radio"
              name="gender"
              value="female"
              checked={FormInput.gender === 'female'}
              onChange={handleInput}
            /> Female
            <input
              className="mx-2"
              type="radio"
              name="gender"
              value="male"
              checked={FormInput.gender === 'male'}
              onChange={handleInput}
            /> Male
          </div>

          <div className="mb-3 w-10">
            <label className="form-label">Adresse:</label>
                <textarea className="form-control"
                 name="adresse" rows="2" 
                 value={FormInput.adresse} 
                 onChange={handleInput}></textarea>
          </div>

          <div className="mb-3 w-10">
            <label className="form-label">Ville:</label>
            <select
              name="ville"
              className="form-select"
              value={FormInput.ville}
              onChange={handleInput}
            >
                {villes.map((Ville,pos) =>(
                    <option key={pos} value={Ville}>{Ville}</option>
                ))}
            </select>
          </div>

          

          <div className="mb-3 w-10">
            <label className="form-label">Hobbies:</label><br />
            <input
              type="checkbox"
              name="hobbies"
              value="reading"
              onChange={handleHobbies}
            /> Reading <br />
            <input
              type="checkbox"
              name="hobbies"
              value="sleeping"
              onChange={handleHobbies}
            /> Sleeping <br />
            <input
              type="checkbox"
              name="hobbies"
              value="sport"
              onChange={handleHobbies}
            /> Sport
          </div>

          <div className="mb-3 w-10">
            <label className="form-label">Image:</label>
            <input
              type="file"
              name="image"
              className="form-control"
              onChange={handleImage}
            />
          </div>

          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </form>

        {isSubmitted && (
          <div className="card w-5">
            <img
              className="card-img-top"
              src={FormInput.image ? URL.createObjectURL(FormInput.image) : ''}
              alt="Uploaded"
              style={{width:'200'}}
            />
            <h5>
              <strong>FullName: </strong>{FormInput.firstName} {FormInput.lastName}
            </h5>
            <ul>
                <li><strong>Email: </strong>{FormInput.email}</li>
                <li><strong>Birth date: </strong>{FormInput.birthDate}</li>
                <li><strong>Gender: </strong>{FormInput.gender}</li>
                <li><strong>Adresse: </strong>{FormInput.adresse}</li>
                <li><strong>Ville: </strong>{FormInput.ville}</li>
                <li><strong>Hobbies: </strong>{FormInput.hobbies.join(', ')}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}