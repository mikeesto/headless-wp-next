import { dateFormat } from "../../helpers/dateformat";

const Post = ({ title, date, content }) => {
  return (
    <main className="post individual">
      <h1>{title}</h1>
      <small className="date">{dateFormat(date)}</small>
      <section dangerouslySetInnerHTML={{ __html: content }}></section>
      <style jsx>{`
        main.post {
          margin: 60px auto 50px;
          max-width: 800px;
          padding: 0 30px 70px;
        }
        h1 {
          color: black;
          font-size: 40px;
        }
        section {
          color: #444;
        }
        .date {
          text-align: center;
        }
      `}</style>
    </main>
  );
};

Post.getInitialProps = async ctx => ctx.query;

export default Post;
