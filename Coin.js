import React, { useState } from 'react';

import Button from '../../shared/components/FormElements/Button';

import './Coin.css';

// class Coin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       result: '',
//       peces: 'peces',
//     };
//     this.tossCoin = this.tossCoin.bind(this);
//   }
//   tossCoin() {
//     this.setState({ peces: '' }, () => {
//       const randomNumber = Math.random();
//       if (randomNumber < 0.5) {
//         this.setState({ result: 'heads' });
//         console.log('heads');
//       } else {
//         this.setState({ result: 'tails' });
//         console.log('tails');
//       }
//     });
//   }

const Coin = (props) => {
  const [count, setCount] = useState();

  function tossCoin() {
    setCount(props.result);
    // const randomNumber = Math.random();
    // if (randomNumber < 0.5) {
    //   setCount('heads');
    //   console.log('heads');
    // } else {
    //   setCount('tails');
    //   console.log('tails');
    // }
  }

  // render() {
  return (
    <div className="FlipCoin">
      <h4>If the result is heads... {props.heads}</h4>
      <h4>If it is tails... {props.tails}</h4>
      <div id="coin" className={count} key={+new Date()}>
        <div className="side-a">
          <img
            src="http://localhost:5000\uploads\images\siteImages\bitcoin-3642042_640.png"
            alt=""
          />
        </div>
        <div className="side-b">
          <img
            src="http://localhost:5000\uploads\images\siteImages\euro-155597_640.png"
            alt=""
          />
        </div>
      </div>
      <br />
      <br />
      <Button id="btn" onClick={tossCoin}>
        Flip Me!
      </Button>
      <p>{count}</p>
    </div>
  );
  // }
};

export default Coin;
