import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [number, setNumber] = useState('');

    


    const handleSubmit = (e) => {
        email.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name"  placeholder="full name" />
            <label htmlFor="number">Number</label>
            <input value={number} type="number" onChange={(e) => setNumber(e.target.value)} id="number"  placeholder="phone number" />
            <label htmlFor="age">Age</label>
            <input value={age} type="age" onChange={(e) => setAge(e.target.value)} id="age"  placeholder="age" />
             <label htmlfor="email">Email</label>
             <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
             <label htmlfor="password">Password</label>
             <input value={pass} onChange={(e) => setPass(e.target.value)} type="passsword" placeholder="**********" id="password" name="password" />
             <button type="submit">Submit</button>
           </form>
           <button className="link-btn" onClick={() => props.onFormSwitch("login")}>Already have an account? Login here </button>
        </div>  
    )
}