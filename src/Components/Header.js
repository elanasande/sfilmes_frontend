import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as User } from '../Assets/sfilmes-logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { UserContext } from '../Contexts/UserContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '1rem',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    justifyContent: 'space-between',
    margin: '1rem',
  },
  left: {
    right: '24px',
    position: 'absolute',
  },
  navbar: {
    background: '#D294AA',
  },
  logo: {
    width: '300px',
    height: '60px',
    fill: '#fff',
    alignSelf: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();
  const { data, userLogout, login } = React.useContext(UserContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Link to="/" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
              <User className={classes.logo} />
            </Typography>
          </Link>
          <Link to="/login" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
              Login
            </Typography>
          </Link>
          <Link to="/user" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
              User
            </Typography>
          </Link>
          <div className={classes.left}>
            {data && login === true ? (
              <Link className="link" to="/">
                {data.first_name} <button onSubmit={userLogout}>Logout</button>
              </Link>
            ) : (
              <Button color="inherit">
                <Link className="link" to="/login">
                  Login / Criar
                </Link>
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
