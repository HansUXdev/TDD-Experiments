
//////////////////////////////////////////////
/// DB Checks
//////////////////////////////////////////////
  describe("phpMyadmin", function() {
    let page;
    let siteUrl = 'http://localhost:8080';
      before (async function () { page = await browser.newPage();
      await page.goto(siteUrl);
    });
    after (async function () { await page.close(); } )

    it('should have the correct page title', async function () {
      expect(await page.title()).to.eql('phpMyAdmin');
    });
    it("should be able to login into phpmyadmin", function() {
      // await page.goto(siteUrl);
    });
    it("should be able to login to db ", function() {
      // await page.goto(siteUrl);
    });
    it("should be able to return the SITE URL ", function() {
      // await page.goto(siteUrl);
    });
    it("home and site url should match in db", function() {
      // await page.goto(siteUrl);
    })
    it("theme should match in db", function() {
      // await page.goto(siteUrl);
    })
  });