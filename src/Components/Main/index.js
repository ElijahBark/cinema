import React, {Component} from "react";
import 'react-router-dom';
import withData from "../../HOC/withData";
import PageTemplate from "../PageTemplate";
import {LINKS as links} from "../../config";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MoviePage from "../MoviePage";
import Navbar from "../Navbar";
import './main.css'


const Popular =  withData(PageTemplate, links.POPULAR);
const Latest =  withData(PageTemplate, links.LATEST);
const Upcoming =  withData(PageTemplate, links.UPCOMING);
const PopularMoviePage =  withData(MoviePage, links.POPULAR);
const LatestMoviePage =  withData(MoviePage, links.LATEST);
const UpcomingMoviePage =  withData(MoviePage, links.UPCOMING);

class Main extends Component {
    render() {
        return <Router>
            <Navbar/>
            <div className={'main'}>
                <Route exact path={'/popular'} component={Popular}/>
                <Route path={'/popular/:id'} render={(props)=><PopularMoviePage match={props.match}/>} />
                <Route exact path={'/latest'} component={Latest}/>
                <Route path={'/latest/:id'} render={(props) => <LatestMoviePage match={props.match}/>}/>
                <Route exact path={'/upcoming'} component={Upcoming}/>
                <Route path={'/upcoming/:id'} render={(props) => <UpcomingMoviePage match={props.match}/>}/>

            </div>
        </Router>
    }
}

export default Main;