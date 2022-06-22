import React, {useState} from 'react'
import Clock from './components/Clock'
import Counter from './components/Counter'

export default function App() {
  const [showClock, setShowClock] = useState(true);

  return (

    <div>
      {
        showClock ?
          <Clock />
        :
        <></>
      }

      <button
        onClick = {() => setShowClock(!showClock)}
      >
        Toggle Clock
      </button>
      <Counter />
    </div>
  )
}
