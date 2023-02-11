import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase_init';
import Loading from '../Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'


const Login = () => {
    const emailRef = useRef(' ');
    const passwordRef = useRef(' ');
    const navigate = useNavigate();
    let errorelement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [sendEmailVerification,] = useSendEmailVerification(auth);

    if (error) {
        errorelement = <p className='text-white'>Error: {error?.message}</p>
        console.log(error)
    }
    if (user) {
        navigate('/home')
        console.log(user)
    }
    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
        console.log(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent!')
        }
        else {
            toast('please enter your email')
        }
    }
    return (
        <div className='form-style'>
            <Form className='w-50 m-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" name='email' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" name='password' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {errorelement}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='w-50 m-auto'>Forget Your Password ? <button onClick={resetPassword} className='btn btn-link '>Reset Password </button></p>

            <ToastContainer />
        </div>
    );
};

export default Login; 