import AcctNumber from "./AcctNumber";
import Info from "./Info";
import SpecimenHeader from "./SpecimenHeader";
import SpecimenTable from "./SpecimenTable";

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
      <div>
        <Info title={"Account Name"} length={20} />
        <Info title={"Address"} length={20} />
        <div className="flex justify-between">
          <Info length={12} />
          <Info title={"Tel."} length={11} />
        </div>
      </div>
      <SpecimenTable />
    </div>
  );
}
