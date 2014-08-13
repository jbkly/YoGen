'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var YogenGenerator = yeoman.generators.Base.extend({
  promptUser: function() {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    var prompts = [{
      name: 'appName',
      message: 'What is your app\'s name?'
    }];

    this.prompt(prompts, function(props) {
      this.appName = props.appName;
      
      done();
    }.bind(this));
  },
  scaffoldFolders: function() {
    this.mkdir("app");
    this.mkdir("app/styles");
    this.mkdir("app/sections");
    this.mkdir("build");

    this.copy("_package.json", "package.json");
    this.copy("_index.js", "app/index.js");
  },
  runNpm: function() {
    var done = this.async();
    this.npmInstall("", function() {
      console.log("\nEverything Set Up!!!\n");
      done();
    });
  }
});

module.exports = YogenGenerator;
