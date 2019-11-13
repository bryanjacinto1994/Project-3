const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const db = require('./models');
const routes = require('./routes');

