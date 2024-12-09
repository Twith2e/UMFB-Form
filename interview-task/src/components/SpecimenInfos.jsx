import Signature from "./Signature";
import { useForm } from "./FormContext";

export default function SpecimenInfo({ index }) {
  const { formData, updateField, errors } = useForm();

  const handleChange = (event) => {
    const name = event.target.name;
    updateField(name, event.target.value);
  };
  return (
    <div className="flex flex-col gap-3 mt-3">
      <div className="row flex justify-between">
        <div className="col-5 flex flex-col gap-2">
          <label className="font-bold" htmlFor={`Specimen-Title${index + 1}`}>
            Title(Mr/Mrs etc)
          </label>
          <input
            className="border border-gray-500 p-2 outline-red-900"
            id={`Specimen-Title${index + 1}`}
            required={index === 0 ? true : false}
            type="text"
            placeholder="Title"
            name={`Specimen-Title${index + 1}`}
            value={formData[`Specimen-Title${index + 1}`] || ""}
            onChange={handleChange}
          />
          {errors[`Specimen-Title${index + 1}`] && (
            <span className="text-red-500 text-xs">
              {errors[`Specimen-Title${index + 1}`]}
            </span>
          )}
        </div>
        <div className="col-5 flex flex-col gap-2">
          <label className="font-bold" htmlFor={`Specimen-Name${index + 1}`}>
            Name
          </label>
          <input
            className="border border-gray-500 p-2 outline-red-900"
            id={`Specimen-Name${index + 1}`}
            required={index === 0 ? true : false}
            type="text"
            placeholder="Name"
            value={formData[`Specimen Name${index + 1}`] || ""}
            onChange={handleChange}
            name={`Specimen Name${index + 1}`}
          />
          {errors[`Specimen Name${index + 1}`] && (
            <span className="text-red-500 text-xs">
              {errors[`Specimen Name${index + 1}`]}
            </span>
          )}
        </div>
      </div>
      <div className="row flex justify-between">
        <div className="col-5 flex flex-col gap-2">
          <label
            className="font-bold"
            htmlFor={`Specimen Designation${index + 1}`}
          >
            Designation
          </label>
          <input
            className="p-2 border-gray-500 border outline-red-900"
            id={`Specimen Designation${index + 1}`}
            required={index === 0 ? true : false}
            placeholder="Designation"
            type="text"
            value={formData[`Specimen Designation${index + 1}`] || ""}
            onChange={handleChange}
            name={`Specimen Designation${index + 1}`}
          />
          {errors[`Specimen Designation${index + 1}`] && (
            <span className="text-red-500 text-xs">
              {errors[`Specimen Designation${index + 1}`]}
            </span>
          )}
        </div>
        <div className="col-5 flex flex-col gap-2">
          <label
            className="font-bold"
            htmlFor={`Specimen BVN Number${index + 1}`}
          >
            BVN Number
          </label>
          <input
            className="p-2 border border-gray-500 outline-red-900"
            id={`Specimen BVN Number${index + 1}`}
            required={index === 0 ? true : false}
            placeholder="BVN Number"
            type="number"
            name={`Specimen BVN Number${index + 1}`}
            value={formData[`Specimen BVN Number${index + 1}`]}
            onChange={handleChange}
          />
          {errors[`Specimen BVN Number${index + 1}`] && (
            <span className="text-red-500 text-xs">
              {errors[`Specimen BVN Number${index + 1}`]}
            </span>
          )}
        </div>
      </div>
      <div className="row flex justify-between">
        <div className="flex justify-between p-2 border border-red-700 col-5">
          <Signature
            imgName={`Specimen-Signature${index + 1}`}
            isDate={false}
            label={"Upload Signature"}
            required={index === 0 ? true : false}
          />
          <Signature
            imgName={`Specimen-Passport-Photograph${index + 1}`}
            isDate={false}
            label={"Upload Photograph"}
            required={index === 0 ? true : false}
          />
        </div>
        <div className="col-5 flex flex-col gap-2">
          <label
            className="font-bold"
            htmlFor={`Specimen Signature Class${index + 1}`}
          >
            Class
          </label>
          <input
            id={`Specimen Signature Class${index + 1}`}
            type="text"
            placeholder={`Specimen Signature Class`}
            required={index === 0 ? true : false}
            name={`Specimen Signature Class${index + 1}`}
            value={formData[`Specimen Signature Class${index + 1}`]}
            onChange={handleChange}
            className="border border-gray-500 outline-red-900 p-2 w-full"
          />
          {errors[`Specimen Signature Class${index + 1}`] && (
            <span className="text-red-500 text-xs">
              {errors[`Specimen Signature Class${index + 1}`]}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
