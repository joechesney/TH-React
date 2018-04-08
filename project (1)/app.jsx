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

const Counter = React.createClass({
  propTypes: {
    initialScore: React.PropTypes.number.isRequired,

  },

  getInitialState: function () {
    return {
      score: this.props.initialScore,
    }
  },

  incrementScore: function(e){
    this.setState({
      score: (this.state.score+1),
    });    
  },

  decrementScore: function(){
    this.setState({
      score: (this.state.score-1),
    });
  },
  render: function () {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
        <div className="counter-score">{this.state.score}</div>
        <button className="counter-action increment" onClick={this.incrementScore}>+</button>
      </div>
    );
  }
});

const Player = props => {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter initialScore={props.score}/>
      </div>
    </div>
  );
};

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};

const Application = function (props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />
      <div className="players">
        {props.players.map(player => {
          return <Player name={player.name} score={player.score} key={player.id} />
        })}
        <Player name="Joe Dih Chesney" score={31} />
        <Player name="Skriz Chizney" score={50} />
      </div>
    </div>
  );
};

Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
  })).isRequired,
};
Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));
