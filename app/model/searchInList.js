const createIndex = require("./createIndex");

function searchInList(hay) {
    const index = createIndex(hay);

    return needle => {
        index.search(`*${needle}*`);
    }
}


module.exports = searchInList;
