import React from 'react';
import MoviePreview from '../MoviePreview';
import style from './PageTemplate.module.css';

const PageTemplate = (props) => {

        return (
            <div className={style.page}>{
                props.data.map((item, i) => {
                    return  <MoviePreview  key={i} item={item}/>
                })}
            </div>
        );
};

export default PageTemplate;
