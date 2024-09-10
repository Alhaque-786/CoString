import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaCog, FaEthereum, FaWallet, FaAngleDown } from 'react-icons/fa'; // Import FaAngleDown for small button icon

export default function Header() {
  const router = useRouter();

  const linkStyle = (path) => {
    return router.pathname === path
      ? 'text-gray-800 font-semibold bg-gray-200 rounded-md px-3 py-2'
      : 'text-gray-500 font-semibold px-3 py-2';
  };

  return (
    <header className="w-full flex justify-between items-center px-4 py-2 bg-white shadow-md">
      <div className="flex space-x-4">
        <Link href="/" className={linkStyle('/')}>Swap</Link>
        <Link href="/bridges" className={linkStyle('/bridges')}>Bridge</Link>
        <Link href="/pools" className={linkStyle('/pools')}>Pools</Link>
        <Link href="/products" className={linkStyle('/products')}>Products</Link>
      </div>

      {/* Flex container to ensure items are aligned to the right */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {/* Ethereum section */}
          <div className="relative flex items-center text-gray-800 bg-gray-200 px-3 py-2 rounded-full shadow-md">
            <FaEthereum size={16} className="mr-2" /> {/* Ethereum icon */}
            <span className="mr-2">ETH</span>
            {/* Small button icon inside */}
            <FaAngleDown size={12} className="absolute right-1" />
          </div>

          {/* MetaMask Wallet section with slight overlap */}
          <div className="relative flex items-center text-gray-800 bg-gray-200 px-3 py-2 rounded-full shadow-md z-10">
            <FaWallet size={16} className="mr-2" /> {/* MetaMask icon */}
            <span>2.3 Eth</span>
          </div>

          {/* Wallet address section with slight overlap and button icon */}
          <div className="relative flex items-center text-gray-800 bg-white px-3 py-2 rounded-full border border-gray-300 shadow-md -ml- z-0">
            <span className="mr-2">0x7e...4c3d</span>
            {/* Small button icon inside the address div */}
            <FaAngleDown size={12} className="absolute right-1 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Settings Cog icon inside div with gray background */}
        <div className="bg-gray-200 p-2 rounded-full shadow-md">
          <FaCog className="text-gray-800 cursor-pointer" size={24} />
        </div>
      </div>
    </header>
  );
}
