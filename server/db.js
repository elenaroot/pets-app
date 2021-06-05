
const fse = require('fs-extra')
const { DataStore } = require('notarealdb');
const srcDir = `./play_data`;
const destDir = `./data`;
fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("success!");
  }
});

const store = new DataStore('./data');

module.exports = {
  users: store.collection('users'),
  pets: Object.entries(store.collection('pets').entities).map(([userId, pets]) => ({ userId, pets }))
};
