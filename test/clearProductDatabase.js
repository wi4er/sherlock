const mongoose = require("mongoose");

module.exports = async function clearProductDatabase() {
    const conn2 = await mongoose.createConnection('mongodb://product:example@localhost:27017/product');
    conn2.model("content", new mongoose.Schema({}));

    for (const item of Object.values(conn2.collections)) {
        await item.deleteMany({});
    }
}
