import React from 'react';
import './VideoCard.css';

const VideoCard = ({video, onVideoClick}) => {
    
    return (
        //video closure ????
        <div className="video-item item" onClick={() => onVideoClick(video)}>
            <img className="ui image" alt={video.snippet.description} src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
