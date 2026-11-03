"use client";


import { Controller, Control } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

interface CustomProps {
  control: Control<any>;
}

const CustomFormField = ({ control }: CustomProps) => {
  return (
    <FieldGroup>
      <Controller
        name="username"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-input-username">Username</FieldLabel>
            <Input
              {...field}
              id="form-rhf-input-username"
              aria-invalid={fieldState.invalid}
              placeholder="shadcn"
              autoComplete="username"
            />
            <FieldDescription>
              This is your public display name. Must be between 3 and 10
              characters. Must only contain letters, numbers, and underscores.
            </FieldDescription>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </FieldGroup>
  );
};

export default CustomFormField;
