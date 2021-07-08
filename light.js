var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (message) {
        console.log(message);
    };
    return Logger;
}());
var UserService = /** @class */ (function () {
    function UserService(_logger) {
        this._logger = _logger;
    }
    UserService.prototype.say = function (message) {
        this._logger.log(message);
    };
    return UserService;
}());
var logger = new Logger();
var user = new UserService(logger);
user.say('Привет');
