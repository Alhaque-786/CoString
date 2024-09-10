import Header from "@/components/Header";
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineFilter } from "react-icons/ai";

export default function Swap() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="relative flex justify-center items-center py-20">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
          <div className="flex justify-between items-center mb-2">
            <h2 className="block text-black font-bold">Swap</h2>
            {/* Filter Icon */}
            <AiOutlineFilter className="text-black cursor-pointer" />
          </div>

          {/* Container for sections and arrows */}
          <div className="relative">
            {/* "You Sell" Section */}
            <div className="mb-4 bg-gray-200 p-4 rounded-lg">
              <label className="block text-black">You Sell</label>
              <div className="flex items-center space-x-2 bg-gray-200 rounded-lg px-4 py-2">
                <input
                  type="number"
                  className="flex-grow text-2xl -ml-3 outline-none border-none bg-gray-200"
                  placeholder="0.0"
                />
                <span className="text-black">ETH</span>
              </div>
              <div className="flex justify-between">
                <div className="flex justify-end items-center w-full">
                  <div className="text-right text-black text-sm mt-2">
                    Balance: 7.27
                  </div>
                  <div
                    className="text-right text-sm mt-2 ml-2"
                    style={{ color: "#6F58F6" }}
                  >
                    Use Max
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow between sections */}
            <div className="absolute inset-x-0 top-1/2 -mt-2 transform -translate-y-1/2 flex justify-center items-center">
              <div className="flex flex-col items-center">
                <AiOutlineArrowUp className="text-gray-400" />
                <AiOutlineArrowDown className="text-gray-400" />
              </div>
            </div>

            {/* "You Receive" Section */}
            <div className="mb-4 bg-gray-200 p-4 rounded-lg mt-12">
              <label className="block text-black">You Receive</label>
              <div className="flex items-center space-x-2 bg-gray-200 rounded-lg px-4 py-2">
                <input
                  type="number"
                  className="flex-grow text-2xl -ml-3 outline-none border-none bg-gray-200"
                  placeholder="0.0"
                />
                <span className="text-black">MATIC</span>
              </div>
              <div className="text-right text-black text-sm mt-2">
                Balance: 1500
              </div>
            </div>

            {/* Button */}
            <button
              className="w-full py-2 rounded-lg mt-4"
              style={{
                borderRadius: "var(--radius-border_radius_12, 12px)",
                borderBottom:
                  "1px solid var(--color-black-12, rgba(0, 0, 0, 0.12))",
                backgroundColor: "var(--surface-primary, #6F58F6)",
              }}
            >
              Enter Amount to Swap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
