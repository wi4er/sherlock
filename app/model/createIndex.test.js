const createIndex = require("./createIndex");

afterEach(() => require("../../test/clearProductDatabase")());

// jest.mock("../../environment", () => env);

describe("Create index", () => {
    test("Should create", async () => {
        const index = createIndex([
            {
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
            }
        ]);

        const search = index.search("value");

        expect(search).toHaveLength(1);
        expect(search[0].ref).toBe("1111");
    });

    test("Should create with case", async () => {
        const index = createIndex([
            {
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
            }
        ]);

        const search = index.search("ANOT~3");

        console.log(search);
        
        
    });
});
