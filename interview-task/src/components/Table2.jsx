function Table2() {
  return (
    <div>
      <h1 className="text-base text-red-800 font-bold">
        ACCOUNTS WITH OTHER BANKS
      </h1>
      <table className="w-full border-collapse border border-black">
        <thead className="bg-[#7d3330] text-white py-2">
          <tr>
            <th className="p-2">BANK</th>
            <th className="p-2">ACCOUNT NAME</th>
            <th className="p-2">ACCOUNT NUMBER</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-black h-[60px]">
            <td className="border-r border-black flex items-center gap-2">
              <span className="font-bold pl-2">1</span>
              <input
                className="w-full h-[60px] border-none outline-none px-2"
                type="text"
              />
            </td>
            <td className="border-r border-black">
              <input
                className="w-full h-[60px] border-none outline-none px-2"
                type="text"
              />
            </td>
            <td className="border-r border-black">
              <input
                className="w-full h-[60px] border-none outline-none px-2"
                type="text"
              />
            </td>
          </tr>
          <tr className="border-b border-black h-[60px]">
            <td className="border-r h-full border-black flex items-center gap-2">
              <span className="font-bold pl-2">2</span>
              <input
                className="w-full h-[60px] border-none outline-none px-2"
                type="text"
              />
            </td>
            <td className="border-r border-black">
              <input
                className="w-full h-[60px] border-none outline-none px-2"
                type="text"
              />
            </td>
            <td className="border-r border-black">
              <input
                className="w-full h-[60px] border-none outline-none px-2"
                type="text"
              />
            </td>
          </tr>
          <tr className="border-b border-black h-[60px]">
            <td className="border-r border-black flex justify-center w-full items-center gap-2">
              <span className="font-bold pl-2">3</span>
              <input
                className="w-full h-[60px] border-none outline-none px-2"
                type="text"
              />
            </td>
            <td className="border-r border-black">
              <input
                className="w-full h-[60px] border-none outline-none px-2"
                type="text"
              />
            </td>
            <td className="border-r border-black">
              <input
                className="w-full h-[60px] border-none outline-none px-2"
                type="text"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
