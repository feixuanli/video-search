import React from 'react';
import VideoCard from './VideoCard';

const VideoList = (props) => {

    const renderedList = props.content.map(item => {  
       return <VideoCard  key={item.id.videoId} video={item} onVideoClick={props.onVideoClick} />
    });

    return <div className="ui relaxed divided list">{renderedList}</div> 
}

export default VideoList; 
