import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Popular(){
    const [popular, setPopular] = useState([]);

useEffect(() => {
    getPopular();
},[]);

    const getPopular = async () => {
const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
const data = await api.json();
// console.log(data);
setPopular(data.recipes);
console.log(data.recipes);
    }

//going through the fetched data recipes to dispaly them through maping
    return (
        <div>
       <Wrapper>
        <h3>Popular Picks</h3>
        
        <Splide options={{
            perPage: 4,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "5rem",
        }}>
        {popular.map((recipe) => {
            return (
                <SplideSlide>
           <Card>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title}/>
           </Card>
           </SplideSlide>
            );
        })}
        </Splide>

    </Wrapper>
     </div>
    )
}

const Wrapper = styled.div`
margin: 4rem Orem;
`

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;

 img{
    border-radius: 2rem;
}
`

export default Popular;