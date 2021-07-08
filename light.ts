interface ILogger {
    log: (message: string) => void
}

class Logger implements ILogger {
    log(message: string) {
        console.log(message)
    }
}


// В данном примере соблюдается Dependency Inversion (принцип SOLID),
// который реализован с помощью Dependency Injection, ибо у нас нет
// зависимости выского уровня от низкого.
class UserService {
    constructor(private _logger: ILogger) {}

    say(message: string) {
        this._logger.log(message)
    }
}


const logger = new Logger()
const user = new UserService(logger)
user.say('Привет')


