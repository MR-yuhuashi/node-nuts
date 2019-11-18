var replace = require("replace");

replace({
  regex: "foo",
  replacement: "bar",
  paths: ['.'],
  recursive: true,
  silent: true,
});