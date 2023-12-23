import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      &#169; {`Copyright ${new Date().getFullYear()}`}
    </div>
  );
};

export default Footer;
