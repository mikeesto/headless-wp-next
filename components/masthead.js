const Masthead = () => (
  <section className="masthead">
    <h1>Headless WordPress on the JAMstack</h1>
    <style jsx>{`
      section.masthead {
        width: 100%;
        height: 90vh;
        overflow: hidden;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7vw;
        background: -moz-radial-gradient(
            center,
            ellipse cover,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 37%,
            rgba(0, 0, 0, 0.65) 100%
          ),
          url("/mountains-masthead.jpg") no-repeat center center scroll;
        /* FF3.6-15 */
        background: -webkit-radial-gradient(
            center,
            ellipse cover,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 37%,
            rgba(0, 0, 0, 0.65) 100%
          ),
          url("/mountains-masthead.jpg") no-repeat center center scroll;
        /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 37%,
            rgba(0, 0, 0, 0.65) 100%
          ),
          url("/mountains-masthead.jpg") no-repeat center center scroll;
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        background-size: cover;
        color: #333;
      }
      section.masthead h1 {
        color: white;
        font-size: 30px;
      }
      @media (min-width: 320px) {
        section.masthead h1 {
          font-size: calc(30px + 35 * (100vw - 320px) / 1046);
        }
      }
      @media (min-width: 1366px) {
        section.masthead h1 {
          font-size: 65px;
        }
      }
    `}</style>
  </section>
);

export default Masthead;
