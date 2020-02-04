import * as React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
type Props = {
  id: string;
  name: string;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const StyledButton = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none m-4 p-4`}
`;

const Button: React.FunctionComponent<Props> = (props: Props): JSX.Element => (
  <StyledButton id={props.id} name={props.name} onClick={props.onClick}>
    {props.label}
  </StyledButton>
);

export default Button;
