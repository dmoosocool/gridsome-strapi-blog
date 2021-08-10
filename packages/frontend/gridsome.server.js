// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(async store => {
    store.addMetadata("hero", {
      server: "http://localhost:1337",
      title: "Simplicity. Aesthetics. Value.",
      subtitle:
        "Hi there, I'm an independent Digital Designer & Art Director focused on digital design for brands that like to have fun."
    });

    store.addMetadata("journalHero", {
      title: "a wise person once said..."
    });
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
