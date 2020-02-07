import css from "styled-jsx/css";

export const globalStyles = css.global`
  html {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
  }

  h1,
  h2,
  h3 {
    font-family: "Alata", serif;
    font-weight: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .individual h3 {
    margin: 2em 0 25px;
  }

  h1 {
    margin-bottom: 30px;
    text-align: center;
  }

  img {
    width: 100%;
  }

  video {
    width: 100%;
    margin: 25px 0;
  }

  small {
    color: #9d5615;
  }

  pre,
  code {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
    background: #eee;
    border-radius: 4px;
  }

  pre {
    padding: 8px 10px;
  }

  code {
    padding: 2px 0;
    line-height: 1.5;
  }

  p {
    margin: 15px 0 20px;
  }
`;
