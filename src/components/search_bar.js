import React, { Component } from 'react'; // import react and pull off Component property from React

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this._onTextChange = this._onTextChange.bind(this);
    this.state = { term: '' };
  }
  _onTextChange(e) {
    const term = e.target.value;
    this.props.onSearchTermChange(term);
    this.setState({ term });
  }
  render() {
    return (
      <div className="search-bar">
        <input onChange={this._onTextChange} value={this.state.term} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchTermChange: React.PropTypes.func.isRequired,
};

export default SearchBar;
