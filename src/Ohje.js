// import React, {Component} from 'react';
// import './App.css';
// import Grid from './grid/grid';
// import Header from './Header/header';
// import Footer from './Footer/footer';

// class App extends Component {

//   cards = [{id:1, name: 'dog'},{id:2, name: 'dog'},{id:3, name: 'cat'},{id:4, name: 'cat'},{id:5, name: 'mouse'},{id:6, name: 'mouse'},{id:7, name: 'horse'},{id:8, name: 'horse'},
//     {id:9, name: 'pig'},{id:10, name: 'pig'},{id:11, name: 'chicken'},{id:12, name: 'chicken'},{id:13, name: 'cow'},{id:14, name: 'cow'},{id:15, name: 'fox'},{id:16, name: 'fox'}]
//     .sort( () => Math.random() - 0.5);
//   clicks = [];
//   state = {
//     current: -1,
//     clicks: []
// }

//   clickHandler = (cardId) => {
//     // this.clicks.push(cardId.name);
//     const {clicks, current} = this.state;
//     if (current === -1) { // no card selected to check
//       this.setState({
//          current: cardId,
//          clicks: clicks.includes(cardId) ? clicks : [...clicks, cardId]
//       });
//       return; 
//     }
  
  
//   //   console.log(this.clicks);
//   //   console.log(cardId.name);
//   //   if (this.clicks.length > 1) {
//   //   this.compare(cardId.name);
//   //   }
  
//   if (cardId === current) { // already selected card(totally same card)
//     this.setState({
//       current: -1,  // unselect last selected card :(
//       clicks: clicks.slice(0, clicks.length - 1), // remove last selected click
//   });
//   } else { // different card. here check if they have same name
//      if (this.cards[cardId].name === this.cards[current].name) {
//       // couple cards
//       console.log('Bingo They are Same!!!');
//       this.setState({
//         current: -1,
//         clicks: [...clicks, cardId], // add just selected card in cliks
//       });
//     } else {
//       // Oh, you failed!
//       this.setState({
//         current: -1,  // unselect last selected card :(
//         clicks: clicks.slice(0, clicks.length - 1)
//       });
//     }
//   }
  
// //   compare = (name) => {
// //     if (name === this.clicks[0]) {
// //       console.log('pair')
// //     } else {
// //       console.log('nope');
// //     }
// // }
//   }
//   render() {
//   return (
//     <div className="App">
//       <Header />
//       <div className='Grid-container'>
//         <div className='wrapper'>
//         {this.cards.map((card) =>
//         <Grid click={() => this.clickHandler(card.id)} id={card.id} />
//         )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
//   }
// }

// export default App;
