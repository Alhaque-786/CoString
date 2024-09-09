import React from 'react';
import Header from '@/components/Header';

// Inline SVGs for the icons
const EthereumIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#627EEA"/>
  </svg>
);

const MetaMaskIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#F6851B"/>
  </svg>
);

const SwapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#000"/>
  </svg>
);

const CowswapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12l-9 9-9-9 9-9 9 9z" fill="#000"/>
  </svg>
);

const ParaswapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#FF9900"/>
  </svg>
);

const EnsoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#1E1E1E"/>
  </svg>
);

const OneInchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#1C1C1C"/>
  </svg>
);

const OpenOceanIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#4A4A4A"/>
  </svg>
);

const ZeroXIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#B0B0B0"/>
  </svg>
);

const PetrolPumpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v20M6 6h12v14H6V6zM9 1h6v4H9V1z" fill="#4A4A4A"/>
  </svg>
);

export default function SwapRoute() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex justify-center items-center py-20 space-x-6">
        {/* Swap Section */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
          <h2 className="text-lg font-semibold mb-4 text-black">Swap</h2>
          <div className="mb-4">
            <label className="block text-black">You Sell</label>
            <div className="flex items-center space-x-2 border rounded-lg px-4 py-2">
              <input type="number" className="flex-grow text-xl outline-none" placeholder="10.54" />
              <span className="text-black flex items-center space-x-1">
                <EthereumIcon /> {/* Ethereum icon */}
                <span>ETH</span>
              </span>
            </div>
            <div className="text-right text-black text-sm">$1,033.85</div>
          </div>
          <div className="mb-4">
            <label className="block text-black">You Receive</label>
            <div className="flex items-center space-x-2 border rounded-lg px-4 py-2">
              <input type="number" className="flex-grow text-xl outline-none" placeholder="1167.8987" />
              <span className="text-black flex items-center space-x-1">
                <MetaMaskIcon /> {/* MetaMask icon */}
                <span>MATIC</span>
              </span>
            </div>
            <div className="text-right text-black text-sm">$1,030.69</div>
          </div>
          <button
              className="w-full py-2 rounded-lg mt-4"
              style={{
                borderRadius: "var(--radius-border_radius_12, 12px)",
                borderBottom:
                  "1px solid var(--color-black-12, rgba(0, 0, 0, 0.12))",
                backgroundColor: "var(--surface-primary, #6F58F6)",
              }}
            >Swap with Swapr</button>
        </div>

        {/* Select Route Section */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
          <h2 className="text-lg font-semibold mb-4 text-black">Select Route</h2>
          <div className="text-gray-500 text-xs mb-4">Best route is selected based on net route after gas fees</div>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border border-green-500 rounded-lg p-2">
              <span className="flex items-center space-x-1 text-black">
                <SwapIcon /> {/* Swapr icon */}
                <span>Swapr</span>
              </span>
              <div className="text-green-600 bg-green-100 rounded-full px-2 py-1 text-xs">Best Return</div> {/* Best Return */}
              <div className="flex items-center space-x-2">
                <span className="text-black bg-gray-100 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                  <PetrolPumpIcon className="text-gray-600" /> {/* Petrol pump icon */}
                  <span>$24.62</span>
                </span>
              </div>
              <span className="text-black">84.43 USDC</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span className="flex items-center space-x-1 text-black">
                <CowswapIcon /> {/* Cowswap icon */}
                <span>Cowswap</span>
              </span>
              <div className="text-red-600 bg-red-100 rounded-full px-2 py-1 text-xs">-0.2%</div> {/* -0.2% */}
              <div className="flex items-center space-x-2">
                <span className="text-black bg-gray-100 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                  <PetrolPumpIcon className="text-gray-600" /> {/* Petrol pump icon */}
                  <span>$24.62</span>
                </span>
              </div>
              <span className="text-black">84.43 USDC</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span className="flex items-center space-x-1 text-black">
                <ParaswapIcon /> {/* Paraswap icon */}
                <span>Paraswap</span>
              </span>
              <div className="text-red-600 bg-red-100 rounded-full px-2 py-1 text-xs">-0.2%</div> {/* -0.2% */}
              <div className="flex items-center space-x-2">
                <span className="text-black bg-gray-100 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                  <PetrolPumpIcon className="text-gray-600" /> {/* Petrol pump icon */}
                  <span>$24.62</span>
                </span>
              </div>
              <span className="text-black">84.43 USDC</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span className="flex items-center space-x-1 text-black">
                <EnsoIcon /> {/* Enso icon */}
                <span>Enso</span>
              </span>
              <div className="text-red-600 bg-red-100 rounded-full px-2 py-1 text-xs">-0.2%</div> {/* -0.2% */}
              <div className="flex items-center space-x-2">
                <span className="text-black bg-gray-100 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                  <PetrolPumpIcon className="text-gray-600" /> {/* Petrol pump icon */}
                  <span>$24.62</span>
                </span>
              </div>
              <span className="text-black">84.43 USDC</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span className="flex items-center space-x-1 text-black">
                <OneInchIcon /> {/* 1inch icon */}
                <span>1inch</span>
              </span>
              <div className="text-red-600 bg-red-100 rounded-full px-2 py-1 text-xs">-0.2%</div> {/* -0.2% */}
              <div className="flex items-center space-x-2">
                <span className="text-black bg-gray-100 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                  <PetrolPumpIcon className="text-gray-600" /> {/* Petrol pump icon */}
                  <span>$24.62</span>
                </span>
              </div>
              <span className="text-black">84.43 USDC</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span className="flex items-center space-x-1 text-black">
                <OpenOceanIcon /> {/* OpenOcean icon */}
                <span>OpenOcean</span>
              </span>
              <div className="text-red-600 bg-red-100 rounded-full px-2 py-1 text-xs">-0.2%</div> {/* -0.2% */}
              <div className="flex items-center space-x-2">
                <span className="text-black bg-gray-100 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                  <PetrolPumpIcon className="text-gray-600" /> {/* Petrol pump icon */}
                  <span>$24.62</span>
                </span>
              </div>
              <span className="text-black">84.43 USDC</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span className="flex items-center space-x-1 text-black">
                <ZeroXIcon /> {/* 0X icon */}
                <span>0X</span>
              </span>
              <div className="text-red-600 bg-red-100 rounded-full px-2 py-1 text-xs">-0.2%</div> {/* -0.2% */}
              <div className="flex items-center space-x-2">
                <span className="text-black bg-gray-100 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                  <PetrolPumpIcon className="text-gray-600" /> {/* Petrol pump icon */}
                  <span>$24.62</span>
                </span>
              </div>
              <span className="text-black">84.43 USDC</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
