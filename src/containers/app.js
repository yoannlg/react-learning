import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import VideoDetail from '../components/video-detail'
import Video from '../components/video'
import axios from 'axios'

const API_END_POINT = "https://api.themoviedb.org/3/"
const API_KEY="api_key=abbd7ad1fec54ca82e4133e38c2228b8"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc"

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
			console.log('INIT MOVIES :::',response)
			this.setState({
				movieList:response.data.results.slice(1,6),
				currentMovie:response.data.results[0]}, function(){
					this.applyVideoToCurrentMovie();
				}); 
		});
	}

	applyVideoToCurrentMovie(){ 
		axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos`).then((response)=>{
			console.log('APPLY', response);
			const youtubeKey = response.data.videos.results[0].key
			let newCurrentMovieState = this.state.currentMovie;
			newCurrentMovieState.videoId = youtubeKey;
			this.setState({currentMovie : newCurrentMovieState}) 
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
					<Video videoId={this.state.currentMovie.videoId}/>
					{renderVideoList()}
					<VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
				</div>
			)
		};

}

export default App;