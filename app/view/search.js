const {Router} = require("express");
const router = Router();
const searchInList = require("../model/searchInList");
const fetchContent = require("../fetch/fetchContent");
const checkPermission = require("../permission/check");
const {SEARCH} = require("../permission/entity");
const {GET} = require("../permission/method");
const env = require("../../environment");


function reindex() {
    return fetchContent()
        .then(searchInList);
}

function start() {
    let search;

    setInterval(() => {
        reindex().then(res => search = res);
    }, env.REINDEX_INTERVAL);

    return (req, res, next) => {
        const {query: {q}} = req;

        Promise.resolve()
            .then(() => {
                if (!search) {
                    return reindex().then(res => search = res);
                }
            })
            .then(() => res.json(search(q).map(item => item.ref)))
            .catch(next);
    }
}

router.get(
    "/",
    checkPermission(SEARCH, GET),
    start(),
);

module.exports = router;
