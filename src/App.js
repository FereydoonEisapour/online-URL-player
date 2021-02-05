import React, { useState } from 'react'
import Header from './Header'
import poster from './poster.png'

function App() {
  const [linkV, setlinkV] = useState()
  const [playing, setplaying] = useState(false)

  let inputHandler = (e) => {
    setlinkV(e.target.value)
  }
  let play = () => {
    let myVideo = document.querySelector("#myVideo")
    if (myVideo.paused) {
      myVideo.play();
      setplaying(true)
    } else {
      myVideo.pause();
      setplaying(false)
    }
  }
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 mt-3 d-flex  justify-content-center">
            <input type="url" onChange={inputHandler} className="border-primary w-25" />
            <button onClick={play} className="btn btn-primary ml-3">{playing ? 'Pause' : 'Play'}</button>
          </div>
          <div className="m-4 ">
            <video controls src={linkV} id="myVideo" poster={poster} className=" col-12"></video>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App