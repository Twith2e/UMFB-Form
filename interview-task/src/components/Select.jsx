import { useForm } from "./FormContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Select({ text, name, options, disabled }) {
  const { formData, updateField } = useForm();

  return (
    <div className="flex flex-col gap-1 relative">
      <span className="font-bold">{text}</span>
      <select
        className="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-red-900"
        name={name}
        value={formData[name] || ""}
        onChange={(e) => updateField(name, e.target.value)}
        id={name}
      >
        <option disabled value="">
          {disabled}
        </option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <ExpandMoreIcon
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
