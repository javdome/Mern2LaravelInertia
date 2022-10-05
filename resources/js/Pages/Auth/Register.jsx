import React from 'react'
import { useForm } from '@inertiajs/inertia-react'
import MiLayout from '@/Layouts/MiLayout';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });


    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <MiLayout>
            {/* <Head title="Register" /> */}

            <form className="signup" onSubmit={submit}>
                <h3>Sign up</h3>

                <label>Name:</label>
                <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
                {errors.name && <div className='error'>{errors.name}</div>}
                
                {/* <InputLabel forInput="name" value="Name" /> */}

                <label>Email address:</label>
                <input type="text" value={data.email} onChange={e => setData('email', e.target.value)} />
                {errors.email && <div className='error'>{errors.email}</div>}

                <label>Password:</label>
                <input type="password" value={data.password} onChange={e => setData('password', e.target.value)} />
                {errors.password && <div className='error'>{errors.password}</div>}

                <label>Confirm Password:</label>
                <input type="password" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} />
                {errors.password_confirmation && <div className='error'>{errors.password_confirmation}</div>}
                    
                <button type="submit" disabled={processing}>Register</button>
            </form>
        </MiLayout>
    );
}
