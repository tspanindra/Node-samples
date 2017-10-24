const dns = require('dns');

// dns.lookup('pluralsight.com', (err, address) => {
//   console.log(address);
// });

dns.lookup('godaddy.com', (err, address) => {
  console.log(address);
});

// dns.resolve4('pluralsight.com', (err, address) => {
//   console.log(address);
// });

// dns.resolve('godaddy.com', 'A', (err, address) => {
//   console.log(address);
// });

// dns.resolve('godaddy.com', 'MX', (err, address) => {
//   console.log(address);
// });

// dns.resolveMx('godaddy.com', (err, address) => {
//   console.log(address);
// });

dns.reverse('208.109.192.70', (err, hostname) => {
  console.log(hostname);
});
