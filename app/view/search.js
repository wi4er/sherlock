const {Router} = require("express");
const router = Router();
const createIndex = require("../model/createIndex");
const fetchContent = require("../fetch/fetchContent");

router.get("/", (req, res, next) => {
    const {query: {q}} = req;

    fetchContent()
        .then(content => {

            return createIndex(content);
        })
        .then(index => {
            const found = index.search(q);

            res.json(found.map(item => item.ref));
        })
        .catch(next);
});


module.exports = router;
