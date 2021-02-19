import * as React from 'react';
import styled from 'styled-components';
import { LayoutWrapper, HeadingH2 } from '../../styles/mixins';
import DescriptionItem from '../DescriptionItem';
import { IDescriptionText } from './types';
import { mockedData } from './mockedData';

const StyledDescription = styled.div`
  padding: 10px 0 87px;
  background: radial-gradient(50% 50% at 50% 50%, rgba(20, 0, 0, 0.76) 0%, #000000 100%);
`;

const DescriptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 72px;
`;

const MainBannerWrapper = styled(LayoutWrapper)`
  flex-direction: column;
`;

const Description: React.FC = () => {
  return (
    <StyledDescription>
      <MainBannerWrapper>
        <HeadingH2>PLAY WITH TGC</HeadingH2>
        <DescriptionList>
          {mockedData.map(({ id, title, text }: IDescriptionText) => <DescriptionItem key={id} title={title} text={text} />)}
        </DescriptionList>
      </MainBannerWrapper>
    </StyledDescription>
  );
}

export default Description;
