/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
const glob = require('glob');

const getEntries = (path) => glob.sync(path).reduce((acc, item) => {
  const path = item.split('/');
  path.pop();
  const name = path.pop();
  acc[name] = item;
  return acc;
}, {});

module.exports = getEntries;
