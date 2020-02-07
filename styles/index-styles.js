import css from "styled-jsx/css";

export const indexStyles = css`
  .posts {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 6vw;
    margin: 5em auto;
    max-width: 80vw;
  }
  main {
    grid-area: 0.25;
  }
  aside {
    grid-area: 0.0833333333;
  }
  h2 {
    margin-bottom: 2em;
  }
  a,
  a:active,
  a:visited {
    text-decoration: none;
    color: black;
  }
  a.readmore {
    display: inline-block;
    font-size: 11px;
    text-transform: uppercase;
    padding: 5px 15px;
    letter-spacing: 2px;
    position: relative;
    color: #000;
    font-weight: 700;
    font-family: "Open Sans", serif;
    border: 1px solid #ccc;
    background: #fff;
  }
  .tags-title {
    background-color: #000;
    color: #fff;
    border: none;
    text-transform: capitalize;
    letter-spacing: 0;
    font-size: 1.2rem;
    padding: 15px;
    margin: 0 35px;
    position: relative;
    top: -25px;
  }
  .tags-list {
    background: #f5f5f5;
    padding: 70px 25px 25px;
    margin-top: -65px;
  }
  .post {
    border-bottom: 1px solid #dfdede;
    margin-bottom: 2em;
    padding-bottom: 2em;
    color: #444;
  }
  .post h3 {
    margin-bottom: 0.5em;
    font-size: 26px;
  }
  .tags-list ul {
    padding-left: 0;
  }
  .tags-list li {
    font-family: "Open Sans", serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 6px 15px;
    margin: 0 0 10px 10px;
    display: inline-block;
    font-size: 0.7rem !important;
    border: 1px solid #000;
    transition: all 0.3s;
    outline: none;
    font-weight: normal;
    cursor: pointer;
    background: #fff;
  }
  .tags-list li a {
    color: #000;
  }
  .active {
    border: 1px solid #d44119;
    background-color: #fae091 !important;
  }
  .slide {
    position: relative;
    background: transparent;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    z-index: 1;
    backface-visibility: hidden;
    perspective: 1000px;
    transform: translateZ(0);
    cursor: pointer;
  }
  .slide:hover {
    color: #fff;
  }
  .slide:hover:before {
    right: -1px;
  }
  .slide::before {
    content: "";
    display: block;
    position: absolute;
    background: #000;
    transition: right 0.3s ease;
    z-index: -1;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: 108%;
    backface-visibility: hidden;
  }
`;
