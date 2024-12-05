function Table() {
  return (
    <div>
      <table className="w-full border-collapse border border-black text-white">
        <thead className="bg-[#7d3330] py-4">
          <tr>
            <th className="p-4">OFFICE ADDRESS/REGISTERED OFFICE</th>
            <th className="p-4">FOREIGN OFFICE ADDRESS (IF ANY)</th>
            <th className="p-4">MAILING ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[150px]">
            <td className="h-[100px] border-r border-black  w-1/3">
              <textarea
                className="h-full w-full text-black border-none outline-none"
                type="text"
              />
            </td>
            <td className="h-[100px] border-r border-black w-1/3">
              <textarea
                className="h-full w-full text-black border-none outline-none"
                type="text"
              />
            </td>
            <td className="h-[100px] border-r border-black w-1/3">
              <textarea
                className="h-full w-full text-black border-none outline-none"
                type="text"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
