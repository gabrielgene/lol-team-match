import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login';
import { RouteComponentProps } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(10)
    }
  })
);

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();
  const onSuccessGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline | any
  ) => {
    const { profileObj } = response;
    const { email, googleId } = profileObj;
    history.push('/register', { googleId, email });
  };
  function onFailureGoogle(response: GoogleLoginResponse) {}
  return (
    <div className={classes.root}>
      <GoogleLogin
        clientId='894237077503-magbtuaef618ur9ft2v3avefj8cg0e49.apps.googleusercontent.com'
        buttonText='Entrar com o Google'
        onSuccess={onSuccessGoogle}
        onFailure={onFailureGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <button
        onClick={async () => {
          const data = await (await fetch('/api/profile.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          })).json();
          console.log(data);
        }}
      >
        teste
      </button>
    </div>
  );
};
export default Login;
