import React from 'react';
import VideoCard from './VideoCard';

const List = (props) => {
    return props.content.map(item => {  
       return <VideoCard key={item.id.videoId} video={item}/>
    });     
}

export default List; 