module.exports = {
  'Calculatrice' : function (browser) {
    var page = browser.page.googlePage();
    page.navigate()
      .waitForElementVisible('body')
      .setValue('@searchField', 'Calculatrice')
      .waitForElementVisible('@searchBtn')
      .click('@searchBtn')
      .waitForElementVisible('@calcField')
      .click('@twoField')
      .assert.containsText('@resultField', '2')
      .click('@plusField')
      .assert.containsText('@resultField', '2 +')
      .click('@twoField')
      .assert.containsText('@resultField', '2 + 2')
      .click('@equalField')
      .assert.containsText('@resultField', '4')
      .assert.containsText('@histField', '2 + 2 =');
    browser.end();
  }
}
