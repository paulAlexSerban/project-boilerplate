const getEntries = require('../utils/getEntries');
const path = require('path');

const pagesJS = "../../src/components/controllers/pages/*/*.page.js";

const entries = {
  ...getEntries(
    path.resolve(__dirname, pagesJS)
  ),
};

console.log('Entries:',entries);

module.exports = entries;
