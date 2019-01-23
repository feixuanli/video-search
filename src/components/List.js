import React from 'react';
import VideoCard from './VideoCard';

const List = (props) => {

    const onItemClick = (item) => {
      return function() {
          console.log(item);
          props.onVideoClick(item);
      }
    }

    const list = props.content.map(item => {  
       return <div onClick={onItemClick(item)}><VideoCard key={item.id.videoId} video={item}/></div>
    });

    return list;  
}

export default List; 