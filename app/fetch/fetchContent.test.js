const fetchContent = require("./fetchContent");
const postContent = require("./postContent");

afterEach(() => require("../../test/clearProductDatabase")());

const env = {
    ACCESS_TOKEN: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWRtaW4iOnRydWUsImlhdCI6MTY1Mzg3NDAxM30.PDa_NPahbV8-xPlb4djOuQLr-xpMBvs8-LXiV-bzdZU",
    TARGET_HOST: "localhost",
    TARGET_PORT: "8081",
};

jest.mock("../../environment", () => env);

describe("Fetch content", () => {
    test("Should fetch empty", async () => {
        const res = await fetchContent();

        expect(res).toHaveLength(0);
    });

    test("Should fetch item", async () => {
        await postContent({})
        const res = await fetchContent()

        expect(res).toHaveLength(1);
    });
});
