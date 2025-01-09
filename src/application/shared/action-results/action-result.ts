import { ErrorBag } from "../types/error-bag";

export interface ActionResult<Payload = undefined>
{
    payload: Payload;
    errors?: ErrorBag;
}