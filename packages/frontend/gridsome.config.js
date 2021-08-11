// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Dmoosocool~",
  plugins: [
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: "http://42.240.136.102:1337",
        queryLimit: 1000,
        contentTypes: ["category", "project", "journal"]
      }
    }
  ],
  templates: {
    StrapiProject: [
      {
        path: "/project/:id",
        component: "./src/templates/Project.vue"
      }
    ],
    StrapiJournal: [
      {
        path: "/journal/:id",
        component: "./src/templates/Journal.vue"
      }
    ]
  }
};
