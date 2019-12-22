import React from 'react'
import VideoListItem from '../components/video-list-item';

const VideoList = ({movieList}) => {
    console.log('LIST ITEM',movieList)
    return (
        <div>
            <ul>
                {
                    movieList.map(movie =>  {
                        console.log(movie)
                    return <VideoListItem key={movie.id} movie={movie}/>})
                }
            </ul>
        </div>
    );
}

export default VideoList;