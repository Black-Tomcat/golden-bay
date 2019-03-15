#!/usr/bin/env node
var shell = require("shelljs");

shell.exec("electron ./dist/index.html");
