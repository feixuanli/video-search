import React from 'react';

import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';

class App extends React.Component {
    state = {
        searchContent: ''
    }

    onFormSubmit = (searchContent) => {
        this.setState({searchContent});
        //send api request 
        Youtube(this.state.searchContent);
    }


    render() {
        return (
            <div className="ui container"> 
                App 
                <SearchBar onSubmit={this.onFormSubmit}/>
            </div>
        );
    }
}

export default App; 