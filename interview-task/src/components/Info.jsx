import { useForm } from "./FormContext";

function Info({ title, type, name }) {
  const { formData, updateField } = useForm();
  const handleChange = (event) => {
    updateField(name, event.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-bold whitespace-nowrap">
        {title ? `${title}:` : ""}
      </span>
      <input
        className="border border-gray-500 outline-none p-2 w-full"
        type={type}
        name={name}
        onKeyDown={
          type === "number"
            ? (e) => {
                if (["e", "E", "+", "-"].includes(e.key)) {
                  e.preventDefault(); // Block these keys
                }
              }
            : undefined
        }
        value={formData[name] || ""}
        onChange={handleChange}
      />
    </div>
  );
}

export default Info;
