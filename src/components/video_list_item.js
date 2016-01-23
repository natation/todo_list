import React, { Component } from 'react';

class VideoListItem extends Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }
  _onClick() {
    this.props.onVideoSelect(this.props.video);
  }
  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    return (
      <li className="list-group-item" onClick={this._onClick}>
      <div className="video-list media">
      <div className="media-left">
      <img className="media-object" src={imageUrl} />
      </div>
      <div className="media-body">
      <div className="media-heading">{this.props.video.snippet.title}</div>
      </div>
      </div>
      </li>
    );
  }
}

export default VideoListItem;
