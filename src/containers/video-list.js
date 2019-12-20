import React from 'react'
import VideoListItem from '../components/video-list-item';

const movies = ['film1','film2','film3','film4','film5']
const VideoList = () => {
    return (
        <div>
            <ul>
                {
                    movies.map(x =>  <VideoListItem key={x} movie={x}/>)
                }
            </ul>
        </div>
    );
}

export default VideoList;