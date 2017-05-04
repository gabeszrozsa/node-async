/*jshint esversion: 6 */

const fetch = require("node-fetch");
const async = require('asyncawait/async');
const await = require('asyncawait/await');

var showGitHubUser = async (function (handle) {
  const url = `https://api.github.com/users/${handle}`;

  const response = await (fetch(url));
  const user = await (response.json());
  console.log(user.name);
  console.log(user.location);

});

showGitHubUser("gabeszrozsa");
