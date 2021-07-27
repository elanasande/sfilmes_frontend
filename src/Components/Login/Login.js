import React from 'react';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Contexts/UserContext';
import Error from '../Helper/Error';
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CenterFocusStrong, SignalWifi1BarLock } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
  },
  image: {
    backgroundImage: 'url(https://images.pexels.com/photos/265685/pexels-photo-265685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#D294AA',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    alignItems: CenterFocusStrong,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link:{
    color: "#000",
  }
}));

const Login = () => {
  const email = useForm('email');
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);
    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  }
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        <form action="" onSubmit={handleSubmit}>
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth id="email" label="E-mail" type="text" {...email}/>
         <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
          id="password"
          label="Senha"
          type="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}
         <Error error={error} />
        <Error error={error && 'Dados incorretos.'} />
      </form>
      <Link to="/login/perdi">Perdeu a Senha?</Link>
     
      <Link component="link" to="/login/criar">
        Ainda não é cadastrado? Cadastre-se no site.
      </Link>
    
      
    </div>
    </Grid>
    </Grid>
  );
};

export default Login;
