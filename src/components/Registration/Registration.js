import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase_init'
import Loading from '../Loading/Loading';
import './Registration.css'
const Registration = () => {
    // const emailRef = useRef(' ');
    // const passwordRef = useRef(' ');
    let errorelement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate(" ")
    const [updateProfile, updating,] = useUpdateProfile(auth);


    if (error) {
        errorelement = <p className='text-white'>Error: {error?.message}</p>
        console.log(error)
    }

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        console.log('user', user)
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home')
    }
    return (
        <div className='form-style'>
            <Form className='w-50 m-auto' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder=" Name" name='name' />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder=" Email" name='email' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {errorelement}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Registration;