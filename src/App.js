import React, { useEffect, useState } from 'react';
import './App.css';
import pc from './pc.svg'

function App() {
  const [animationState, setAnimationState] = useState('');

  useEffect(() => {
    const keys = Array.from(document.querySelectorAll('.key'));
    const order = [1, 8, 0, 4, 7, 6, 9, 2, 5, 3]

    keys.map((key, i) => {
      let orderIndex = order.indexOf(i);
      let animation = key.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(2px)' },
        { transform: 'translateX(0px)' }
      ], {
        duration: 200,
        iterations: 1,
        easing: 'cubic-bezier(0.37, 0, 0.63, 1)',
        direction: 'normal',
        delay: (orderIndex * 100),
      });

      animation.onfinish = () => {
        setTimeout(() => { animation.play(0) }, 1100);
      }
    })
    return () => { };
  }, []);


  return (
    <div className="App">
      <header className="App-header">


        <button className="but" onClick={() => { animationState ? setAnimationState('') : setAnimationState('animating') }}>Toggle animation</button>

        <div className="computer">
          <img src={pc} className="computer" alt="computer" />
          <div className="loo">
            <div className={`pill ${animationState}`}>{animationState}</div>
          </div>
          <div className="keyboard">
            <span className="key key1"></span>
            <span className="key key2"></span>
            <span className="key key3"></span>
            <span className="key key4"></span>
            <span className="key key5"></span>
            <span className="key key6"></span>
            <span className="key key7"></span>
            <span className="key key8"></span>
            <span className="key key9"></span>
            <span className="key key10"></span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
