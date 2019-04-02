import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './moviePreview.module.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const MoviePreview = ({item, history}) => {
    return <div className={style.item} onClick={() => history.push(item.id)}>
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={1500}>
        <img className={style.image} src={item.poster}/>
        </ReactCSSTransitionGroup>

        <h2 className={style.title}>{item.title}</h2>
        <h3 className={style.genre}>{item.genre}</h3>
    </div>
};

export default withRouter(MoviePreview);