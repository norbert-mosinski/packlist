"use client"
import { PTextInput, PTextInputProps } from "@/presentation/shared/components/text-input";
import { PText } from "@/presentation/shared/components/text";
import React from 'react';
import { BInputErrorMessage, PInputErrorMessage } from "@/presentation/shared/components/input-error-message";
import { PButton } from "@/presentation/shared/components/button";
import { PForm } from "@/presentation/shared/components/form";
import { PFormProps } from "../../../shared/components/form";
import { ErrorBag } from "@/presentation/shared/types/error-bag";

export interface Props {
  nameProps: PTextInputProps,
  onSubmit: PFormProps['onSubmit'],
  errors: ErrorBag;
}

// Pure UI events and data are being defined and displayed here
// All events are fired back to behavior component through callbacks,
// no handling happens here in order to keep the behavior out of the presentation. 
export function Presentation(props: Props) {
  return (
    <PForm onSubmit={props.onSubmit}>
      <div>
        <PText appearence="input-label">Name</PText>
        <PTextInput {...props.nameProps}></PTextInput>
        {props.errors.name && <BInputErrorMessage errors={props.errors.name}></BInputErrorMessage>}
      </div>
      <PButton type="submit">Submit</PButton>
    </PForm>
  );
}