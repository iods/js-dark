const {assert} = require("chai");
const {Foo} = require("..");

describe("Foo", function() {
    it("is function", function() {
        assert.isFunction(Foo);
    });

    it("is Spartacus", function() {
        let f = new Foo();
        assert.isFunction(f.iAmSpartacus);
        assert.strictEqual("I AM SPARTACUS!!", f.iAmSpartacus());
    });
});
