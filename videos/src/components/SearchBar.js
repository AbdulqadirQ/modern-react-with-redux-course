import React from 'react';

class SearchBar extends React.Component {

    state = { term : '' };

    onChangeText = (event) => {
        this.setState({term : event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        // TODO: Ensure to call callback from parent component
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.term} onChange={this.onChangeText} type="text" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;