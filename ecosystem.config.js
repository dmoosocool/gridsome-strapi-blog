module.exports = {
  apps: [
    {
      name: "backend",
      script: "cd packages/backend && npm run develop"
    },
    {
      name: "frontend",
      script: "cd packages/frontend && npm run develop"
    }
  ]
};
