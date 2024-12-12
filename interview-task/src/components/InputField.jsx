import { useForm } from "./FormContext";

export default function InputField({ text, name, required = true }) {
  const { formData, updateField, errors } = useForm();

  const handleChange = (e) => {
    updateField(name, e.target.value);
  };
  return (
    <div className="flex gap-2 w-full items-end">
      <span className="md:whitespace-nowrap font-bold text-base">{text}</span>
      <input
        type="text"
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        className="border-b border-b-black w-full outline-none"
      />
      {errors[name] && (
        <span className="text-red-500 text-xs">{errors[name]}</span>
      )}
    </div>
  );
}
