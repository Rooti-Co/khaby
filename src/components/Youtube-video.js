import React from 'react';
import YouTube from 'react-youtube';
class LookbookVideo extends React.Component {
  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 0,
        controls: 1,
        enablejsapi: 1,
        fs: 0,
        loop: 1,
        modestbranding: 1,
        showinfo: 0,
        rel: 0
      },
    };
    
    return <YouTube videoId = {"2g811Eo7K8U"} className = { "lookbook__tape-video" } containerClassName = {"lookbook__video-container"} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default LookbookVideo;