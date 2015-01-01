Package.describe({
  name: 'dessix:livescript-compiler',
  summary: "LiveScript, a CoffeeScript descendant with improvements and new features.",
  version: "0.1.5",
  git: "https://github.com/Dessix/Meteor-LiveScript.git"
});

Package._transitional_registerBuildPlugin({
  name: "compileLiveScript",
  use: [],
  sources: [
    'plugin/compileLiveScript.js'
  ],
  npmDependencies: {
    "LiveScript": "1.3.1"
  }
});

Package.on_use(function(api, where) {
  api.export("prelude");
  api.add_files("prelude-browser-min.js", ["server", "client"]);
  api.add_files("requirePrelude.js", ["server", "client"]);
});
