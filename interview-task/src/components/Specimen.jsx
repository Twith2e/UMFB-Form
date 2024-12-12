import AcctNumber from "./AcctNumber";
import Info from "./Info";
import SpecimenHeader from "./SpecimenHeader";
import SpecimenInfo from "./SpecimenInfos";
import SubmitButton from "./SubmitButton";
import { useForm } from "./FormContext";

export default function Specimen() {
  const { formCount } = useForm();
  return (
    <div className="">
      <div className="row flex flex-col gap-y-3 lg:flex-row items-start md:justify-start lg:justify-between">
        <div className="col-12 col-lg-5">
          <SpecimenHeader />
        </div>
        <div className="col-12 col-lg-5">
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
          <h1 className="text-red-900">{`Specimen ${count.id}`}</h1>
          <SpecimenInfo index={count.id} />
        </div>
      ))}
      <div className="mt-3 flex justify-center items-center">
        <SubmitButton />
      </div>
    </div>
  );
}
