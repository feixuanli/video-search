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
            <div> Search Bar 
                <form onSubmit={this.onFormSubmit}>
                    <input 
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