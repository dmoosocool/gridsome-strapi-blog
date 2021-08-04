module.exports = {
  apps : [{
    name: "backend",
    script: 'cd packages/backend && npm run develop',
  },
  {
    name: "frontend",
    script: 'cd packages/frontend && npm run develop',
  }
],

  // deploy : {
  //   production : {
  //     user : 'SSH_USERNAME',
  //     host : 'SSH_HOSTMACHINE',
  //     ref  : 'origin/master',
  //     repo : 'GIT_REPOSITORY',
  //     path : 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
};
