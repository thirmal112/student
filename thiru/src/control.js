import React, { useState } from 'react';

const RegistrationFormControlled = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h4>Registration Form (Controlled)</h4>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email: </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password: </label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegistrationFormControlled;
