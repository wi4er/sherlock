const jwt = require("jsonwebtoken");
const env = require("../environment");

module.exports = () => ([
    "authorization",
    `Bearer ${jwt.sign(
        {id: 1, admin: true, group: ["123"]},
        env.SECRET,
        { algorithm: 'HS256'}
    )}`
]);
