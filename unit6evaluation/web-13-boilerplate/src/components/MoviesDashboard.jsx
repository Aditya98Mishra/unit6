import React, { useEffect , useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {

  
  
    // to get all movies list on component mounts
  //  useEffect(() => {
  //    //   dispatch an action to the store 

  // }, [dispatch]);

  const [data, setData]= useState([]);
  const [loading,setLoading] = useState([]);

  const getAllData = () => {
    setLoading(true)
    axios({
      method:"get",
      url:"https://movie-fake-server.herokuapp.com/data",
    })
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  };

  useEffect(()=> {
    getAllData();
  },[]);


//    filter by genre 
//  const handleFilter = (e)=>{
//      // dispach filterby genre action to the store
//  }
   return (
     <>
       <h2>Movies</h2>
  
      
      {!loading && data && data.map((item) => {
       return <div style={{display:"inline-block", margin:"10px"}}>
       <Link key = {item.id} to = {`/MoviesDashboard/${item.id}`}>
       <img src = {item.image_url}></img>
       <h2>{item.movie_name}</h2>
       <h2> {item.rating}</h2>
       <h2> {item.genre}</h2>
       <h2> {item.release_date}</h2>
       </Link>
       </div>
      })}
</>
);
};