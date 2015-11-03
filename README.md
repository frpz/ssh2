frpz:ssh2
=========

Meteor smart package for ssh2 [node.js](https://www.npmjs.com/package/ssh2) package

# Install

Just add the package:

    meteor add frpz:ssh2

For more informations, see [documentation](https://www.npmjs.com/package/net-snmp)

# Usage

```javascript
var conn = new ssh2-Client();
conn.on('ready', function() {
  console.log('Client :: ready');
  conn.exec('uptime', function(err, stream) {
    if (err) throw err;
    stream.on('close', function(code, signal) {
      console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
      conn.end();
    }).on('data', function(data) {
      console.log('STDOUT: ' + data);
    }).stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    });
  });
}).connect({
  host: '192.168.100.100',
  port: 22,
  username: 'frylock',
  privateKey: require('fs').readFileSync('/here/is/my/key')
});
 
```
