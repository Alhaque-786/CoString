import React from 'react';
import Link from 'next/link';
import { FaCog, FaEthereum, FaWallet } from 'react-icons/fa'; // Import additional icons

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 shadow-md">
      <div className="flex space-x-4">
        {/* Use Link component for internal navigation */}
        <Link href="/" className="text-gray-800 font-semibold">Swap</Link>
        <Link href="/bridges" className="text-gray-800 font-semibold">Bridge</Link>
        <Link href="/pools" className="text-gray-800 font-semibold">Pools</Link>
        <Link href="/products" className="text-gray-800 font-semibold">Products</Link>
      </div>

      {/* Flex container to ensure items are aligned to the right */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <div className="flex items-center text-gray-800 bg-gray-200 p-2 rounded-full shadow-md space-x-1">
            <FaEthereum size={16} /> {/* Ethereum icon */}
            <span>ETH</span>
          </div>
          <div className="flex items-center text-gray-800 bg-gray-200 p-2 rounded-full shadow-md space-x-1">
            <FaWallet size={16} /> {/* MetaMask icon */}
            <span>2.3 Eth</span>
          </div>
          <div className="text-gray-800 bg-white p-2 rounded-full border border-gray-300 shadow-md -ml-2">0x7e...4c3d</div>
        </div>
        <FaCog className="text-gray-800 cursor-pointer" size={24} />
      </div>
    </header>
  );
}
