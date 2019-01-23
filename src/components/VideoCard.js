import React from 'react';

const VideoCard = ({video}) => {
    
    return (
        <div className="ui segment">
            <img alt={video.snippet.description} src={video.snippet.thumbnails.medium.url}/>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
        </div>
    );
}

export default VideoCard;
