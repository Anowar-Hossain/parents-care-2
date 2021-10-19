import firebaseInitialization from '../../firebase/firebase.int';
import { NavLink } from 'react-router-dom';
import { signInWithEmailAndPassword } from '@firebase/auth';
import useAuth from '../../hooks/useAuth';

firebaseInitialization();

const Login = () => {
    const {handleGoogleSignIn, getEmail, getPassword, setUser, setError, error, email, password, auth} = useAuth();

    const handleLogin = e => {
        e.preventDefault();
        if(password.length < 6){
          setError('Password must be at lest 6 characters long.');
          return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
         setError('Password Must contain 2 upper case');
         return;
        }
             signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
              })
             
        }
    
    return (
        <div style={{marginBottom:"180px"}}>
        <h2 className="text-primary">Please Log-in</h2>
        <form onSubmit={handleLogin}>
            <div className="row mb-3">
                <label htmlFor="inputEmaill" className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-6">
                <input onBlur={getEmail} type="email" className="form-control" id="inputEmaill" required/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-6">
                <input onBlur={getPassword} type="password" className="form-control" id="inputPassword" required/>
                </div>
            </div>
            <div className="col-sm-5 text-danger">{error}</div>
            <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p className="mt-2">
        <NavLink className="text-decoration-none" to="/signup">
          Need an Account? Please Sign up!
        </NavLink>
        <br />
        <NavLink className="text-decoration-none" to="/reset">
          Forget password? Reset!
        </NavLink>
      </p>
      <button className="btn btn-danger" onClick={handleGoogleSignIn}>Google sign-in</button>

        </div>
    );
};

export default Login;