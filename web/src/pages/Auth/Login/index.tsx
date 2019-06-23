import React from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from "react-google-login";

interface IProps {}

export default function Login(props: IProps) {
  function onSuccessGoogle(
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) {
    //Check if has a account already linked -  SignUp | HomePage
  }

  function onFailureGoogle(response: GoogleLoginResponse) {}

  return (
    <div>
      <GoogleLogin
        clientId="894237077503-magbtuaef618ur9ft2v3avefj8cg0e49.apps.googleusercontent.com"
        buttonText="Entrar com o Google"
        onSuccess={onSuccessGoogle}
        onFailure={onFailureGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
