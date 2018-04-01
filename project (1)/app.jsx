const Application = function(props) {
  return (
    <div className="scoreboard">
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div>
        <div className="player">
          <div className="player-name">
            Joe Chesney
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">-</button>
              <div className="counter-score">34</div>
              <button className="counter-action increment">+</button>
            </div>
          </div>
        </div>
        <div className="player">
          <div className="player-name">
            Stweh Skrizney
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">-</button>
              <div className="counter-score">40</div>
              <button className="counter-action increment">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Application.propTypes = {
  title: React.PropTypes.string,
};
Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(<Application title="CHUPS"/>, document.getElementById('container'));
