const localtunnel = require('localtunnel');
const options = {
  subdomain: 'jnmorse'
};

const tunnel = localtunnel(5000, options, (err, tunnel) => {
  if (err) {
    console.error(err.message);
  }
  
  tunnel.url;
  console.log('Tunnel is open');
});

tunnel.on('close', () => {
  console.log('localtunnel was closed');
});

tunnel.on('error', error => {
  console.error(error);
});