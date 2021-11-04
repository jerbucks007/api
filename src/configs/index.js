
const express = require('./config-express');
const { main, db } = require(`./${process.env.NODE_ENV}`);

module.exports = { express, main, db };