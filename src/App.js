import React, {Component} from 'react';
import './App.css';
import Grid from './grid/grid';
import Header from './Header/header';
import GameOver from './gameOver/gameOver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat, faHorse, faSpider, faDragon, faFish, faHippo, faCrow } from '@fortawesome/free-solid-svg-icons'

class App extends Component {

  state={
    cards : [{id:1, name: 'dog', icon: faDog},{id:2, name: 'dog', icon: faDog},{id:3, name: 'cat', icon: faCat }, {id:4, name: 'cat', icon: faCat},{id:5, name: 'fish', icon: faFish},{id:6, name: 'fish', icon: faFish},{id:7, name: 'horse', icon: faHorse},{id:8, name: 'horse', icon: faHorse},
    {id:9, name: 'dragon', icon: faDragon},{id:10, name: 'dragon', icon: faDragon},{id:11, name: 'crow', icon: faCrow},{id:12, name: 'crow', icon: faCrow},{id:13, name: 'spider', icon: faSpider},{id:14, name: 'spider', icon: faSpider},{id:15, name: 'hippo', icon: faHippo},{id:16, name: 'hippo', icon: faHippo}]
    .sort( () => Math.random() - 0.5),
    points : 0,
    clicks : [],
    lives : 10,
    showGameOver: false,
    gameOverText: ''
  }

  clicks = [];
  names = [];
  matches = [];

  clickHandler(clickedCard){

    this.clicks.push(clickedCard.id)
    this.setState(prevState => ({
      clicks : this.clicks
    }))

    this.names.push(clickedCard.name)
    console.log(this.names)

    if (this.clicks.length >= 2) {
      this.clicks.length = 2;
      this.compare()
      if (this.matches.length === 16) {
        setTimeout(this.setState({
          showGameOver: true,
          gameOverText: 'You won! '
        }), 600);
      }     
      }
      else {
        console.log(this.state.clicks.length)
        return
      }
  }
  compare() {
      if (this.names[0] === this.names[1] && 
          this.state.clicks[0] !== this.state.clicks[1]) {

            this.matches.push(...this.clicks);
            this.clicks = [];
            this.names = [];
            console.log(this.clicks)
            this.setState(prevState =>({
              points : this.state.points +1,
              clicks : this.clicks
            }))
        } else {
          setTimeout(() => this.endTurn(), 600);
        }
  }
  endTurn() {
    this.names.length = 0;
    this.clicks.length = 0;

    this.setState({
      clicks : this.clicks,
      lives : this.state.lives -1
    })

    if (this.state.lives === 0) {
      this.setState({
        showGameOver: true,
        gameOverText: 'Out of lives :('
      })
    } 
  }

  render() {
  return (
    <div className="App">
      <Header points={this.state.points}
              lives={this.state.lives}
      />
      <div className='Grid-container'>
        <div className='wrapper'>
        {this.state.cards.map((card) =>
        <Grid click={() => this.clickHandler(card)} 
              key= {card.id}
              icon={this.state.clicks.includes(card.id) || this.matches.includes(card.id) ? <FontAwesomeIcon icon={card.icon} size='3x'/> : ''}
              />)}
        </div>
        {this.state.showGameOver && <GameOver points={this.state.points} text={this.state.gameOverText} />}
      </div>
    </div>
  );
  }
}

export default App;

