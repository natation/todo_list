import React, { Component } from 'react'; // import react and pull off Component property from React

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this._onTextChange = this._onTextChange.bind(this);
    this.state = { term: 'Starting Value' };
  }
  _onTextChange(e) {
    this.setState({ term: e.target.value });
  }
  render() {
    return (
      <div className="meow">
        <input onChange={this._onTextChange} value={this.state.term} />
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
