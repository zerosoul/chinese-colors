import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
const Rotation = keyframes`
  from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
`;
const StyledWraper = styled.aside`
  position: fixed;
  left: 0.4rem;
  bottom: 0.4rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  background: #fff;
  padding: 0.3rem;
  box-shadow: 0 0 6px black;
  display: flex;
  justify-content: center;
  align-items: center;
  audio {
    display: none;
  }
  animation: ${Rotation} 2s infinite linear forwards;
  &.playing {
    animation-play-state: running;
  }
  &.paused {
    animation-play-state: paused;
  }
`;

export default function Bgm() {
  const [playing, setPlaying] = useState(false);
  const bgMusic = useRef(null);
  const handlCanPlay = () => {
    const music = bgMusic.current;
    console.log('onCanPlay', music);
    // promise?
    const pr = music.play();
    if (pr !== undefined) {
      pr.then(() => {
        // Autoplay started!
      }).catch(() => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
      });
    }
  };
  const handlePause = () => {
    setPlaying(false);
  };
  const handlePlaying = () => {
    setPlaying(true);
  };
  const togglePlay = () => {
    const bgM = bgMusic.current;
    if (playing) {
      bgM.pause();
    } else {
      bgM.play();
    }
  };

  return (
    <StyledWraper onClick={togglePlay} className={playing ? 'playing' : 'paused'}>
      <svg
        t="1571192531683"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="9314"
        width="24"
        height="24"
      >
        <path
          d="M217.7 928.3c-47.7 0-84.1-36.4-84.1-84.1V619.9c0-47.7 36.4-84.1 84.1-84.1 47.7 0 84.1 36.4 84.1 84.1v224.3c0 47.6-36.5 84.1-84.1 84.1z m672.7-84.1V619.9c0-47.7-39.2-84.1-84.1-84.1-44.9 0-84.1 36.4-84.1 84.1v224.3c0 47.7 39.2 84.1 84.1 84.1 44.9 0 84.1-36.5 84.1-84.1z m70.1-266.3C960.5 320 755.9 95.7 512 95.7S63.5 322.8 63.5 577.9v280.3h42V577.9c0-235.5 185-442.9 406.5-442.9s406.5 207.4 406.5 442.9v280.3h42V577.9z"
          p-id="9315"
          fill="#515151"
        ></path>
      </svg>
      <audio
        ref={bgMusic}
        autoPlay={true}
        onPlaying={handlePlaying}
        onCanPlay={handlCanPlay}
        onPause={handlePause}
        loop={true}
        src="./static/bgm.mp3"
      ></audio>
    </StyledWraper>
  );
}
