import css from "styled-jsx/css";

export const NavStyles = css`
  .nav {
    background: #000;
    color: #fff;
    padding: 1em 100px;
  }
  .nav a {
    color: #fff;
    opacity: 0.8;
  }
  .nav a:hover {
    opacity: 1;
  }
  div {
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
  }
  ul {
    padding-left: 0;
  }
  ul li {
    display: inline-block;
    margin-right: 30px;
  }
  a,
  a:active,
  a:visited {
    text-decoration: none;
    color: black;
  }
`;
