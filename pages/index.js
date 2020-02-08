import { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import Masthead from "../components/masthead";
import { siteURL } from "../helpers/siteurl";
import { dateFormat } from "../helpers/dateformat";
import { indexStyles } from "../styles/index-styles";

function Index({ posts, tags }) {
  const [selectedTag, updateSelectedTag] = useState(null);
  const [sortedPosts, updateSortedPosts] = useState([]);

  useEffect(() => {
    if (!selectedTag) {
      updateSortedPosts(posts);
    } else {
      updateSortedPosts(posts.filter(el => el.tags.includes(selectedTag)));
    }
  }, [selectedTag]);

  const updateTag = tag => {
    if (!selectedTag) {
      updateSelectedTag(tag.id);
    } else {
      updateSelectedTag(null);
    }
  };

  return (
    <>
      <Layout>
        <div>
          <Masthead />
          <div className="posts">
            <main>
              {sortedPosts.map(post => (
                <div className="post" key={post.id}>
                  <h3>
                    <Link
                      href={{
                        pathname: `/blog/${post.slug}`,
                        query: { post }
                      }}
                      as={`/blog/${post.slug}`}
                    >
                      <a>{post.title.rendered}</a>
                    </Link>
                  </h3>
                  <small>{dateFormat(post.date)}</small>
                  <div
                    // YOLO
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  ></div>
                  <Link href={`/blog/${post.slug}`}>
                    <a className="readmore slide">Read more ⟶</a>
                  </Link>
                </div>
              ))}
            </main>
            <aside>
              <h2 className="tags-title">Tags</h2>
              <div className="tags-list">
                <ul>
                  {tags.map(tag => (
                    <li
                      key={tag.id}
                      className={tag.id === selectedTag ? "active" : ""}
                      onClick={() => updateTag(tag)}
                    >
                      <a>{tag.name}</a>
                      {tag.id === selectedTag ? <span> ✕</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Layout>
      <style jsx>{indexStyles}</style>
    </>
  );
}

Index.getInitialProps = async ctx => {
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

  return { posts, tags };
};

export default Index;
