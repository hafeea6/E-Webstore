import { getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { movieCollectionRef } from "../lib/firestore.collection";

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

  return (
    <div>
      <button onClick={() => getMovies()}>Refreach Movies</button>
      <ul>
        {movies.map((movie: MovieProps) => (
          <li key={movie.id}>{movie.data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
