import Signature from "./Signature";
import Table3 from "./Table3";
import Table4 from "./Table4";

export default function FourthPage() {
  return (
    <div className="flex flex-col gap-3">
      <Table3 />
      <div className="flex justify-between">
        <Signature
          name={"Signature of CSU Signature"}
          imgName={"Signature of CSU Signature"}
          text={"Signature of CSU and Date"}
          label="Upload Signature"
        />
        <Signature
          name={"Account Officer Signature"}
          imgName={"Account Officer Signature"}
          text={"Account Officer"}
          label="Upload Signature"
        />
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
