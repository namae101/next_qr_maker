import { NextPage } from 'next';
import { PageLayout, Button, FormField } from '../components';
import { useState } from 'react';
import QRCode from 'qrcode.react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const PageContainer = styled.div`
  ${tw`w-full bg-blue-800 flex-auto`}
`;
const ContentContainer = styled.div`
  ${tw`flex flex-wrap justify-center`}
`;
const FlexContent = styled.div`
  ${tw`w-full lg:w-1/3 lg:flex-1 p-5 border-r border-blue-800`}
`;

const QrContainer = styled.div`
  min-width: 350px;
  ${tw`p-5 w-full lg:w-1/4 flex flex-col items-center border-r border-blue-800`};
`;

const CardContainer = styled.div`
  ${tw`w-full rounded overflow-hidden shadow-lg bg-white p-4`}
`;
const IndexPage: NextPage = () => {
  const [qrValue, setQrValue] = useState('');
  const [filename, setFilename] = useState('filename');
  const qrValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQrValue(e.currentTarget.value);
  };
  const filenameValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFilename(e.currentTarget.value);
  };
  const saveQrCode = () => {
    const canvas = document.getElementById('qr_canvas') as HTMLCanvasElement;
    const url = canvas.toDataURL();
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = url;
    link.click();
  };

  return (
    <PageLayout title="បង្កើត QR code">
      <PageContainer>
        <ContentContainer>
          {/* Form Content */}
          <FlexContent>
            <CardContainer>
              <FormField
                multiline={true}
                label="ទិន្នន័យ"
                name="content"
                onChange={qrValueChange}
              />
              <FormField
                multiline={true}
                label="ឈ្មោះ ឯកសារ"
                name="filename"
                onChange={filenameValueChange}
              />
            </CardContainer>
          </FlexContent>
          {/* QRCode Render */}
          <QrContainer>
            <QRCode value={qrValue} size={300} id="qr_canvas" />
            <Button
              id="downloadBtn"
              label="Download"
              name="Download"
              onClick={saveQrCode}
            />
          </QrContainer>
        </ContentContainer>
      </PageContainer>
    </PageLayout>
  );
};

export default IndexPage;
