import Header from "@/components/Header";

const ArrowIcon = ({ direction }) => {
  const transform = direction === "up" ? "rotate(180deg)" : "rotate(0deg)";
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform }}
    >
      <path d="M12 8l-4 4h8l-4-4z" fill="#000" />
    </svg>
  );
};

export default function Swap() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="relative flex justify-center items-center py-20">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
          <h2 className="block text-black mb-2 font-bold">Swap</h2>

          {/* Container for sections and arrows */}
          <div className="relative">
            <div className="mb-4 bg-gray-200 p-4 rounded-lg">
              <label className="block text-black">You Sell</label>
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2">
                <input
                  type="number"
                  className="flex-grow text-xl outline-none border-none bg-transparent"
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

            {/* Arrow and line between sections */}
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center">
              <div className="w-0.5 h-12 bg-gray-400" /> {/* Line */}
              <div className="flex flex-col items-center ml-2">
                <ArrowIcon direction="up" />
                <ArrowIcon direction="down" />
              </div>
            </div>

            <div className="mb-4 bg-gray-200 p-4 rounded-lg mt-12">
              <label className="block text-black">You Receive</label>
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2">
                <input
                  type="number"
                  className="flex-grow text-xl outline-none border-none bg-transparent"
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
