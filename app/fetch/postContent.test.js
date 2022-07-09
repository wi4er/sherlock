const postContent = require("./postContent");

afterEach(() => require("../../test/clearProductDatabase")());

const env = {
    ACCESS_TOKEN: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWRtaW4iOnRydWUsImlhdCI6MTY1Mzg3NDAxM30.PDa_NPahbV8-xPlb4djOuQLr-xpMBvs8-LXiV-bzdZU",
    TARGET_HOST: "localhost:8081",
};

jest.mock("../../environment", () => env);

describe("Post content", () => {
    test("Should post", async () => {
        const res = await postContent({});

        expect(res.length).toBe(1);
        expect(res[0]._id.toString().length).toBe(24);
    });
});
