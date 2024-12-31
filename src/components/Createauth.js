import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import { useForm } from 'react-hook-form';

function Createauth() {
    const navigate = useNavigate();
    const [googleAuthUser, setgoogleAuthUser] = useState({});
    const { register, handleSubmit, reset } = useForm();

    function googleAuth() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result, "Google Auth result");
                navigate('/dashboard');
            })
            .catch((error) => {
                console.log("Error during Google sign-in: ", error.message);
                alert("Error during Google sign-in: " + error.message);
            });
    }

    function show() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setgoogleAuthUser(user.providerData[0]);
            }
        });
    }

    async function onSubmit(data) {
        console.log(data);

        await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                alert("Signup successful");
                navigate('/SignIn');
            })
            .catch((error) => {
                console.error("Error during signup: ", error.message);
                alert("Error during signup: " + error.message);
            });
    }

    useEffect(() => {
        show();
    }, []);

    return (
        <div className='container mt-5 pt-5'>
            <div className='container w-50 mt-5 pt-5'>
                <form className="form_main" action='' method='post' onSubmit={handleSubmit(onSubmit)}>
                    <p className="heading">Create account</p>
                    <div className="inputContainer">
                        <input placeholder="Email" id="email" className="inputField fs-6" type="email" {...register('email')} />
                    </div>

                    <div className="inputContainer">
                        <input placeholder="Password" id="password" className="inputField fs-6" type="password" {...register('password')} />
                    </div>
                    <button id='button' className="form-btn mb-3" type='submit'>Registration</button>
                    <p className='fs-4'>---------------------OR-----------------------</p>

                    <button id="button" onClick={googleAuth}>Login with Google</button>
                </form>
            </div>
        </div>
    );
}

export default Createauth;
