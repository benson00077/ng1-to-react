import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isHelloShow, setIsHellowShow] = useState(window.location.hash === '#!/counter/hello')

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> React.js component wraped in Angular.js </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <a href="#!/counter/hello" ui-sref-active="active" onClick={() => setIsHellowShow(true)}>Counter.Hello</a>
      </div>
      <Hello isShow={isHelloShow}/>
    </>
  )
}


function Hello({isShow}: {isShow : boolean}) {
  return isShow ? <div>Counter - Hello</div> : null
}

export default App
