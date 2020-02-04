import * as React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

type Props = {
  name: string;
  label: string;
  multiline?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormFieldContainer = styled.div`
  ${tw`mb-4`}
`;
const FormFieldLabel = styled.label`
  ${tw`block text-gray-700 text-sm font-bold mb-2`}
`;
const FormFieldInput = styled.input`
  ${tw`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
`;

const FormField: React.FunctionComponent<Props> = (
  props: Props,
): JSX.Element => (
  <FormFieldContainer>
    <FormFieldLabel>{props.label}</FormFieldLabel>
    <FormFieldInput type="text" id={props.name} onChange={props.onChange} />
  </FormFieldContainer>
);
FormField.defaultProps = {
  multiline: false,
};
export default FormField;
