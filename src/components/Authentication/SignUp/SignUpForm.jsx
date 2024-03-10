import React, { useState } from 'react';
// import './SignUpForm.css'; // Make sure to create the corresponding CSS file
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseInit";
import '../auth.css'

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSignUp = async (e) => {
      e.preventDefault();

    if (!email|| !password || !username) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
      setSubmitButtonDisabled(true);

    try {
      // Create a new user in Firebase authentication
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);

      // Access the user object from the userCredential
      const user = userCredential.user;

      // Store additional user data in Firestore (you may customize this based on your requirements)
    //   await firebase.firestore().collection('users').doc(user.uid).set({
    //     username,
    //     email,
    //   });

      console.log(username,'User registered successfully!');
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required onChange={(e) => setUsername(e.target.value)} />
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
          <FaEnvelope className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
          <FaLock className='icon' />
        </div>

        <button type='submit'>Sign Up</button>

        <div className='register-link'>
          <p>Already have an account?<a href='/login'>Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
