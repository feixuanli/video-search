import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/Youtube';
import VideoList from './VideoList';
import Player from './Player';

class App extends React.Component {
    state = {
        searchContent: '',
        items: [],
        selected: {}
    }

    onFormSubmit = async (searchContent) => {
        this.setState({searchContent});
        //send api request 
        const res = await youtube.get('/search', {
            params: {
                q: searchContent, 
            }
        });

        this.setState({items: res.data.items, selected: res.data.items[0]});
    }

    onVideoClick = () => {
        const self = this;
        return function(item){
            self.setState({selected: item});
        }
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui grid"> 
                    <div className="sixteen wide column">
                        <SearchBar onSubmit={this.onFormSubmit} />
                    </div>
                    <div className="ten wide column">
                        <Player content={this.state.selected}/>
                    </div>
                    <div className="six wide column">
                        <VideoList content={this.state.items} onVideoClick={this.onVideoClick()}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App; 