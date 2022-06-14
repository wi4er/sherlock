const lunr = require("lunr");

function fixItem(item) {
    let res = "";

    for (const lang in item.description) {
        for (const desr in item.description[lang]) {
            res = res + " " + item.description[lang][desr];
        }
    }
    
    return res.toUpperCase();
}

function createIndex(list) {
    return lunr(function() {
        this.field("description");
        this.ref("_id")

        for (const item of list) {
            this.add({
                _id: item._id,
                description: fixItem(item),
            });
        }
    });
}


module.exports = createIndex;
