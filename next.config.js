const fetch = require("isomorphic-unfetch");
const siteURL = "https://css-tricks.com";

module.exports = {
  exportPathMap: async function() {
    // pages we know about beforehand
    const paths = {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
    // dynamic, data-generated pages
    const posts = await fetch(
      `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
    ).then(res => res.json());

    posts.forEach(post => {
      paths[`/blog/${post.slug}`] = {
        page: `/blog/[post]`,
        query: post
      };
    });
    return paths;
  }
};
