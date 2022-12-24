import { Request, RequestHandler, Response } from "express";
import { BaseException } from "../exceptions/base-exception";
export interface Controller {
    execute: (request: Request) => Promise<ControllerResponse>
}

export interface ControllerResponse {
    statusCode: number
    data?: Record<string, any>
}

export type ControllerExecutorFunc = (controller: Controller) => RequestHandler

export const ControllerExecutor: ControllerExecutorFunc = controller => async (request: Request, response: Response): Promise<Response> => {
    try {
        const executed = await controller.execute(request)

        return await response
            .status(executed.statusCode)
            .json(executed.data)
    } catch (error) {
        return await response
            .status(error.statusCode ?? 500)
            .send({
                message: error.errorMessage ?? "Internal Server Error"
            })
    }
}
