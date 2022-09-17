import { addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { movieCollectionRef } from "../lib/firestore.collection";

const AddMovie = () => {
  const [name, setName] = useState("");
  const alreadyEntered: any[] = [];
  const onClickHandle = (e: any) => {
    e.preventDefault();
    if (name === "") {
      return;
    }
    addDoc(movieCollectionRef, { name })
      .then((response) => console.log(response))
      .catch((err: Error) => console.log(err.message));
  };
  return (
    <div>
      <h1>Add movie</h1>

      <form>
        <label htmlFor="name">Movie name</label>
        <input
          id="name"
          type={"text"}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            if (alreadyEntered.length > 0) {
              alreadyEntered.forEach((element) => {
                if (element === name) {
                  alert("Already added");
                  e.preventDefault();
                } else {
                  onClickHandle(e);
                  alreadyEntered.push(name);
                }
              });
            } else {
              onClickHandle(e);
              alreadyEntered.push(name);
            }
            setName("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
