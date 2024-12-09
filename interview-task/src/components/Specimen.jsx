import AcctNumber from "./AcctNumber";
import Info from "./Info";
import SpecimenHeader from "./SpecimenHeader";
import SpecimenInfo from "./SpecimenInfos";
import SubmitButton from "./SubmitButton";

export default function Specimen() {
  return (
    <div>
      <div className="row flex items-center justify-between">
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
      {Array.from({ length: 2 }).map((_, index) => (
        <div className="flex flex-col gap-2 mt-3">
          <h1 className="text-red-900">{`Specimen ${index + 1}`}</h1>
          <SpecimenInfo index={index} />
        </div>
      ))}
      <div className="mt-3 flex justify-center items-center">
        <SubmitButton />
      </div>
    </div>
  );
}
