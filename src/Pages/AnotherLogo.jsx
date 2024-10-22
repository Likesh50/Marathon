import React from 'react';
import styled from 'styled-components';

// Import the logos
import logo1 from '../assets/bodhi.png'; // Example logo for website sponsor
import logo2 from '../assets/sky.png'; // Example logo for media sponsor

const SponsorContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const SponsorTitles = styled.div`
  display: flex; /* Use flexbox to align titles in a row */
  justify-content: center; /* Center the titles horizontally */
  gap: 100px; /* Space between the titles */

  @media (max-width: 767px) {
    gap: 40px; /* Adjust gap for smaller screens */
  }
`;

const SponsorTitle = styled.h3`
  font-size: 2.1rem;
  letter-spacing: 0.05em;
  color: #333;
  margin-bottom: 20px; /* Adjusted margin for better spacing */
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

const SponsorLogos = styled.div`
  display: flex;
  justify-content: space-around; /* Flex around layout */
  flex-wrap: wrap;
  gap: 50px;

  @media (max-width: 767px) {
    gap: 20px;
  }
`;

const SponsorItem = styled.div`
  display: flex;
  flex-direction: column; /* Stack title and logo vertically */
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
        {/* Website Sponsor Section */}
        <SponsorItem>
          <SponsorTitle>Media Partner</SponsorTitle>
          <SponsorLogo src={logo2} alt="Website Sponsor Logo" />
        </SponsorItem>

        {/* Media Sponsor Section */}
        <SponsorItem>
          <SponsorTitle>Website Partner</SponsorTitle>
          <SponsorLogo src={logo1} alt="Media Sponsor Logo" />
        </SponsorItem>
      </SponsorLogos>
    </SponsorContainer>
  );
};

export default AnotherLogo;
