import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const [like, setLike] = useState(0);

  const likeBtn = () =>{

    setLike(like+1);
  }

  return (
    <div className="App">
      <header>
        <div className='head'><h1>Operating System Presentation</h1></div>
        <button onClick={toggleMenu} className="menu-btn">Contributor</button>
      </header>
      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li><p onClick={toggleMenu}>&nbsp;&nbsp;Kim Dong Hyeon</p></li>
          <li><p onClick={toggleMenu}>&nbsp;&nbsp;Kim Hye Eun</p></li>
          <li><p onClick={toggleMenu}>&nbsp;&nbsp;Park Jin Hyung</p></li>
        </ul>
      </nav>
      <main>
        <section id="about">
          <h2>&nbsp;About This Webpage</h2>
          <p>&nbsp;This is a web page for a subject 'Operating System' which is lectured on Catholic University of Korea.</p>
        </section>
        <section id="aim">
          <h2>&nbsp;Aim</h2>
          <ul>
            <li>
              <h3>First</h3>
              <p>A brief understanding about how HTTP protocol works.</p>
            </li>
            <li>
              <h3>Second</h3>
              <p>Obtain a deep understanding with building a webserver with orange pi</p>
            </li>
          </ul>
        </section>
        <section id="animation">
          <div>
            <a href="https://product.kyobobook.co.kr/detail/S000001868743" target='_blank'>
            <img id="dino1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Chromium_T-Rex-error-offline.svg/1024px-Chromium_T-Rex-error-offline.svg.png?20210319220015" alt="dino" />
            </a>
          </div>
        </section>
        <section className='sectionlike'>
            <div className="diver">
              <div></div>
            <div><button className="aesthetic-button" onClick={likeBtn}>I like this page &#10084; X {like} times </button></div>
              <div></div>
            </div>
        </section>
      </main>
      <footer>
        <p>&nbsp;&copy; 2023 Kim Dong Hyeon</p>
      </footer>
    </div>
  );
}

export default App;