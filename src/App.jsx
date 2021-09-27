import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function App() {
  return (
    <div className="App">
      <div className="login-container">
        <div className="img-container">
          
        </div>
        <div className="form-container">
          <div className='page-title'>
            <div className="lock-circle">
              <LockIcon className='lock-icon' />
            </div>
            <h2>Sign in</h2>
          </div>
          <div className="form-group">
            <FormGroup>
              <TextField
                required
                id="outlined-required"
                label="Email Address"
              />
              <br />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
              <br />     
              <Button variant="contained" size='large' endIcon={<LockOpenIcon size='small' />}>Login</Button>
            </FormGroup>
          </div>
          <br />
          <div className='form-links'>
            <Link href="#">Forgot password?</Link>
            <Link href="#">Don't have an account? Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
