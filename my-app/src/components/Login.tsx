import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../lib/init-firebase";

export const Login = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState<any>();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setRegisterEmail("");
      setRegisterPassword("");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  const login = async () => {
    console.log("entered login");
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    try {
      const response = await signOut(auth);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(registerEmail);
  }, [registerEmail]);

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>

        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(e) => setRegisterPassword(e.target.value)}
        />

        <button onClick={() => register()}> Register</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          placeholder="Password..."
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <button onClick={() => login()}> Login</button>

        <h4> User logged in: </h4>
        {user?.email}
        <button onClick={() => logout()}> Sign out</button>
      </div>
    </div>
  );
};
