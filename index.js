#!/usr/bin/env node
//@flow

const mktemp = require("mktemp")
const fs = require("fs")
const rimraf = require("rimraf")

// nodeback to promise
function $(fn) { return new Promise((resolve, reject) => { fn((err, res) => { if (err) reject(err); else resolve(res) }) }) }

mktemp.createDir("fig-XXXXXX")
.then(path => {
    console.log(path)
    return $(_=>rimraf(path, _))
})