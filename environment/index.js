const process = require("process");

class Environment {
    /**
     * Порт приложения
     */
    get APP_PORT() {
        return process.env.APP_PORT || 8080;
    }

    get TARGET_HOST() {
        return process.env.USER_HOST;
    }

    get TARGET_PORT() {
        return process.env.USER_PORT;
    }

    get SECRET() {
        return process.env.SECRET;
    }

    get ACCESS_TOKEN() {
        return process.env.ACCESS_TOKEN;
    }
}

module.exports = new Environment();
