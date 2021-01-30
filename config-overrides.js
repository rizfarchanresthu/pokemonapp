const { override, addLessLoader, disableChunk } = require("customize-cra");

module.exports = override(
  addLessLoader(),
  disableChunk()
);