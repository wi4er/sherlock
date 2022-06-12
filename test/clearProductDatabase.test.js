const clearUserDatabase = require("./clearProductDatabase");

describe("User clearance", () => {
    test("Should clear", () => {
        clearUserDatabase();
    });
});
