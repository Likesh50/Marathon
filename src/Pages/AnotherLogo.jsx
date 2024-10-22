import React from 'react';
import styled from 'styled-components';

// Import the logo
import logo1 from '../assets/bodhi.png'; // Example logo

const SponsorContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const SponsorTitle = styled.h3`
  font-size: 2rem;
  letter-spacing: 0.05em;
  color: #333;
  margin-bottom: 40px;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const SponsorLogos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;

  @media (max-width: 767px) {
    gap: 20px;
  }
`;

const SponsorItem = styled.div`
  display: flex;
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
      <SponsorTitle>website sponsor </SponsorTitle>
      <SponsorLogos>
        {/* Organizer logo */}
        <SponsorItem>
          <SponsorLogo src={logo1} alt="Organizer Logo" />
        </SponsorItem>
      </SponsorLogos>
    </SponsorContainer>
  );
};

export default AnotherLogo;
