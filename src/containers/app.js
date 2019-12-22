import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import VideoDetail from '../components/video-detail'
import axios from 'axios'

const API_END_POINT = "https://api.themoviedb.org/3/"
const API_KEY="api_key=abbd7ad1fec54ca82e4133e38c2228b8"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc"

// https://api.themoviedb.org/3/discover/movie?api_key=abbd7ad1fec54ca82e4133e38c2228b8&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false


class App extends Component {
	constructor(props){
		super(props)
		this.state={movieList:{}, currentMovie:{}}
	}

	componentDidMount() {
		this.initMovies(); 
	}

	initMovies(){
		axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then((response)=>{
			this.setState({
				movieList:response.data.results.slice(1,6),
				currentMovie:response.data.results[0]});
		});
	}
    render() {
		const renderVideoList= () => {
			if (this.state.movieList.length >=5) {
				return <VideoList movieList={this.state.movieList}/>
			}
		}
			return (
				<div>
					<SearchBar/>
					{renderVideoList()}
					<VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
				</div>
			)
		};

}

export default App;