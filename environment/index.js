const process = require("process");

class Environment {
    /**
     * Порт приложения
     */
    get APP_PORT() {
        return process.env.APP_PORT || 8080;
    }

    get TARGET_HOST() {
        return process.env.TARGET_HOST;
    }

    get SECRET() {
        return process.env.SECRET;
    }

    get ACCESS_TOKEN() {
        return process.env.ACCESS_TOKEN;
    }

    get PERMISSION_GROUPS() {
        return process.env.PERMISSION_GROUPS;
    }

    get REINDEX_INTERVAL() {
        return process.env.REINDEX_INTERVAL ?? 30000;
    }
}

module.exports = new Environment();
