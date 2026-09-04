import React from "react";

function Footer() {
  return (
    <footer className="w-full text-white text-center p-4">
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
