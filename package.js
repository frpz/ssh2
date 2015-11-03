Package.describe({
  name: 'frpz:ssh2',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Meteor smart package for ssh2 node.js package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/frpz/ssh2',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "ssh2": "0.4.12"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  //api.use('ecmascript');
  api.addFiles('ssh2.js', ["server"]);
  api.export('ssh2Client');
});
