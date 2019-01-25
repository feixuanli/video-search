import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchText: '',
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.searchText);
    }

    onInputChange = (e) => {
        this.setState({searchText: e.target.value});
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="search"> Search a video </label>
                        <input 
                            id="search"
                            type='text' 
                            value={this.state.searchText}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>

        );
    }
}

export default SearchBar;