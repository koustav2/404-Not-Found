import { useState } from 'react'
import Scarecrow from './assets/Scarecrow.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <div className='mt-5 ml-10'>
        <h1>404 Not Found </h1>

      </div>
      <div className='grid  m-auto container justify-center  '>
        <div className='sm:flex flex-row gap-10 justify-center items-center'>
          <div>
            <img src={Scarecrow} alt="" />
          </div>
          <div className='grid grid-rows-1'>
            <h2 className='box-border'>
              I had bad
              news for you
            </h2>
            <div className='border-none border-sky-500 mt-7 mb-10 content'>
              <p>The page you are looking for might be removed or is temporarily unavailable</p>
            </div>
            <div class="button_container">
              <button class="btn">
                <span>Back To HomePage</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default App
