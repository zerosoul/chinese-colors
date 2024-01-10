import React, { useState, useRef } from 'react';
import { TfiHeadphone } from 'react-icons/tfi';
import styled, { keyframes } from 'styled-components';
const Rotation = keyframes`
  from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
`;
const Swing = keyframes`
  from {
      transform: translateX(10px);
    }
    to {
      transform: translateX(0);
    }
`;
const StyledWrapper = styled.aside`
  position: fixed;
  left: 0.4rem;
  bottom: 0.4rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  background: #fff;
  color: #333;
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
  .tip {
    position: absolute;
    font-size: 0.5rem;
    padding: 0.2rem 0.4rem;
    background: rgba(2, 2, 2, 0.4);
    line-height: 1.4;
    right: -180%;
    border-radius: 0.5rem;
    animation: ${Swing} 2s infinite ease-in-out forwards;
  }
`;
const MUSIC_PLAYED = !!localStorage.getItem('MUSIC_PLAYED') || false;
export default function Bgm() {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(MUSIC_PLAYED);
  const bgMusic = useRef(null);
  const handlePause = () => {
    setPlaying(false);
  };
  const handlePlaying = () => {
    setPlaying(true);
  };
  const togglePlay = () => {
    if (!played) {
      setPlayed(true);
      localStorage.setItem('MUSIC_PLAYED', true);
    }
    const bgM = bgMusic.current;
    if (playing) {
      bgM.pause();
    } else {
      bgM.play();
    }
  };

  return (
    <StyledWrapper onClick={togglePlay} className={playing ? 'playing' : 'paused'}>
      <TfiHeadphone size="28" fill="#333" />
      <audio
        ref={bgMusic}
        autoPlay={false}
        onPlaying={handlePlaying}
        onPause={handlePause}
        loop={true}
        src="/bgm.mp3"
      ></audio>
      {!played && <div className="tip">👈 点击播放</div>}
    </StyledWrapper>
  );
}
