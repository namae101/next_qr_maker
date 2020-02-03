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
const Navbar: React.FunctionComponent = (): JSX.Element => (
  <NavContainer>
    <TitleContainer>
      <TitleSpan>QR Maker</TitleSpan>
    </TitleContainer>
  </NavContainer>
);

export default Navbar;
