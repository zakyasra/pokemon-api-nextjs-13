import React from "react";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="w-full max-w-6xl mx-auto p-4 text-center">
        <hr className="my-6 border-gray-200" />
        <span className="block text-sm text-gray-500">
          ©{" "}
          <a
            href="https://github.com/zakyasra"
            target="_blank"
            className="hover:underline"
          >
            Zaky Asra
          </a>{" "}
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
