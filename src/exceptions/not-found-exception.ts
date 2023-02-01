import StatusCode from "status-code-enum";
import BaseException from "./base-exception";

export default class NotFoundException extends BaseException {
    public readonly statusCode = StatusCode.ClientErrorNotFound

    constructor(
        message: string
    ) {
        super(message ?? 'Not found.')
    }
}