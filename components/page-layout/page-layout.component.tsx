import Head from 'next/head';
import Navbar from '../navbar/navbar.component';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
type Props = {
  title?: string;
};

const BodyContainer = styled.div`
  ${tw`flex flex-col`};
  height: 100vh;
`;
const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'NextJS Starter Project',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BodyContainer>
        <Navbar />
        {children}
      </BodyContainer>
    </>
  );
};

export default Layout;
