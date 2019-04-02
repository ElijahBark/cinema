import React from 'react';
import style from './MoviePage.module.css'


const MoviePage = ({data, match}) => {
   const filteredArray = data.filter(item => item.id === match.params.id);
   const item = filteredArray[0];
   console.log(item);
   return item ?
        <div className={style.main}>
            <img src={item.poster}/>
            <div className={style.info}>
                <h2 className={style.text}>{item.title}</h2>
                <h3 className={style.text}>{item.genre}</h3>
                <h3 className={style.text}>{item.rating}</h3>
            </div>
        </div>:
        <div>loading...</div>
};

export default MoviePage;