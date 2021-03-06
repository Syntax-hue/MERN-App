import React, { Component } from "react";

export default class PauseClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: this.props.pauseTime,
      startBtn: true,
      timeOutID: "",
    };
  }
  componentDidUpdate() {
    if (this.state.timer === 0) clearInterval(this.state.timeOutID);
  }

  handleStart = (e) => {
    e.preventDefault();

    this.setState({
      startBtn: !this.state.startBtn,
    });

    let timerID = setInterval(() => {
      this.setState((prev) => ({
        timer: prev.timer - 1,
      }));
    }, 1000);

    this.setState({
      timeOutID: timerID,
    });
  };

  handleStop = (e) => {
    e.preventDefault();

    clearInterval(this.state.timeOutID);
    this.setState({
      startBtn: !this.state.startBtn,
    });
  };

  handleReset = (e) => {
    e.preventDefault();

    clearInterval(this.state.timeOutID);
    this.setState({
      timer: this.props.pauseTime,
      startBtn: true,
    });
  };

  render() {
    let minutes = Math.floor((this.state.timer % 3600) / 60);
    let seconds = Math.floor(this.state.timer % 60);
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    let timeText = `${displayMinutes}: ${displaySeconds}`;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-3"></div>
          <div className="col-xs-6">
            <div className="timer">
              <h1>{this.props.title}</h1>
              <h2>{timeText}</h2>
              {this.state.startBtn ? (
                <button
                  className="btn btn-primary"
                  onClick={this.handleStart}
                  style={{ margin: 5, width: "12vh" }}
                >
                  Start
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={this.handleStop}
                  style={{ margin: 5, width: "12vh" }}
                >
                  Stop
                </button>
              )}
              <button
                style={{ margin: 5, width: "12vh" }}
                className="btn btn-primary"
                onClick={this.handleReset}
              >
                Reset
              </button>
            </div>{" "}
          </div>
          <div className="col-xs-3"></div>
        </div>
      </div>
    );
  }
}
