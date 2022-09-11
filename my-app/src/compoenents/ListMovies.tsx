import { deleteDoc, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { movieCollectionRef } from "../lib/firestore.collection";
import { db } from "../lib/init-firebase";

type MovieProps = {
  data: MovieDataProps;
  id: any;
};

type MovieDataProps = {
  name: any;
};

const ListMovies = () => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    // getMovies();
    const unsubscribe = onSnapshot(movieCollectionRef, (snapshot) => {
      setMovies(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const getMovies = () => {
    const docs = getDocs(movieCollectionRef)
      .then((response) => {
        const movies = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));

        console.log(movies);
        setMovies(movies);
      })
      .catch((err) => console.log(err));
  };

  const deleteHandle = (id: string) => {
    const docRef = doc(db, "movies", id);

    deleteDoc(docRef)
      .then((response) => console.log(response))
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <button onClick={() => getMovies()}>Refreach Movies</button>
      <ul>
        {movies.map((movie: MovieProps) => (
          <div>
            <li key={movie.id}>{movie.data.name}</li>
            <button onClick={() => deleteHandle(movie.id)}>Delete Movie</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
