import React, { useState, FormEvent } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    feedback: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (you can send the data to a server or perform other actions here)
    console.log(formData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>FeedBack Form</h2>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required title='fill name'/>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" placeholder='Phone Number' maxLength={10} value={formData.phone} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="feedback">Feedback</label>
          <input type="text" name="feedback" maxLength={500} value={formData.feedback} onChange={handleChange} />
        </div>
        <button type="submit" >Submit</button>
      </form>
      <div className="submitted-info">
        <h2>Submitted Information</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Feedback: {formData.feedback}</p>
      </div>
    </div>
  );
}

export default App;
