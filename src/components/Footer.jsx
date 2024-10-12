import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-[#06141D] text-white">
        <div className="hidden md:block"></div>
        <div className="flex justify-center">
          <ul className="flex space-x-4 p-2">
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>TravelPartnerZone</li>
            <li>SiteMap</li>
          </ul>
        </div>
        <div className="hidden md:block"></div>
      </div>
      <div className="text-center text-white bg-[#06141D] py-2">
        Copyright. All Rights Reserved, 2024
      </div>
    </>
  );
}

export default Footer;
