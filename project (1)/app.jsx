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

const Stats = function(props){
let totalPlayers = props.players.length;

  return(
    <table className="stats">
      <tbody>
        <thead>
          <tr>
            <td>Players:</td>
            <td>{totalPlayers}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>123</td>
          </tr>
        </thead>
      </tbody>
    </table>
  )
}

Stats.PropTypes = {
  players: React.PropTypes.array.isRequired,

}

const Header = props => {
  return (
    <div className="header">
      <Stats />
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
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  );
};

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired,
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

  onScoreChange: function(index, delta){
    this.state.players[index].score+= delta;
    this.setState(this.state);
  },

  render: function () {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />
        <div className="players">
          {this.state.players.map((player, index) => {
            return (
              <Player 
                onScoreChange={function(delta){this.onScoreChange(index,delta)}.bind(this)} 
                name={player.name} 
                score={player.score} 
                key={player.id} />
            );
          }.bind(this))}
        </div>
      </div>
    );
  }
})


ReactDOM.render(<Application initialPlayers={PLAYERS} />, document.getElementById('container'));
