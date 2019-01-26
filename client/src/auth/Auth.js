import auth0 from "auth0-js";
import history from "../history";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "mkothari.auth0.com",
    clientID: "dtTz_Es2NA_pZfAiRO8gCh6lxnbmsYUN",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login(username, password) {
    this.auth0.login(
      { realm: "re-tool", username, password },
      (err, authResult) => {
        if (err) {
          console.log(err);
          alert(
            `Error: ${err.description}. Check the console for further details.`
          );
          return;
        }
      }
    );
  }

  signup(email, password, firstName, lastName, zip, phone) {
    this.auth0.signup(
      {
        connection: "re-tool",
        email,
        password,
        user_metadata: { firstName, lastName, zip, phone }
      },
      err => {
        if (err) {
          console.log(err);
          alert(
            `Error: ${err.description}. Check the console for further details.`
          );

          return;
        }

        this.auth0.login(
          { realm: "re-tool", username: email, password },
          (err, authResult) => {
            if (err) {
              console.log(err);
              alert(
                `Error: ${
                  err.description
                }. Check the console for further details.`
              );
              return;
            }
          }
        );
      }
    );
  }

  loginWithGoogle() {
    this.auth0.authorize({ connection: "google-oauth2" });
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace("/home");
      } else if (err) {
        history.replace("/home");
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    // navigate to the home route
    history.replace("/home");
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // navigate to the home route
    history.replace("/home");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}