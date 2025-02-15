import React, { useState } from 'react'

function Thrteen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [isLoggedIn, setIsLoggedin] = useState(false)
  const [users, setUsers] = useState([])

  const handleAuthentication = () => {
    if (isRegister) {
      //LogIn
      if (isRegister) {
        const user = user.find((u)=>u.email === email && u.password === password)
        if (user) {
          setIsLoggedin(true)
        } else {
          alert('Login failed. Please check your credential')
        }
      }
    } else {
      //Register
      const newUser = {email, password}
      setUsers([...users,newUser])
      localStorage.setItem('users', JSON.stringify([...users, newUser]))
      setIsLoggedin(true)
    }
  }
  const handleLogout = () => {
    setIsLoggedin(false)
    setEmail('')
    setPassword('')
  }
  return (
    <div>

      {
        isLoggedIn ? (
          <div>
            <h2>Welcome, {email}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>{isRegister ? 'Login' : 'Register'}</h2>
            <form action="">

              <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

              <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
              <button onClick={handleAuthentication}>
                {isRegister ? 'Login' : 'Register'}
              </button>
            </form>
            <p>
              {isRegister ? "Don't have an accout? Register now" : "Already have an account? Login"}
            </p>
            <button onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? 'Register' : 'Login'}
            </button>
          </div>
        )
      }


    </div>
  )
}

export default Thrteen