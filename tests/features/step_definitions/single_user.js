const{Given, Then} =  require('cucumber')
const axios = require ('axios').default
const assert = require ('assert')

Given('I make a request to GET an employee\'s email though its id', async function () {
this.employeeResponse = await axios.get('https://reqres.in/api/users/2')
// console.log('this.employeeResponse', this.employeeResponse.data)
});

Then('I should get the email as {string}', function (expectedEmail) {
assert.equal(this.employeeResponse.data.data.email, expectedEmail)
});

Then('the status as {int}', function (expectedStatus) {
  assert.equal(this.employeeResponse.status, expectedStatus)
});

