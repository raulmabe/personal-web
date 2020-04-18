module.exports = {
  apps : [{
    name: 'Web',
    script: 'npx',

    args: 'serve -s build',
interpreter: 'none',
    env_production: {
      NODE_ENV: 'production'
    }
  }]

};
