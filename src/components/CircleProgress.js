import styled from 'styled-components';
import React from 'react';
const Wrapper = styled.div`
  font-size: 20px;
  margin: 20px;
  position: relative; /* so that children can be absolutely positioned */
  padding: 0;
  width: 5em;
  height: 5em;
  background-color: #f2e9e1;
  border-radius: 50%;
  line-height: 5em;

  &:after {
    border: none;
    position: absolute;
    top: 0.35em;
    left: 0.35em;
    text-align: center;
    display: block;
    border-radius: 50%;
    width: 4.3em;
    height: 4.3em;
    background-color: white;
    content: ' ';
  }
  /* Text inside the control */
  span {
    position: absolute;
    line-height: 5em;
    width: 5em;
    text-align: center;
    display: block;
    color: ${({ color }) => color};
    z-index: 2;
  }
  .left-half-clipper {
    /* a round circle */
    border-radius: 50%;
    width: 5em;
    height: 5em;
    position: absolute; /* needed for clipping */
    clip: rect(0, 5em, 5em, 2.5em); /* clips the whole left half*/
  }
  /* when p>50, don't clip left half*/
  &.over50 .left-half-clipper {
    clip: rect(auto, auto, auto, auto);
  }
  .value-bar {
    /*This is an overlayed square, that is made round with the border radius,
   then it is cut to display only the left half, then rotated clockwise
   to escape the outer clipping path.*/
    transition: all 0.5s;
    position: absolute; /*needed for clipping*/
    clip: rect(0, 2.5em, 5em, 0);
    width: 5em;
    height: 5em;
    border-radius: 50%;
    border: 0.45em solid ${({ color }) => color}; /*The border is 0.35 but making it larger removes visual artifacts */
    box-sizing: border-box;
  }
  /* Progress bar filling the whole right half for values above 50% */
  &.over50 .first50-bar {
    /*Progress bar for the first 50%, filling the whole right half*/
    position: absolute; /*needed for clipping*/
    clip: rect(0, 5em, 5em, 2.5em);
    background-color: ${({ color }) => color};
    border-radius: 50%;
    width: 5em;
    height: 5em;
  }
  &:not(.over50) .first50-bar {
    display: none;
  }

  /* Progress bar rotation position */
  &.p0 .value-bar {
    transform: rotate(0deg);
  }
  &.p1 .value-bar {
    transform: rotate(4deg);
  }
  &.p2 .value-bar {
    transform: rotate(7deg);
  }
  &.p3 .value-bar {
    transform: rotate(11deg);
  }
  &.p4 .value-bar {
    transform: rotate(14deg);
  }
  &.p5 .value-bar {
    transform: rotate(18deg);
  }
  &.p6 .value-bar {
    transform: rotate(22deg);
  }
  &.p7 .value-bar {
    transform: rotate(25deg);
  }
  &.p8 .value-bar {
    transform: rotate(29deg);
  }
  &.p9 .value-bar {
    transform: rotate(32deg);
  }
  &.p10 .value-bar {
    transform: rotate(36deg);
  }
  &.p11 .value-bar {
    transform: rotate(40deg);
  }
  &.p12 .value-bar {
    transform: rotate(43deg);
  }
  &.p13 .value-bar {
    transform: rotate(47deg);
  }
  &.p14 .value-bar {
    transform: rotate(50deg);
  }
  &.p15 .value-bar {
    transform: rotate(54deg);
  }
  &.p16 .value-bar {
    transform: rotate(58deg);
  }
  &.p17 .value-bar {
    transform: rotate(61deg);
  }
  &.p18 .value-bar {
    transform: rotate(65deg);
  }
  &.p19 .value-bar {
    transform: rotate(68deg);
  }
  &.p20 .value-bar {
    transform: rotate(72deg);
  }
  &.p21 .value-bar {
    transform: rotate(76deg);
  }
  &.p22 .value-bar {
    transform: rotate(79deg);
  }
  &.p23 .value-bar {
    transform: rotate(83deg);
  }
  &.p24 .value-bar {
    transform: rotate(86deg);
  }
  &.p25 .value-bar {
    transform: rotate(90deg);
  }
  &.p26 .value-bar {
    transform: rotate(94deg);
  }
  &.p27 .value-bar {
    transform: rotate(97deg);
  }
  &.p28 .value-bar {
    transform: rotate(101deg);
  }
  &.p29 .value-bar {
    transform: rotate(104deg);
  }
  &.p30 .value-bar {
    transform: rotate(108deg);
  }
  &.p31 .value-bar {
    transform: rotate(112deg);
  }
  &.p32 .value-bar {
    transform: rotate(115deg);
  }
  &.p33 .value-bar {
    transform: rotate(119deg);
  }
  &.p34 .value-bar {
    transform: rotate(122deg);
  }
  &.p35 .value-bar {
    transform: rotate(126deg);
  }
  &.p36 .value-bar {
    transform: rotate(130deg);
  }
  &.p37 .value-bar {
    transform: rotate(133deg);
  }
  &.p38 .value-bar {
    transform: rotate(137deg);
  }
  &.p39 .value-bar {
    transform: rotate(140deg);
  }
  &.p40 .value-bar {
    transform: rotate(144deg);
  }
  &.p41 .value-bar {
    transform: rotate(148deg);
  }
  &.p42 .value-bar {
    transform: rotate(151deg);
  }
  &.p43 .value-bar {
    transform: rotate(155deg);
  }
  &.p44 .value-bar {
    transform: rotate(158deg);
  }
  &.p45 .value-bar {
    transform: rotate(162deg);
  }
  &.p46 .value-bar {
    transform: rotate(166deg);
  }
  &.p47 .value-bar {
    transform: rotate(169deg);
  }
  &.p48 .value-bar {
    transform: rotate(173deg);
  }
  &.p49 .value-bar {
    transform: rotate(176deg);
  }
  &.p50 .value-bar {
    transform: rotate(180deg);
  }
  &.p51 .value-bar {
    transform: rotate(184deg);
  }
  &.p52 .value-bar {
    transform: rotate(187deg);
  }
  &.p53 .value-bar {
    transform: rotate(191deg);
  }
  &.p54 .value-bar {
    transform: rotate(194deg);
  }
  &.p55 .value-bar {
    transform: rotate(198deg);
  }
  &.p56 .value-bar {
    transform: rotate(202deg);
  }
  &.p57 .value-bar {
    transform: rotate(205deg);
  }
  &.p58 .value-bar {
    transform: rotate(209deg);
  }
  &.p59 .value-bar {
    transform: rotate(212deg);
  }
  &.p60 .value-bar {
    transform: rotate(216deg);
  }
  &.p61 .value-bar {
    transform: rotate(220deg);
  }
  &.p62 .value-bar {
    transform: rotate(223deg);
  }
  &.p63 .value-bar {
    transform: rotate(227deg);
  }
  &.p64 .value-bar {
    transform: rotate(230deg);
  }
  &.p65 .value-bar {
    transform: rotate(234deg);
  }
  &.p66 .value-bar {
    transform: rotate(238deg);
  }
  &.p67 .value-bar {
    transform: rotate(241deg);
  }
  &.p68 .value-bar {
    transform: rotate(245deg);
  }
  &.p69 .value-bar {
    transform: rotate(248deg);
  }
  &.p70 .value-bar {
    transform: rotate(252deg);
  }
  &.p71 .value-bar {
    transform: rotate(256deg);
  }
  &.p72 .value-bar {
    transform: rotate(259deg);
  }
  &.p73 .value-bar {
    transform: rotate(263deg);
  }
  &.p74 .value-bar {
    transform: rotate(266deg);
  }
  &.p75 .value-bar {
    transform: rotate(270deg);
  }
  &.p76 .value-bar {
    transform: rotate(274deg);
  }
  &.p77 .value-bar {
    transform: rotate(277deg);
  }
  &.p78 .value-bar {
    transform: rotate(281deg);
  }
  &.p79 .value-bar {
    transform: rotate(284deg);
  }
  &.p80 .value-bar {
    transform: rotate(288deg);
  }
  &.p81 .value-bar {
    transform: rotate(292deg);
  }
  &.p82 .value-bar {
    transform: rotate(295deg);
  }
  &.p83 .value-bar {
    transform: rotate(299deg);
  }
  &.p84 .value-bar {
    transform: rotate(302deg);
  }
  &.p85 .value-bar {
    transform: rotate(306deg);
  }
  &.p86 .value-bar {
    transform: rotate(310deg);
  }
  &.p87 .value-bar {
    transform: rotate(313deg);
  }
  &.p88 .value-bar {
    transform: rotate(317deg);
  }
  &.p89 .value-bar {
    transform: rotate(320deg);
  }
  &.p90 .value-bar {
    transform: rotate(324deg);
  }
  &.p91 .value-bar {
    transform: rotate(328deg);
  }
  &.p92 .value-bar {
    transform: rotate(331deg);
  }
  &.p93 .value-bar {
    transform: rotate(335deg);
  }
  &.p94 .value-bar {
    transform: rotate(338deg);
  }
  &.p95 .value-bar {
    transform: rotate(342deg);
  }
  &.p96 .value-bar {
    transform: rotate(346deg);
  }
  &.p97 .value-bar {
    transform: rotate(349deg);
  }
  &.p98 .value-bar {
    transform: rotate(353deg);
  }
  &.p99 .value-bar {
    transform: rotate(356deg);
  }
  &.p100 .value-bar {
    transform: rotate(360deg);
  }
`;

const Circle = ({ progress = 10, color = '#333' }) => {
  return (
    <Wrapper className={`p${progress}`} color={color}>
      <span>{progress}</span>
      <div className="left-half-clipper">
        <div className="first50-bar"></div>
        <div className="value-bar"></div>
      </div>
    </Wrapper>
  );
};

export default Circle;
