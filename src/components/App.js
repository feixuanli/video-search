import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        searchContent: ''
    }

    onFormSubmit = (searchContent) => {
        this.setState({searchContent});
    }


    render() {
        return (
            <div> 
                App 
                <SearchBar onSubmit={this.onFormSubmit}/>
            </div>
        );
    }
}

export default App; 