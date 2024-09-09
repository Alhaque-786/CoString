import Header from '@/components/Header';

export default function SwapDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex justify-center items-center py-20">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
          <h2 className="text-lg font-semibold mb-4 text-black">Swap</h2>
          <div className="mb-4">
            <label className="block text-black">You Sell</label>
            <div className="flex items-center space-x-2 border rounded-lg px-4 py-2">
              <input type="number" className="flex-grow text-xl outline-none" placeholder="10.54" />
              <span className="text-black">ETH</span>
            </div>
            <div className="text-right text-black text-sm">$1,033.85</div>
          </div>
          <div className="mb-4">
            <label className="block text-black">You Receive</label>
            <div className="flex items-center space-x-2 border rounded-lg px-4 py-2">
              <input type="number" className="flex-grow text-xl outline-none" placeholder="1167.8987" />
              <span className="text-black">MATIC</span>
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
      </div>
    </div>
  );
}
