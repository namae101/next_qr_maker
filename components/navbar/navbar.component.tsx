import * as React from 'react';
import styled from '@emotion/styled';

import tw from 'tailwind.macro';
const NavContainer = styled.nav`
  ${tw`flex items-center justify-between flex-wrap bg-teal-500 p-6`};
  height: 20vh;
`;
const TitleContainer = styled.div`
  ${tw`flex items-center flex-shrink-0 text-white mr-6`}
`;
const TitleSpan = styled.span`
  ${tw`font-semibold text-4xl tracking-tight select-none`}
  &:hover {
    ${tw`cursor-default`}
  }
`;

const ActionContainer = styled.div`
  ${tw`block flex-grow lg:flex lg:items-center lg:w-auto`}
`;

const Action = styled.a`
  ${tw`inline-block text-2xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-0`}
`;

const Navbar: React.FunctionComponent = (): JSX.Element => (
  <header>
    <NavContainer>
      <TitleContainer>
        <TitleSpan>បង្កើត QR Code</TitleSpan>
      </TitleContainer>
      <ActionContainer>
        <Action href="#">អំពី</Action>
      </ActionContainer>
    </NavContainer>
  </header>
);

export default Navbar;
