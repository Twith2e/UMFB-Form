import { useForm } from "./FormContext";

function Info({ title, type, name, required = true }) {
  const { formData, updateField, errors } = useForm();
  const handleChange = (event) => {
    updateField(name, event.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-bold md:whitespace-nowrap">
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
        min={1}
        value={formData[name] || ""}
        onChange={handleChange}
        multiple={type === "file" ? true : false}
        required={required}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs">{errors[name]}</span>
      )}
    </div>
  );
}

export default Info;
