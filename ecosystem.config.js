module.exports = {
  apps: [
    {
      name: "backend",
      script: "cd packages/backend && npm run build && npm start"
    },
    {
      name: "frontend",
      script:
        "cd packages/frontend && npm run build && npx http-server ./dist -a"
    }
  ]
};
