import { PropsWithChildren } from "react";

export interface TextProps extends PropsWithChildren{
    appearence: 'input-label' | 'input-error'
}