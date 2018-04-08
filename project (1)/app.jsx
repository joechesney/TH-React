let PLAYERS = [
  {
    id: 1,
    name: "Joe Chesney",
    score: 35
  },
  {
    id: 2,
    name: "Old Faceney",
    score: 38
  },
  {
    id: 3,
    name: "Regular Dudesney",
    score: 15
  }
]

const Header = props => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
};
Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={function() {props.onChange(-1);}}>-</button>
      <div className="counter-score">{props.score}</div>
      <button className="counter-action increment" onClick={function() {props.onChange(1);}}>+</button>
    </div>
  );
}

Counter.PropTypes = {
  score: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

const Player = props => {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} />
      </div>
    </div>
  );
};

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};

const Application = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired
    })).isRequired,
  },

  getDefaultProps: function () {
    return {
      title: "Scoreboard",
    }
  },

  getInitialState: function () {
    return {
      players: this.props.initialPlayers,
    }
  },

  render: function () {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />
        <div className="players">
          {this.state.players.map(player => {
            return <Player name={player.name} score={player.score} key={player.id} />
          })}
          <Player name="Joe Dih Chesney" score={31} />
          <Player name="Skriz Chizney" score={50} />
        </div>
      </div>
    );
  }
})


ReactDOM.render(<Application initialPlayers={PLAYERS} />, document.getElementById('container'));
