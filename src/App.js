import { useState,useEffect} from "react";
import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';



const API_URL = ' http://www.omdbapi.com/?apikey=cf3c576a';

const movie = {
    Poster: "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    Title: "Superman Returns",
    Type: "movie",
   Year: "2006",
   imdbID: "tt0348150"
}
const App =() =>{
    const[movies, setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
   const searchMovies = async (title) => {
   const response = await fetch(`${API_URL}&s=${title}`);
   const data = await response.json();

   setMovies(data.Search);
   }
    
    useEffect(()=>{
    searchMovies('superman');
    },[]);
    return(
      <div className="app"> 
     <h1>SADAT MOVIE HUB</h1>

     <div className="search">
         <input placeholder="Search for movie" onChange={(e) => setSearchTerm(e.target.value) } />
     <img
     src={SearchIcon}
     alt='search'
     onClick={() =>searchMovies(searchTerm)}/>
     

     </div>
     
     {movies?.length >0 ?(
         <div className="container">
             {movies.map((movie) =>(
               <MovieCard movie={movie}/>
             ))}
         </div>
     ):(
         <div className="empty">
         <h2>No Movies found</h2>
         </div>
     )}
     
        
   
     </div>   
     );
 }

 export default App;