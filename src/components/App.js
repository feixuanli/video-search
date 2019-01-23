import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
//import Youtube from '../api/Youtube';
import List from './List';
import Player from './Player';

class App extends React.Component {
    state = {
        searchContent: '',
        items: [],
        selected: {}
    }

    onFormSubmit = (searchContent) => {
        this.setState({searchContent});
        //send api request 
        // this.setState({items: await Youtube(this.state.searchContent)});
        axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              'q': searchContent,
              'part': 'snippet',
              'key': 'AIzaSyDvPakoXS8Z_LT23tfFKbx0nDGInH0sn2A'
            },
        })
        .then( res => {
            console.log(res)
            this.setState({items: res.data.items, selected: res.data.items[0]});
        }).catch(function (error) {
            console.log(error);
        });
    }

    onVideoClick = () => {
        const self = this;
        return function(item){
            console.log('app item selected', item);
            self.setState({selected: item});
        }
    }

    render() {
        return (
            <div className="ui grid"> 
                <div className="sixteen wide column">
                    <SearchBar onSubmit={this.onFormSubmit} />
                </div>
                <div className="ten wide column">
                    <Player content={this.state.selected}/>
                </div>
                <div className="six wide column">
                    <List content={this.state.items} onVideoClick={this.onVideoClick()}/>
                </div>
            </div>
        );
    }
}

export default App; 