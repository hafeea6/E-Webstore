import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../lib/init-firebase';

const ListMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      getMovies();
    }, [])
    

    const getMovies = () => {
        const movieColRef = collection(db, 'movies');
        const docs = getDocs(movieColRef).then(response => {
            console.log(response)
        }).catch(err => console.log(err));
    }

    return (
    <div>ListMovies</div>
  )
}

export default ListMovies