import { useForm } from "./FormContext";

function Table() {
  const { formData, updateField, errors } = useForm();

  const handleChange = (e) => {
    const name = e.target.name;
    updateField(name, e.target.value);
  };
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
                className={`h-full w-full text-black border-none outline-none p-2 ${
                  errors["Business Office Address"]
                    ? "placeholder:text-red-500"
                    : ""
                }`}
                type="text"
                value={formData["Business Office Address"] || ""}
                name="Business Office Address"
                placeholder={
                  errors["Business Office Address"] ||
                  "Enter your business office address"
                }
                onChange={handleChange}
              />
            </td>
            <td className="h-[100px] border-r border-black w-1/3">
              <textarea
                className={`h-full w-full text-black border-none outline-none p-2 `}
                type="text"
                value={formData["Business Foreign Address"] || ""}
                name="Business Foreign Address"
                placeholder={"Enter your business foreign address"}
                onChange={handleChange}
              />
            </td>
            <td className="h-[100px] border-r border-black w-1/3">
              <textarea
                className={`h-full w-full text-black border-none outline-none p-2 ${
                  errors["Business Mailing Email Address"]
                    ? "placeholder:text-red-500"
                    : ""
                }`}
                type="text"
                value={formData["Business Mailing Email Address"] || ""}
                name="Business Mailing Email Address"
                placeholder={
                  errors["Business Mailing Email Address"] ||
                  "Enter your business mailing address"
                }
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
