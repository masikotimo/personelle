const chai = require("chai");
chai.should();
chai.use(require("chai-things"));

const { assert } = chai;

const address = require("./address");

describe("tests of address book", () => {
  it("checking if contact book storage exits ", () => {
    assert.exists(address.addressbook, "not availble");
  });
  // it("checking if empty ", () => {
  //   assert.isEmpty(address.addressbook, "not availble");
  // });
  it("phone book has contacts ", () => {
    assert.isNotEmpty(address.addressbook, "has no contacts");
  });
  it("phone book has comboni contact ", () => {
    assert.deepInclude(address.addressbook, { name: "comboni", phone: 12345 });
  });
  it("phone book has comboni by phone only ", () => {
    // assert.hasAnyDeepKeys(new Map(address.addressbook), { phone: 1234 });
    address.addressbook.should.contain.an.item.with.property("phone", 12345);
  });
});
