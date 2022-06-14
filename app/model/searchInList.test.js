const searchInList = require("./searchInList");

describe("Search in list", () => {
    test("Should search", async () => {
        const res = searchInList([{
            _id: "1111",
            description: {
                "DEF": {
                    "PREVIEW": "VALUES",
                    "DETAIL": "couple data"
                }
            }
        }, {
            _id: "2222",
            description: {
                "DEF": {
                    "PREVIEW": "DATA",
                    "DETAIL": " ANOTHER data "
                }
            }
        }]);

        console.log(res.search("qwe"));
    });
});
