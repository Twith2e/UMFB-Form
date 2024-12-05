import Signature from "./Signature";
import Table3 from "./Table3";
import Table4 from "./Table4";

export default function FourthPage() {
  return (
    <div className="flex flex-col gap-3">
      <Table3 />
      <div className="flex justify-between">
        <Signature text={"Signature of CSU and Date"} />
        <Signature text={"Account Officer"} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[#7d3330] font-bold">
          Signature of BM/CSO and Date:
        </span>
      </div>
      <Table4 />
    </div>
  );
}
