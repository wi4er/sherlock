const createIndex = require("./createIndex");

function searchInList(hay) {
    const index = createIndex(hay);

    return needle => {
        return index.search(`${needle}~2`);
    }
}


module.exports = searchInList;
