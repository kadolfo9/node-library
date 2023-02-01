import StatusCode from "status-code-enum"
import BaseException from "./base-exception"

export default class BadRequestException extends BaseException {
    public readonly statusCode = StatusCode.ClientErrorBadRequest

    constructor(
        message: string
    ) {
        super(message ?? 'Bad Request.')
    }
}