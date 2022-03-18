import axios from "axios";
import { useEffect, useState } from "react";
import { IMovie } from "../models/IMovie";

export function MovieService(){

    const [movies, setMovies] = useState<IMovie[]>([]);

    function getData(){
        axios.get<IMovie[]>('http://medieinstitutet-wie-products.azurewebsites.net/api/products')
            .then(response => {
                
                let movieMap = response.data.map((movie) => {
                    return({
                        id: movie.id,
                        name: movie.name,
                        imageUrl: movie.imageUrl
                    });
                    
                });
                
                setMovies(movieMap);
                
            });
    }

    useEffect(() => {
        getData();
    }, []);
    
    let movieLIs = movies.map((movie) => {
        return(<li key={movie.id}>ID: {movie.id}, Title: {movie.name}</li>);
    });


    return(
        <ul>
            {movieLIs}
        </ul>
    );
}