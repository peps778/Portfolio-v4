import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0f1a] text-white py-10 px-6 mt-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
 
        <div>
          <div className="text-3xl mb-3">{`</>`}</div>
          <h2 className="text-lg font-semibold">Paul Jhon Magbanua</h2>
          <p className="text-sm mt-2">work.paulmagbanua@gmail.com</p>
          <p className="text-sm">+63 9953222528</p>
        </div>

   
        <div>
          <h3 className="font-semibold mb-3">SOCIALS:</h3>
          <div className="flex flex-col gap-3 text-sm">
            <a href="#" className="flex items-center gap-2 hover:opacity-80">
              <FaFacebook /> Paul Jhon Magbanua
            </a>
            <a href="#" className="flex items-center gap-2 hover:opacity-80">
              <FaInstagram /> ilv_polks
            </a>
            <a href="#" className="flex items-center gap-2 hover:opacity-80">
              <FaGithub /> peps778
            </a>
          </div>
        </div>
      </div>

  
      <div className="text-center text-xs mt-10 border-t border-gray-700 pt-5">
        <p>for inquiries, email me at: magbanuatx56@gmail.com</p>
        <p className="mt-2">© 2025 Paul Jhon Magbanua. All rights reserved.</p>
      </div>
    </footer>
  );
}
