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

    componentDidMount() {
        this.onFormSubmit('cat');
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

    onVideoClick = (item) => {
        this.setState({selected: item});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onFormSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <Player content={this.state.selected}/>
                        </div>
                        <div className="five wide column">
                            <VideoList content={this.state.items} onVideoClick={this.onVideoClick}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App; 