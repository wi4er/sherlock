const fetch = require(".");

function fetchContent(filter) {
    return fetch.get("/content/")
        .then(res => res.data)
}

module.exports = fetchContent;
