import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <marquee>&#169; {`Copyright ${new Date().getFullYear()}`}</marquee>
    </div>
  );
};

export default Footer;
