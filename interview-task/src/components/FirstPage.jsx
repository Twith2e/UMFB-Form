import Header from "../components/Header";
import Info from "../components/Info";
import Table from "../components/Table";
import Table2 from "../components/Table2";
import Signature from "./Signature";

function FirstPage() {
  const info1 = [
    {
      title: "BUSINESS NAME",
      type: "text",
      name: "Business Name",
    },
    {
      title: "REGISTRATION NUMBER",
      type: "number",
      name: "Business Registration Number",
    },
    {
      title: "DATE OF REGISTRATION",
      type: "date",
      name: "Business Registration Date",
    },
    {
      title: "OFFICE TEL No",
      type: "number",
      name: "Business Telephone Number1",
    },
    {
      title: "TEL No 2",
      type: "number",
      name: "Business Telephone Number2",
    },
    {
      title: "NATURE OF BUSINESS",
      type: "text",
      name: "Nature of Business",
    },
    {
      title: "SECTOR",
      type: "text",
      name: "Business Sector",
    },
    {
      title: "EMAIL",
      type: "email",
      name: "Business Email Address",
    },
    {
      title: "Monthly",
      type: "text",
      name: "Business Monthly Turnover",
    },
    {
      title: "Annually",
      type: "text",
      name: "Business Annual Turnover",
    },
    {
      title: "NO. OF EMPLOYEES",
      type: "number",
      name: "Business Employee Size",
    },
    {
      title: "PROPOSED INITIAL DEPOSIT",
      type: "number",
      name: "Business Proposed Initial Deposit",
    },
  ];
  return (
    <>
      <Header />
      <div className="flex flex-col gap-3 my-5">
        <Info {...info1[0]} />
        <div className="d-flex flex-column flex-lg-row gap-3 justify-content-lg-between">
          <div className="col-12 col-lg-5">
            <Info {...info1[1]} />
          </div>
          <div className="col-12 col-lg-5">
            <Info {...info1[2]} />
          </div>
        </div>
      </div>
      <Table />
      <div className="flex flex-col gap-3 my-5">
        <div className="d-flex flex-lg-row flex-column justify-content-lg-between gap-3">
          <div className="col-12 col-lg-5">
            <Info {...info1[3]} />
          </div>
          <div className="col-12 col-lg-5">
            <Info {...info1[4]} />
          </div>
        </div>
        <div>
          <Info {...info1[5]} />
        </div>
        <div className="d-flex flex-column gap-3 flex-lg-row justify-content-lg-between">
          <div className="col-12 col-lg-5">
            <Info {...info1[6]} />
          </div>
          <div className="col-12 col-lg-5">
            <Info {...info1[7]} />
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-4 gap-lg-3">
          <span className="font-bold whitespace-nowrap">
            BUSINESS TURNOVER:
          </span>
          <div className="row w-full d-flex flex-column gap-3 gap-lg-0 flex-lg-row">
            <div className="col-12 col-lg-5">
              <Info {...info1[8]} />
            </div>
            <div className="col-12 col-lg-5">
              <Info {...info1[9]} />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column gap-3 flex-lg-row justify-content-lg-between">
          <div className="col-12 col-lg-5">
            <Info {...info1[10]} />
          </div>
          <div className="col-12 col-lg-5">
            <Info {...info1[11]} />
          </div>
        </div>
      </div>
      <Table2 />
      <div className="flex flex-col gap-4 my-5 leading-normal">
        <span className="leading-5">
          I request the opening of an account with your bank and confirm that
          the above are true.
        </span>
        <span>
          I agree to the terms and conditions on the reverse of this application
          form.
        </span>
      </div>
      <div className="flex w-full flex-wrap gap-y-5">
        <div className="col-12 col-md-4">
          <Signature
            name={"first-sign"}
            imgName={"first-sign"}
            label="Upload Signature"
          />
        </div>
        <div className="col-12 col-md-4">
          <Signature
            name={"second-sign"}
            imgName={"second-sign"}
            label="Upload Signature"
          />
        </div>
        <div className="col-12 col-md-4">
          <Signature
            name={"third-sign"}
            imgName={"third-sign"}
            label="Upload Signature"
          />
        </div>
      </div>
    </>
  );
}

export default FirstPage;
