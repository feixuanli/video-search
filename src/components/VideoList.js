import React from 'react';
import VideoCard from './VideoCard';

const VideoList = (props) => {

    const onItemClick = (item) => {
      return function() {
          props.onVideoClick(item);
      }
    }

    const renderedList = props.content.map(item => {  
       return <VideoCard  key={item.id.videoId} video={item} onClick={onItemClick(item)} />
    });

    return <div className="ui relaxed divided list">{renderedList}</div> 
}

export default VideoList; 
