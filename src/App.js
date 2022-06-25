import React from 'react';
import Tesse from './component/Tesse.js';
import latte from './assets/latte.png';
import code from './assets/coding.png';
import baking from './assets/whisk.png';
import plant from './assets/plant.png';
import camping from './assets/camping.png';
import movie from './assets/cinema-clapperboard.png';
import motivatie from './assets/BeCode.m4a';
import logoBecode from './assets/logo-becode.png';
import { useState, useEffect } from "react";
import './App.css';


const useAudio = () => {
  const [audio] = useState(new Audio(motivatie));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
  );

  useEffect(() => {
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const App = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
      <>
        <body>
        <header>
          <h1>Tesse Bogers</h1>
          <article className="becode">
            <div>
              <button className="sound-button" onClick={toggle}><img className="becode" src={logoBecode} alt="BeCode-logo"/></button>
            </div>
          </article>
          { !playing ?
              <p className="motivation">Klik op het BeCode-logo om naar mijn motivatie te luisteren!</p>
              :
              <p className="motivation">Je luistert naar mijn motivatie! Even pauze? Klik op het BeCode-logo</p>
          }


          <a className="link" href="https://github.com/TesseBogers/BeCode/blob/main/README.md">Uitgeschreven motivatie hier op GitHub</a>
        </header>

        <main>
          <Tesse
              image={latte} title={latte}
          />
          <Tesse
              image={code} title={code}
          />
          <Tesse
              image={camping} title={camping}
          />
          <Tesse
              image={baking} title={baking}
          />
          <Tesse
              image={plant} title={plant}
          />
          <Tesse
              image={movie} title={movie}
          />
        </main>
        </body>
      </>
  );
}
export default App;