const Header = props =>
  (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  )
  Header.propTypes = {
    title: React.PropTypes.string.isRequired
  };

const Player = props =>
  <div className="player">
    <div className="player-name">
      {props.name}
    </div>
    <div className="player-score">
      <Counter score={props.score}/>
    </div>
  </div>

  Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
  };

const Counter = props =>
  <div className="counter">
    <button className="counter-action decrement">-</button>
    <div className="counter-score">{props.score}</div>
    <button className="counter-action increment">+</button>
  </div>

  Counter.propTypes = {
    score: React.PropTypes.number.isRequired
  };

const Application = function (props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />
      <div>
        <Player name="Joe Chesney" score={31}/>
        <Player name="Skriz Chizney" score={50}/>
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

ReactDOM.render(<Application />, document.getElementById('container'));
