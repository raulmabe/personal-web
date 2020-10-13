module.exports = {
  apps : [{
    name: 'personal-web',
    script: 'npx',

    args: 'serve -s build',
interpreter: 'none',
    env_production: {
      NODE_ENV: 'production'
    }
  }]

};
