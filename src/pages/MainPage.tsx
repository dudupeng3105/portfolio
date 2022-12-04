import React from 'react';
import { MainPageBlock, IndexBox, ContentBox } from './MainPageStyle';
import AboutMeComp from './components/AboutMeComp';

const MainPage = () => {
  return (
    <MainPageBlock>
      <IndexBox>ABOUT ME</IndexBox>
      <ContentBox>
        <AboutMeComp></AboutMeComp>
      </ContentBox>
      <IndexBox>SKILLS</IndexBox>
      <IndexBox>PROJECTS</IndexBox>
      <IndexBox>EDUCATION</IndexBox>
    </MainPageBlock>
  );
};

export default MainPage;
