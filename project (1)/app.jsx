const Application = function() {
  return (
    <div className="application">
      <div className="header">
        <h1>Scoreboard</h1>
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

      </div>
    </div>
  );
};

ReactDOM.render(<Application/>, document.getElementById('container'));
