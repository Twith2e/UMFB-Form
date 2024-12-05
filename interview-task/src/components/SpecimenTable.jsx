export default function SpecimenTable() {
  return (
    <table className="text-white mt-5">
      <tbody>
        <tr className="flex items-center">
          <td className="bg-red-900">Title (Mr/Mrs etc)</td>
          <td rowSpan={2}>
            <input
              className=" border border-black h-full outline-none text-green-400"
              type="text"
            />
          </td>
          {/* <td></td> */}
          <td className="bg-red-900 border-r border-r-white">Class</td>
          <td className="bg-red-900">Photograph</td>
        </tr>
        <tr>
          <td className="bg-red-900">Name</td>
          <td rowSpan={2}>
            <input
              className=" border border-black h-full outline-none text-green-400"
              type="text"
            />
          </td>
          {/* <td></td> */}
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="bg-red-900">Designation</td>
          <td rowSpan={2}>
            <input
              className=" border border-black h-full outline-none text-green-400"
              type="text"
            />
          </td>
          {/* <td></td> */}
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="bg-red-900">Signature</td>
          <td rowSpan={2}>
            <input
              className=" border border-black h-full outline-none text-green-400"
              type="text"
            />
          </td>
          {/* <td></td> */}
          <td></td>
          <td></td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  );
}
