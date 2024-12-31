import { ErrorBag } from "@/application/shared/types/error-bag";
import { Presentation } from "./presentation";

export interface Props {
    errors: ErrorBag[string];
} 

export function Behavior(props: Props)
{
    const error = props.errors.join(', ');
    return <Presentation>{error}</Presentation>
}