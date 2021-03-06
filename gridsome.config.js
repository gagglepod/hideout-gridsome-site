// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/pages/markdown/**/*.md",
        typeName: "Post",
        remark: {
          // remark options
        },
      },
      templates: {
        BlogPost: "/markdown/:year/:month/:day/:slug",
      },
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "http://kylebondo.com/index.php", // required
        apiBase: "wp-json",
        typeName: "WordPress",
        perPage: 100,
        concurrent: 10,
      },
      templates: {
        WordPressPost: "/:slug",
      },
    },
  ],
};
