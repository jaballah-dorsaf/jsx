import React from 'react';
import './App.css';
import './style.css';

function App() {
  return ( < div className = "App" >
    <div style={{border:'solid 1px black', maxwidth:'100'}}>
    <h1 className = "title-red" > Jaballah Dorsaf </h1>
    <br/>
    <img src = "/imageInPublic.jpg"  alt="imagepublic" className="my-image" />
    <br/>
    <img src = "/imageInSrc.jpg" alt="imagesrc" className="my-image" />
    </div>
    <video width='320' height='240' controls> 
     <source src="myVideo.mp4" type="video/mp4"></source>
   </video>
    </div>
  );
}

export default App;