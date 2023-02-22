import React from "react";
import "../styles/Footer.css"

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer flex flex-col justify-center lg:items-center">
     <div className="py-10 pl-4">
     <h1 className="text-2xl font-semibold text-warning ">_aarshikaa_</h1>
      <div className=" text-[10px] ">
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        A gift for my lifeline {year}
      </div>
     </div>
    </footer>
  );
};

export default Footer;
