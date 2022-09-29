import React, { useState, useEffect } from "react";
import requests from "./requests";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./Firebase/init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import Registration from "./components/Registration/Registration";
import Home from "./pages/Home/Home";
import { Audio } from "react-loader-spinner";
import Explore from "./pages/Explore/Explore";
import Navbar from "./components/Navbar/Navbar";
import MovieDetails from "./pages/Details/MovieDetails";

function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function logout() {
    signOut(auth);
    setUser();
  }

  return (
    <Router>
      {user && <Navbar logout={logout} userInfo={user} />}
      <Routes>
        <Route
          path={"/"}
          exact
          element={
            loading ? (
              <Audio
                height="100"
                width="100"
                color="#DAA520"
                ariaLabel="audio-loading"
                wrapperStyle={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                wrapperClass="wrapper-class"
                visible={true}
              />
            ) : user ? (
              <Home logout={logout} userInfo={user} />
            ) : (
              <Registration
                setUser={setUser}
                setUserEmail={setUserEmail}
                setUserPassword={setUserPassword}
                login={login}
                register={register}
                userEmail={userEmail}
                userPassword={userPassword}
              />
            )
          }
        />
        <Route path={"/explore"} element={<Explore />} />
        <Route path={"/:movieType/:movieId"} element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
