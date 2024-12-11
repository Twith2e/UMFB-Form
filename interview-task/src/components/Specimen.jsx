import AcctNumber from "./AcctNumber";
import Info from "./Info";
import SpecimenHeader from "./SpecimenHeader";
import SpecimenInfo from "./SpecimenInfos";
import SubmitButton from "./SubmitButton";
import { useForm } from "./FormContext";

export default function Specimen() {
  const { formCount, setFormCount } = useForm();

  const addSpecimen = () => {
    setFormCount((prev) => [...prev, { id: prev[prev.length - 1].id + 1 }]);
  };

  const removeSpecimen = (id) => {
    setFormCount((prev) => prev.filter((count) => count.id !== id));
  };
  return (
    <div>
      <div className="row flex items-start justify-between">
        <div className="col-5">
          <SpecimenHeader />
        </div>
        <div className="col-5">
          <AcctNumber />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="col-12">
          <Info
            title={"Account Name"}
            name={"Specimen Account Name"}
            type={"text"}
          />
        </div>
        <div className="col-12">
          <Info
            title={"Address"}
            name={"Specimen Home Address"}
            type={"text"}
          />
        </div>
        <div className="col-12">
          <Info title={"Tel."} name={"Specimen Phone Number"} type={"number"} />
        </div>
      </div>
      {formCount.map((count) => (
        <div className="flex flex-col gap-2 mt-3">
          {count.id > 1 && (
            <div className="text-right">
              <button
                className="bg-red-500 text-white px-2 py-1"
                onClick={() => removeSpecimen(count.id)}
              >
                Remove Specimen
              </button>
            </div>
          )}
          <h1 className="text-red-900">{`Specimen ${count.id}`}</h1>
          <SpecimenInfo index={count.id} />
        </div>
      ))}
      <div className="text-center mt-40 mb-20">
        <button
          onClick={addSpecimen}
          className="bg-green-500 text-white px-2 py-1"
        >
          Add Specimen
        </button>
      </div>

      <div className="mt-3 flex justify-center items-center">
        <SubmitButton />
      </div>
    </div>
  );
}
