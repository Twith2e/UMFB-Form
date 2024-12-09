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
      name: "business-name",
    },
    {
      title: "REGISTRATION NUMBER",
      type: "number",
      name: "registration-number",
    },
    {
      title: "DATE OF REGISTRATION",
      type: "date",
      name: "date-of-registration",
    },
    {
      title: "OFFICE TEL No",
      type: "number",
      name: "officetel1",
    },
    {
      title: "TEL No 2",
      type: "number",
      name: "officetel2",
    },
    {
      title: "NATURE OF BUSINESS",
      type: "text",
      name: "nature-of-business",
    },
    {
      title: "SECTOR",
      type: "text",
      name: "sector",
    },
    {
      title: "EMAIL",
      type: "email",
      name: "email",
    },
    {
      title: "Monthly",
      type: "text",
      name: "monthly-business-turnover",
    },
    {
      title: "Annually",
      type: "text",
      name: "annually-business-turnover",
    },
    {
      title: "NO. OF EMPLOYEES",
      type: "number",
      name: "employee-count",
    },
    {
      title: "PROPOSED INITIAL DEPOSIT",
      lilTitle: ["₦"],
      type: "number",
      name: "proposed-initial-deposit",
    },
  ];
  return (
    <>
      <Header />
      <div className="flex flex-col gap-3 my-5">
        <Info {...info1[0]} />
        <div className="flex justify-between">
          <Info {...info1[1]} />
          <Info {...info1[2]} />
        </div>
      </div>
      <Table />
      <div className="flex flex-col gap-3 my-5">
        <div className="flex justify-between">
          <div className="col-5">
            <Info {...info1[3]} />
          </div>
          <div className="col-5">
            <Info {...info1[4]} />
          </div>
        </div>
        <div>
          <Info {...info1[5]} />
        </div>
        <div className="flex justify-between row">
          <div className="col-5">
            <Info {...info1[6]} />
          </div>
          <div className="col-5">
            <Info {...info1[7]} />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-bold whitespace-nowrap">
            BUSINESS TURNOVER:
          </span>
          <div className="row w-full">
            <div className="col-5">
              <Info {...info1[8]} />
            </div>
            <div className="col-5">
              <Info {...info1[9]} />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="col-5">
            <Info {...info1[10]} />
          </div>
          <div className="col-5">
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
      <div className="flex justify-evenly w-full">
        <Signature
          name={"first-sign"}
          imgName={"first-sign"}
          label="Upload Signature"
        />
        <Signature
          name={"second-sign"}
          imgName={"second-sign"}
          label="Upload Signature"
        />
        <Signature
          name={"third-sign"}
          imgName={"third-sign"}
          label="Upload Signature"
        />
      </div>
    </>
  );
}

export default FirstPage;
