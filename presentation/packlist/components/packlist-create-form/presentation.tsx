"use client"
import { PTextInput, PTextInputProps } from "@/presentation/shared/components/text-input";
import { PText } from "@/presentation/shared/components/text";
import React from 'react';
import { PInputErrorMessage } from "@/presentation/shared/components/input-error-message";
import { PButton } from "@/presentation/shared/components/button";
import { PForm } from "@/presentation/shared/components/form";
import { PFormProps } from "../../../shared/components/form";

export interface Props {
  nameProps: PTextInputProps,
  onSubmit: PFormProps['onSubmit'],
  errors: {
    name?: string | null,
  }
}

export function Presentation(props: Props) {
  return (
    <PForm onSubmit={props.onSubmit}>
      <div>
        <PText appearence="input-label">Name</PText>
        <PTextInput {...props.nameProps}></PTextInput>
        {props.errors.name && <PInputErrorMessage >{props.errors.name}</PInputErrorMessage>}
      </div>
      <PButton type="submit">Submit</PButton>
    </PForm>
  );
}