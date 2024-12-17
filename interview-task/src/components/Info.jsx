import { useForm } from "./FormContext";

function Info({ title, type, name, required = true }) {
  const { formData, updateField, errors } = useForm();

  const handleChange = (event) => {
    updateField(name, event.target.value);
  };

  return (
    <div className="relative flex flex-col gap-2">
      <span className="text-sm font-bold md:whitespace-nowrap">
        {title ? `${title}:` : ""}
      </span>
      <div className="relative">
        <input
          className={`form-control border border-gray-500 outline-none p-2 w-full ${
            errors[name] ? "is-invalid" : ""
          }`}
          type={type}
          name={name}
          onKeyDown={
            type === "number"
              ? (e) => {
                  if (["e", "E", "+", "-"].includes(e.key)) {
                    e.preventDefault();
                  }
                }
              : undefined
          }
          min={1}
          value={formData[name] || ""}
          onChange={handleChange}
          multiple={type === "file"}
          required={required}
        />
        {errors[name] && (
          <div className="invalid-feedback absolute left-0 -bottom-5">
            {errors[name]}
          </div>
        )}
      </div>
    </div>
  );
}

export default Info;
