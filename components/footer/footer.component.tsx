import * as React from 'react';
import styled from '@emotion/styled';

import tw from 'tailwind.macro';
const NavContainer = styled.nav`
  ${tw`flex items-center justify-between flex-wrap bg-teal-500 p-6`}
`;
const TitleContainer = styled.div`
  ${tw`flex items-center flex-shrink-0 text-white mr-6`}
`;
const TitleSpan = styled.span`
  ${tw`font-semibold text-xl tracking-tight select-none`}
  &:hover {
    ${tw`cursor-default`}
  }
`;

const ActionContainer = styled.div`
  ${tw`block flex-grow lg:flex lg:items-center lg:w-auto`}
`;

const Action = styled.a`
  ${tw`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-0`}
`;

const Navbar: React.FunctionComponent = (): JSX.Element => (
  <NavContainer>
    <TitleContainer>
      <TitleSpan>QR Maker</TitleSpan>
    </TitleContainer>
    <ActionContainer>
      <Action href="#">About</Action>
    </ActionContainer>
  </NavContainer>
);

export default Navbar;
