import { useState, useEffect, useContext } from "react";
import Masthead from "../components/masthead";
import { dateFormat } from "../helpers/dateformat";
import { indexStyles } from "../styles/index-styles";
import PostContext from "../context/posts";

function Index() {
  const { posts, tags } = useContext(PostContext);
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
    <div>
      <Masthead />
      <div className="posts">
        <main>
          {sortedPosts.map(post => (
            <div className="post" key={post.id}>
              <h3>
                <a href={`/blog/${post.slug}`}>{post.title.rendered}</a>
              </h3>
              <small>{dateFormat(post.date)}</small>
              <div
                // YOLO
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              ></div>
              <a href={`/blog/${post.slug}`} className="readmore slide">
                Read more ⟶
              </a>
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
      <style jsx>{indexStyles}</style>
    </div>
  );
}

export default Index;
