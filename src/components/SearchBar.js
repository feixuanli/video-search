import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchText: '',
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.searchText);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label for="search"> Search a video </label>
                    <input 
                        id="search"
                        type='text' 
                        value={this.state.searchText}
                        onChange={e => this.setState({searchText: e.target.value})}
                    />
                </form>
            </div>

        );
    }
}

export default SearchBar;