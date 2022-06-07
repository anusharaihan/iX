import React from 'react'
import Demo from './components/demo/Demo'
import Counter from './components/counter/Counter';

export default function App() {

  // function sayHello() {
  //   alert('hello');
  // }

  return (
    <div class='container'>

      {/* <p>click to say hello</p>
      <button onClick={sayHello} >
        say hello
      </button>
      <Demo name="Jacques" surname="de Villiers"></Demo>
      <Demo name="Cam" surname="Kirkpatrick"></Demo>
      <Demo name="Michelle" surname="Fisher"></Demo>
      <Demo name="Mitchell" surname="Doe"></Demo> */}

      <Counter count={0}></Counter>
      <Counter count={5}></Counter>
      <Counter count={10}></Counter>
      <Counter count={15}></Counter>


    </div>
  )
}