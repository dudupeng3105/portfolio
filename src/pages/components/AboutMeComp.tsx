import Profile from '../../media/images/Profile.png';
import styled from 'styled-components';

const ProfileImgEtcContainer = styled.div`
  width: 30vw;
  height: 55vh;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  margin-right: 1vw;
`;

const EtcBox = styled.div`
  width: 30vw;
  height: 5vh;
  font-size: 1.5vmin;
`;

const ProfileImgBox = styled.div`
  width: 29.5vw;
  height: 40vh;
  background: url(${Profile});
  background-size: 29.5vw 40vh;
`;

const ProfileContentContainer = styled.div`
  width: 47vw;
  border: 1px solid black;
  height: 40vh;
  padding: 1vh 1vw;
`;

const ProfileContentBox = styled.div`
  width: 47vw;
  border: 1px solid black;
  height: 4vh;
`;

const AboutMeComp = () => {
  return (
    <>
      <ProfileImgEtcContainer>
        <ProfileImgBox></ProfileImgBox>
        <EtcBox>010-9948-8523</EtcBox>
        <EtcBox>donguk3105@naver.com</EtcBox>
        <EtcBox>https://github.com/dudupeng3105</EtcBox>
      </ProfileImgEtcContainer>
      <ProfileContentContainer>
        <ProfileContentBox>Name</ProfileContentBox>
        <ProfileContentBox>김동욱</ProfileContentBox>
        <ProfileContentBox>Phone Number</ProfileContentBox>
        <ProfileContentBox>010-9948-8523</ProfileContentBox>
        <ProfileContentBox>Email</ProfileContentBox>
        <ProfileContentBox>donguk3105@naver.com</ProfileContentBox>
        <ProfileContentBox>GitHub</ProfileContentBox>
        <ProfileContentBox>https://github.com/dudupeng3105</ProfileContentBox>
      </ProfileContentContainer>
    </>
  );
};

export default AboutMeComp;
