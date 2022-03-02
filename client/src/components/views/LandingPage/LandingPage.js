import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Auth from '../../../hoc/auth';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from './Section/MainImage';
import GridCards from '../commons/GridCards.js';
import { Row } from 'antd';

//오타로 이상한게 import 되어 에러가 계속 났음.
//await ?? 그거처럼 정보를 가져오기전에 실행하면 에러가 날수가 밖에없다,30번줄 처럼 사용

function LandingPage() {

    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null);

      useEffect(() =>{
  
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            setMovies([...Movies, ...response.results])
            setMainMovieImage(response.results[0])
            console.log(response.results[0])
        })
      }, [])
  
//mainimage src =  {`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
// gridcard src = {`${IMAGE_BASE_URL}w500${movie.poster_path}`}
    
    return (
      
      
      <div style={{width:'100%', margin: '0'}}>
      {MainMovieImage &&
      <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
      title={MainMovieImage.original_title}
        text={MainMovieImage.overview}
          />      
      }
     <div style={{ width: '85%', margin: '2rem auto' }}>
      <h2 style={{ textAlign: 'center'}}>Movies by latest</h2>
      <hr />
       
       <Row gutter={[16,16]}> {/*로우간 16, 16간격을 주겠다}*/}
      
         {Movies && Movies.map((movie, index) => (
              <GridCards poster={`${IMAGE_BASE_URL}w500${movie.poster_path}`} title={movie.title} key={index} 
              />
         ))}
       </Row>
      
     </div>
       <div style={{ display: 'flex', justifyContent:'center'}}>

      <button>Load More</button>

       </div>
     </div>
     
      
    )
}

export default Auth(LandingPage, null);