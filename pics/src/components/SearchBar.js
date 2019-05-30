import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => { // 'binds' to ensure whenever `this` is used, it always refers to SearchBar
        event.preventDefault(); // prevents form being submitted (and consequently page refreshing)

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;