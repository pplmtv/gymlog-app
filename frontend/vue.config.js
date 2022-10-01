module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "gymlog",
    },
  },
  outputDir: "../static",
  indexPath: "../templates/index.html",
  publicPath: process.env.NODE_ENV === "production" ? "/static/" : "/",
  devServer: {
    proxy: {
      "/api/": {
        target: "http://localhost:8000",
      },
    },
  },
};
