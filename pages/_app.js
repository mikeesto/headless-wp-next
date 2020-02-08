import App from "next/app";
import fetch from "isomorphic-unfetch";
import PostContext from "../context/posts";
import { siteURL } from "../helpers/siteurl";

const MyApp = ({ Component, pageProps, posts, tags }) => {
  return (
    <PostContext.Provider value={{ posts, tags }}>
      <Component {...pageProps}></Component>
    </PostContext.Provider>
  );
};

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);

  // Get posts
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

  // Get tags
  let allTags = posts.reduce((acc, item) => {
    return acc.concat(item.tags);
  }, []);
  allTags = allTags.join();

  let tags = await fetch(
    `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
  ).then(res => res.json());

  tags = tags.map(({ id, name }) => ({
    id,
    name
  }));

  return {
    ...appProps,
    posts,
    tags
  };
};

export default MyApp;
