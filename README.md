# Headless WordPress with Next.js

This is an unofficial reimplementation of Netlify's [Headless WordPress JAMstack Template](https://github.com/netlify-labs/headless-wp-nuxt) from Nuxt.js (Vue) to Next.js (React). Sarah Drasner & Geoff Graham also wrote an accompanying [article for Smashing Magazine](https://www.smashingmagazine.com/2020/02/headless-wordpress-site-jamstack/).

Since Next.js v9 it is possible to statically export a Next.js app, generating a folder of static assets (HTML, CSS, JS etc) that can be universally hosted. [next.config.js](next.config.js) sets up the routes to be statically exported, including the dynamically generated `posts` route. This effectively acts as a page template for posts retrieved from the API.

[A demo of the site is hosted on Netlify](https://headless-wp-next.netlify.com/)

## How to run

```
# install dependencies
npm install

# run dev environment on port 3000
npm run dev

# build the app
npm run build

# export as a static app
npm run export

# static app files will be exported to a folder named "out"

```

See [netlify.toml](netlify.toml) for Netlify build commands
