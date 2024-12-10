import { useForm } from "./FormContext";

function Table2() {
  const { formData, updateField, errors } = useForm();
  const handleChange = (e) => {
    const name = e.target.name;
    updateField(name, e.target.value);
  };
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
                className={`w-full h-[60px] border-none outline-none px-2 ${
                  errors["Business Bank1"] ? "placeholder:text-red-500" : ""
                }`}
                type="text"
                name="Business Bank1"
                placeholder={
                  errors["Business Bank1"] || "Enter a business bank"
                }
                value={formData["Business Bank1"] || ""}
                onChange={handleChange}
              />
            </td>
            <td className="border-r border-black">
              <input
                className={`w-full h-[60px] border-none outline-none px-2 ${
                  errors["Business Account Name1"]
                    ? "placeholder:text-red-500"
                    : ""
                }`}
                type="text"
                name="Business Account Name1"
                placeholder={
                  errors["Business Account Name1"] ||
                  "Enter corresponding account name"
                }
                value={formData["Business Account Name1"] || ""}
                onChange={handleChange}
              />
            </td>
            <td className="border-r border-black">
              <input
                className={`w-full h-[60px] border-none outline-none px-2 ${
                  errors["Business Account Number1"]
                    ? "placeholder:text-red-500"
                    : ""
                }`}
                type="text"
                name="Business Account Number1"
                placeholder={
                  errors["Business Account Number1"] ||
                  "Enter corresponding account number"
                }
                value={formData["Business Account Number1"] || ""}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr className="border-b border-black h-[60px]">
            <td className="border-r h-full border-black flex items-center gap-2">
              <span className="font-bold pl-2">2</span>
              <input
                className={`w-full h-[60px] border-none outline-none px-2 ${
                  errors["Business Bank2"] ? "placeholder:text-red-500" : ""
                }`}
                type="text"
                name="Business Bank2"
                placeholder={
                  errors["Business Bank2"] || "Enter a business bank"
                }
                value={formData["Business Bank2"] || ""}
                onChange={handleChange}
              />
            </td>
            <td className="border-r border-black">
              <input
                className={`w-full h-[60px] border-none outline-none px-2 ${
                  errors["Business Account Name2"]
                    ? "placeholder:text-red-500"
                    : ""
                }`}
                type="text"
                name="Business Account Name2"
                placeholder={
                  errors["Business Account Name2"] ||
                  "Enter a corresponding account name"
                }
                value={formData["Business Account Name2"] || ""}
                onChange={handleChange}
              />
            </td>
            <td className="border-r border-black">
              <input
                className={`w-full h-[60px] border-none outline-none px-2 ${
                  errors["Business Account Number2"]
                    ? "placeholder:text-red-500"
                    : ""
                }`}
                type="text"
                name="Business Account Number2"
                placeholder={
                  errors["Business Account Number2"] ||
                  "Enter corresponding account number"
                }
                value={formData["Business Account Number2"] || ""}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr className="border-b border-black h-[60px]">
            <td className="border-r border-black flex justify-center w-full items-center gap-2">
              <span className="font-bold pl-2">3</span>
              <input
                className={`w-full h-[60px] border-none outline-none px-2 ${
                  errors["Business Bank3"] ? "placeholder:text-red-500" : ""
                }`}
                type="text"
                name="Business Bank3"
                placeholder={
                  errors["Business Bank3"] || "Enter a business bank"
                }
                value={formData["Business Bank3"] || ""}
                onChange={handleChange}
              />
            </td>
            <td className="border-r border-black">
              <input
                className={`w-full h-[60px] border-none outline-none px-2 ${
                  errors["Business Account Name3"]
                    ? "placeholder:text-red-500"
                    : ""
                }`}
                type="text"
                name="Business Account Name3"
                placeholder={
                  errors["Business Account Name3"] ||
                  "Enter a corresponding account name"
                }
                value={formData["Business Account Name3"] || ""}
                onChange={handleChange}
              />
            </td>
            <td className="border-r border-black">
              <input
                className={`w-full h-[60px] border-none outline-none px-2 ${
                  errors["Business Account Number3"]
                    ? "placeholder:text-red-500"
                    : ""
                }`}
                type="text"
                name="Business Account Number3"
                placeholder={
                  errors["Business Account Number3"] ||
                  "Enter a corresponding account number"
                }
                value={formData["Business Account Number3"] || ""}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
