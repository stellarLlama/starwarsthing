import { useState } from "react";

function Movie() {
    const URL = "https://swapi.dev/api/films/?format=json"
    let [movies,setMovies] = useState("please wait movies are loading")


    async function makeRequest() {
        console.log("request sent")
        const fetchRequest = await fetch(URL);
        const data = await fetchRequest.json();
        

        setMovies(data.results.map((movie)=>(
            <div class="movie">
                <h1>{movie.title}</h1>
                <h3>directed by {movie.director} and produced by {movie.producer}</h3>
                <h4>{movie.release_date}</h4>
                <p>{movie.opening_crawl}</p>
            </div>
        )))
        console.log("request finished")
    }

    makeRequest()

    return <div class="movieContainer">
        <div>{movies}</div>
    </div>
}

export default Movie