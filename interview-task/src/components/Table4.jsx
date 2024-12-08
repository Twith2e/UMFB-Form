import DatePicker from "react-datepicker";
import { useForm } from "./FormContext";

export default function Table4() {
  const { formData, updateField } = useForm();
  return (
    <table className="w-full border-collapse">
      <thead className="bg-[#7d3330] text-white border-x border-black">
        <th className="text-center w-[25%]">APPROVED BY</th>
        <th className="text-center w-[50%]">INITIAL</th>
        <th className="text-center w-[25%]">DATE</th>
      </thead>
      <tbody className="border border-black">
        <tr>
          <td className="text-center border border-black">Head of Operation</td>
          <td className=" border border-black">
            <input type="text" className="border-none outline-none w-full" />
          </td>
          <td className="border border-black">
            <DatePicker
              className="outline-none border-gray-500 w-full"
              selected={formData[""]}
              onChange=""
            />
          </td>
        </tr>
        <tr>
          <td className="text-center border border-black">Review by Control</td>
          <td className=" border border-black">
            <input type="text" className="border-none outline-none w-full" />
          </td>
          <td className=" border-r border-black">
            <DatePicker
              className="outline-none border-gray-500 w-full"
              selected=""
              onChange=""
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
