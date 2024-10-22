import React from 'react';
import styled from 'styled-components';

import logo1 from '../assets/bodhi.png';
import logo2 from '../assets/sky.png'; 

const SponsorContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const SponsorTitles = styled.div`
  display: flex; 
  justify-content: 
  gap: 100px; 

  @media (max-width: 767px) {
    gap: 40px; 
  }
`;

const SponsorTitle = styled.h3`
  font-size: 2.1rem;
  letter-spacing: 0.05em;
  color: #333;
  margin-bottom: 20px; 
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

const SponsorLogos = styled.div`
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap;
  gap: 50px;

  @media (max-width: 767px) {
    gap: 20px;
  }
`;

const SponsorItem = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SponsorLogo = styled.img`
  max-width: 200px;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: 1024px) {
    max-width: 160px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 150px;
  }

  @media (max-width: 767px) {
    max-width: 120px;
  }
`;

const AnotherLogo = () => {
  return (
    <SponsorContainer>
      <SponsorLogos>
        <SponsorItem>
          <SponsorTitle>Media Partner</SponsorTitle>
          <SponsorLogo src={logo2} alt="Website Sponsor Logo" />
        </SponsorItem>

        <SponsorItem>
          <SponsorTitle>Website Partner</SponsorTitle>
          <SponsorLogo src={logo1} alt="Media Sponsor Logo" />
        </SponsorItem>
      </SponsorLogos>
    </SponsorContainer>
  );
};

export default AnotherLogo;
