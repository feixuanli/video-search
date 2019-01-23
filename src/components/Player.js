import React from 'react';

const Player = (props) => {
    if(props.content.snippet) {
        const url = `https://www.youtube.com/embed/${props.content.id.videoId}`;
        return (
            <div>
                {props.content.snippet.title}
                <iframe title={props.content.snippet.title} src={url}></iframe>
            </div>
        );
    }
    return <div>please search</div>;
}

export default Player;