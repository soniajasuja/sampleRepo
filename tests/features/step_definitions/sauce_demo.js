const{Given, Then} =  require('cucumber')
const assert = require ('assert')
const {remote} = require('webdriverio')
        
        
        Given('I am on the Sauce Demo homepage', function () {
this.broser = remote({
  capabilities:{
    browserName: 'chrome'
  }
})
        });

        When('I provide valid credentials', function () {
          // Write code here that turns the phrase above into concrete actions
          return 'pending';
        });

        Then('I should be able to login succesfully', function () {
          // Write code here that turns the phrase above into concrete actions
          return 'pending';
        });

