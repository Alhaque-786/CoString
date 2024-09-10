import Header from '@/components/Header';
import { FaEthereum, FaExchangeAlt } from 'react-icons/fa'; // Ethereum and Swapr icon
import { SiPolygon } from 'react-icons/si'; // Polygon (MATIC) icon
import { MdToggleOff, MdToggleOn } from 'react-icons/md'; // On/Off toggle icons

export default function SwapDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex justify-center items-center py-20">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
          <h2 className="text-lg font-semibold mb-4 text-black">Swap</h2>

          {/* "You Sell" Section */}
          <div className="mb-4 bg-gray-200 p-4 rounded-lg">
            <label className="block text-black">You Sell</label>
            <div className="flex items-center space-x-2 bg-gray-200 rounded-lg px-4 py-2">
              <input
                type="number"
                className="flex-grow text-2xl -ml-3 outline-none border-none bg-gray-200 text-black"
                placeholder="10.54"
              />
              {/* Coin wrapper with grayish background and Ethereum icon */}
              <div className="flex items-center space-x-2 bg-gray-300 px-3 py-1 rounded-lg">
                <div className="flex items-center justify-center bg-[#6F58F6] p-1 rounded-full">
                  <FaEthereum size={16} className="text-white" />
                </div>
                <span className="text-black">ETH</span>
              </div>
            </div>
            <div className="text-right text-black text-sm">Balance 7.27</div>
          </div>

          {/* "You Receive" Section */}
          <div className="mb-4 bg-gray-200 p-4 rounded-lg">
            <label className="block text-black">You Receive</label>
            <div className="flex items-center space-x-2 bg-gray-200 rounded-lg px-4 py-2">
              <input
                type="number"
                className="flex-grow text-2xl -ml-3 outline-none border-none bg-gray-200"
                placeholder="1167.9987"
                style={{ color: '#6F58F6' }} // Text color changed to #6F58F6
              />
              {/* Coin wrapper with grayish background and Polygon (MATIC) icon */}
              <div className="flex items-center space-x-2 bg-gray-300 px-3 py-1 rounded-lg">
                <div className="flex items-center justify-center bg-[#A229C5] p-1 rounded-full">
                  <SiPolygon size={16} className="text-white" />
                </div>
                <span className="text-black">MATIC</span>
              </div>
            </div>
            <div className="text-right text-black text-sm">$1,030.69</div>
          </div>

          {/* Swap Button with Swapr icon */}
          <button
            className="w-full py-2 rounded-lg mt-8 flex justify-center items-center space-x-2"
            style={{
              borderRadius: "var(--radius-border_radius_12, 12px)",
              borderBottom: "1px solid var(--color-black-12, rgba(0, 0, 0, 0.12))",
              backgroundColor: "var(--surface-primary, #6F58F6)",
            }}
          >
            <span>Swap with Swapr</span>
            <FaExchangeAlt size={16} className="text-white" /> {/* Swapr icon */}
          </button>

          {/* Receive USDT with another wallet */}
          <div className="mt-4 bg-gray-100 flex justify-between items-center p-3 rounded-lg">
            <span className="text-black">Receive USDT with another wallet</span>
            {/* Toggle on/off icon */}
            <MdToggleOff size={24} className="text-black cursor-pointer" />
            {/* To toggle, replace MdToggleOff with MdToggleOn when needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
