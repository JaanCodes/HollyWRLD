import React, { useState } from "react";
import "./registration.css";
import Logo from "../../assets/HollywrldLogo.png";

const Registration = ({ userEmail, setUserEmail, userPassword, setUserPassword, login, register }) => {
  const [registrationMethod, setRegistrationMethod] = useState("Register");

  return (
    <section id="#registration">
      <div className="registration__background">
        <div className="registration__black-filter"></div>
        <img
          loading="lazy"
          className="registration__bgImg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/61c7b3df-81d9-4336-a083-eb92ba77d089/ES-es-20220919-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/61c7b3df-81d9-4336-a083-eb92ba77d089/ES-es-20220919-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/61c7b3df-81d9-4336-a083-eb92ba77d089/ES-es-20220919-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/61c7b3df-81d9-4336-a083-eb92ba77d089/ES-es-20220919-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        />
      </div>
      <nav>
        <img src={Logo} className="nav__logo--img" />
      </nav>
      <div className="registration__form">
        <div className="form">
          <form>
            <h1>Sign In</h1>
            <div className="info">
              <input
                className="email"
                type="email"
                value={userEmail}
                placeholder="Email or phone number"
                onChange={(e) => setUserEmail(e.target.value)}
              />{" "}
              <br></br>
              <input
                className="email"
                type="password"
                value={userPassword}
                placeholder="Password"
                minLength={6}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <div className="btn">
              <button
                className="btn-primary"
                type="button"
                onClick={() => {
                  registrationMethod === "Register" ? register() : login();
                }}
              >
                {registrationMethod === "Register" ? "Register" : "Log In"}
              </button>
            </div>
            <div className="help">
              <div className="registration__remember-me">
                <input value="true" type="checkbox" />
                <label>Remember me</label>
              </div>

              <p
                className="registration__method"
                onClick={() =>
                  registrationMethod === "Register"
                    ? setRegistrationMethod("Already have an account")
                    : setRegistrationMethod("Register")
                }
              >
                {registrationMethod === "Register" ? "Already have an account" : "Register"}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
