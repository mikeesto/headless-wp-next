import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import Masthead from "../components/masthead";
import { siteURL } from "../helpers/siteurl";
import { DateFormat } from "../helpers/dateformat";
import { indexStyles } from "../styles/index-styles";

function Index({ posts }) {
  return (
    <>
      <Layout>
        <div>
          <Masthead />
          <div className="posts">
            <main>
              {posts.map(post => (
                <div className="post" key={post.id}>
                  <h3>
                    {/* TODO: Link here... */}
                    {post.title.rendered}
                  </h3>
                  <small>{DateFormat(post.date)}</small>
                  <div
                    // YOLO - living dangerously...!
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  ></div>
                  {/* TODO: link here */}
                  <a className="readmore slide">Read more ⟶</a>
                </div>
              ))}
            </main>
            <aside>{/* TODO: add everything for aside */}</aside>
          </div>
        </div>
      </Layout>
      <style jsx>{indexStyles}</style>
    </>
  );
}

Index.getInitialProps = async ctx => {
  let posts = await fetch(
    `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
  );
  const json = await posts.json();

  posts = json
    .filter(el => el.status === "publish")
    .map(({ id, slug, title, excerpt, date, tags, content }) => ({
      id,
      slug,
      title,
      excerpt,
      date,
      tags,
      content
    }));

  return { posts };
};

export default Index;
