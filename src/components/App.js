import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
//import Youtube from '../api/Youtube';
import List from './List';

class App extends React.Component {
    state = {
        searchContent: '',
        items: []
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
            }
        })
        .then( res => {
            this.setState({items: res.data.items})
        }).catch(function (error) {
            console.log(error);
        });
    }


    render() {
        return (
            <div className="ui grid"> 
                <div className="ten wide column">
                    <SearchBar onSubmit={this.onFormSubmit} />
                </div>
                <div className="six wide column">
                    <List content={this.state.items} />
                </div>
            </div>
        );
    }
}

export default App; 