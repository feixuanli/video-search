import React from 'react';

const Player = (props) => {
    if(props.content.snippet) {
        const url = `https://www.youtube.com/embed/${props.content.id.videoId}`;
        return (
            <div>
                <iframe className="ui container" style={{height: '400px'}} title={props.content.snippet.title} src={url}></iframe>
                <p> {props.content.snippet.title}</p>
            </div>
        );
    }
    return <div>please search</div>;
}

export default Player;