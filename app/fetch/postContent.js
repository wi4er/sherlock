const fetch = require(".");

function postContent(items) {
    const list = [];

    items[Symbol.iterator] ?? (items = [items]);

    for (const it of items) {
        list.push(fetch.post("/content/", {data: it}).then(resp => resp.data));
    }

    return Promise.all(list);
}

module.exports = postContent;
