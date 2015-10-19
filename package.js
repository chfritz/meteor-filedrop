Package.describe({
    name: 'chfritz:filedrop',
    version: '0.0.4',
    // Brief, one-line summary of the package.
    summary: 'An easy to use file drag&drop element with hooks.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/chfritz/meteor-filedrop',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use('ecmascript');
    api.use('templating', 'client')
    api.use('blaze-html-templates', 'client')
    api.addFiles('template.html', 'client');
    api.addFiles('filedrop.js', 'client');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('chfritz:filedrop');
    api.addFiles('filedrop-tests.js');
});
