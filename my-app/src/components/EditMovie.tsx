import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../lib/init-firebase";

const EditMovie = () => {
  const [name, setName] = useState("");
  const [docId, setDocId] = useState("");

  const onClickHandle = (e: any) => {
    e.preventDefault();
    if (name === "" || docId === "") {
      return;
    }

    console.log(e.target.value);
    const docRef = doc(db, "movies", docId);

    updateDoc(docRef, { name })
      .then((response) => console.log(response))
      .catch((err: Error) => console.log(err.message));
  };

  return (
    <div>
      <h1>Edit movie</h1>

      <form>
        <label htmlFor="name">Movie name</label>
        <input
          id="name"
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="docId">Movie id</label>
        <input
          id="docId"
          type={"text"}
          value={docId}
          onChange={(e) => setDocId(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            onClickHandle(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditMovie;
