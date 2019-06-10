/* eslint-disable no-console */
const localtunnel = require('localtunnel')

const options = {
  subdomain: 'jnmorse'
}

const serve = localtunnel(5000, options, (err, tunnel) => {
  if (err) {
    console.error(err.message)
  }

  console.log(tunnel.url)
  console.log('Tunnel is open')
})

serve.on('close', () => {
  console.log('localtunnel was closed')
})

serve.on('error', error => {
  console.error(error)
})
