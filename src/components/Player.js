import React from 'react';

const Player = (props) => {
    if(props.content.snippet) {
        const url = `https://www.youtube.com/embed/${props.content.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe style={{height: '400px'}} title={props.content.snippet.title} src={url}></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header"> {props.content.snippet.title}</h4>
                    <p>{props.content.snippet.description}</p>
                </div>
            </div>
        );
    }
    return <div>Loading...</div>;
}

export default Player;