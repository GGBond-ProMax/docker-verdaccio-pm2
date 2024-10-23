module.exports = {
  apps: [
    {
      name: 'verdaccio',
      script: 'verdaccio',
      args: '--listen 0.0.0.0:4873',
      env: {
        NODE_ENV: 'production',
      }
    }
  ]
};

