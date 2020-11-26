import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";

class Player extends React.Component {
  state = {
    play: false,
    progress: 0
  }
  audio = new Audio(this.props.url)
  intervalID = null

  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }));

    this.intervalID = setInterval(() => {
            this.setState({ progress: this.audio.currentTime / this.audio.duration })
            // audioObj.paused ? audioObj.play() : audioObj.pause()
          }, 100);
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));
    clearInterval(this.intervalID)
    this.audio.pause()
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  render() {
    return (
      <footer style={{ alignItems: "flex-start", justifyContent: "flex-end" }}>
        <div className="player-controls">
          {this.state.play
            ? <FaPause size="2vh" color="#2a2a24" onClick={this.togglePlay}/>
            : <FaPlay size="2vh" color="#38332B" onClick={this.togglePlay}/>
          }
        </div>
        <div className="progress">
          <div style={{ backgroundColor: "#38332B", flex: this.state.progress }} />
        </div>
      </footer>
    );
  }
}

export default Player;
