import { Link } from '@inertiajs/inertia-react'
import { usePage } from '@inertiajs/inertia-react'


const Navbar = () => {
    const { auth } = usePage().props


  return (
    <header>
      <div className="container">
        <Link href="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {auth.user && (
            <div>
              <span>{auth.user.email}</span>
              <Link href={route('logout')} method="post" as="button" type="button">Logout</Link>
            </div>
          )}
          {!auth.user && (
            <div>
              <Link href={route('login')}>Login</Link>
              <Link href={route('register')}>Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar