// const yaml = require('js-yaml');
const fs = require('fs');
// const { services } = readDockerfile();
  // function readDockerfile() {
  //   let ymlFile = fs.readFileSync('../docker-compose.yaml', 'utf8');
  //   return yaml.load(ymlFile);
  // }

describe("htaccess", function() {
  it("should be able to load .htaccess file", function() {
    expect( fs.existsSync('.htaccess') )
    .to.equal(true);
  });
  //// later consider reading the file
  //// check for odd or breaking htaccess things like redirects, etc.
});

