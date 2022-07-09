const request = require("supertest");
const app = require("..");
const postContent = require("../fetch/postContent");

afterEach(() => require("../../test/clearProductDatabase")());

jest.mock("../../environment", () => ({
    TARGET_HOST: "localhost:8081",
    SECRET: "hello world!",
    ACCESS_TOKEN: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWRtaW4iOnRydWUsImlhdCI6MTY1Mzg3NDAxM30.PDa_NPahbV8-xPlb4djOuQLr-xpMBvs8-LXiV-bzdZU"
}));

describe("Content endpoint", () => {
    describe("Content fields", () => {
        test("Should get list", async () => {
            await postContent([{
                _id: "1".padStart(24, "0"),
                description: {
                    DEF: {preview: "DATA"}
                }
            }, {
                _id: "2".padStart(24, "0"),
                description: {
                    DEF: {preview: "SOME"}
                }
            }, {
                _id: "3".padStart(24, "0"),
                description: {
                    DEF: {preview: "ELSE"}
                }
            }]);

            await request(app)
                .get("/search/?q=DATA")
                .expect(200)
                .then(res => {
                    expect(res.body).toEqual(["1".padStart(24, "0")])
                });
        });
    });
});
