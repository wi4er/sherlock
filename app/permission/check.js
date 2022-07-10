const PermissionError = require("../exception/PermissionError");
const env = require("../../environment");


module.exports = (entity, method) => (req, res, next) => {
    if (!env.PERMISSION_GROUPS) {
        return next();
    }

    if (req.user?.admin) {
        return next();
    }

    PermissionError.assert(req.user, "User required!");

    if (req.user?.groups?.includes?.(env.PERMISSION_GROUPS)) {
        return next();
    }
}
