import React from 'react';
import YouTube from 'react-youtube';
import styles from './VideoCard.css';

class VideoCard extends React.Component {
  render() {
    const opts = {
      height: 'auto',
      width: 'auto',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
        <div className={styles.centering}>
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default VideoCard;