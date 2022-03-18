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
                console.log(movies);

            });
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <ul>

        </ul>
    );
}