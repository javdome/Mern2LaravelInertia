import React from 'react'
import { useForm } from '@inertiajs/inertia-react'
import MiLayout from '@/Layouts/MiLayout';

export default function Login() {

const { data, setData, post, processing, errors } = useForm({
  email: '',
  password: '',
  remember: false,
})

function submit(e) {
  e.preventDefault()
  post(route('login'))
}

return (
    <MiLayout>
        <form className="login" onSubmit={submit}>
            <h3>Log In</h3>

            <label>Email address:</label>
            <input type="text" value={data.email} onChange={e => setData('email', e.target.value)} />
            {errors.email && <div className='error'>{errors.email}</div>}

            <label>Password:</label>
            <input type="password" value={data.password} onChange={e => setData('password', e.target.value)} />
            {errors.password && <div className='error'>{errors.password}</div>}

            {/* <input type="checkbox" checked={data.remember} onChange={e => setData('remember', e.target.checked)} /> Remember Me */}
            
            <button type="submit" disabled={processing}>Login</button>
        </form>
  </MiLayout>
)
}
