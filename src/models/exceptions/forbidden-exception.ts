import StatusCode from "status-code-enum"
import { BaseException } from "./base-exception"

export class ForbiddenException extends BaseException {
    public readonly statusCode = StatusCode.ClientErrorForbidden

    constructor(
        message: string
    ) {
        super(message ?? 'Forbbidden Access.')
    }
}