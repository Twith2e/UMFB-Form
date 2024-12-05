import { useState } from "react";
import Checkbox from "../components/Checkbox";
import DateInput from "../components/DateInput";
import Info from "../components/Info";
import InfoHeader from "../components/InfoHeader";
import PageHeader from "../components/PageHeader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ThirdPage() {
  const [gender, setGender] = useState("");
  const [marital, setMarital] = useState("");
  const [house, setHouse] = useState("");
  const [ID, setID] = useState("");
  const [kGender, setKgender] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="col-12 flex flex-col gap-4">
      <PageHeader text={"7B. DETAILS OF A SOLE PROPRIETOR"} />
      <InfoHeader number={"I"} text={"PERSONAL INFORMATION"} />
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"text"} title={"Surname"} />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"First Name"} />
        </div>
      </div>
      <div className="row justify-between ">
        <div className="col-5">
          <Info type={"text"} title={"Other Names"} />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"Mother's Maiden Name"} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <span>Date of Birth</span>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
          />
        </div>
        <div className="flex gap-2">
          <span>Gender:</span>
          <Checkbox
            text="F"
            checked={gender === "F"}
            onChange={() => setGender("F")}
          />
          <Checkbox
            text="M"
            checked={gender === "M"}
            onChange={() => setGender("M")}
          />
        </div>
        <div className="flex">
          <div className="relative">
            <Info type={"text"} title="Title" />
            <span className="text-xs font-bold absolute top-[100%] left-[40%]">
              (Mr, Mrs, Dr, Chief, etc)
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Info type={"text"} title={"Place of Birth"} />
        <div className="flex gap-2">
          <span className="font-bold flex-wrap">Marital Status</span>
          <Checkbox
            text={"Single"}
            checked={marital === "Single"}
            onChange={() => setMarital("Single")}
          />
          <Checkbox
            text={"Married"}
            checked={marital === "Married"}
            onChange={() => setMarital("Married")}
          />
        </div>
        <Info type={"text"} title={"Others"} />
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"text"} title={"Nationality (for non-nigerians)"} />
        </div>
        <div className="col-5">
          <Info type={"number"} title={"Residence Permit Number"} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <span>Permit Issue Date</span>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
          />
        </div>
        <div className="flex gap-2 items-center">
          <span>Permit Expiry Date</span>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
          />
        </div>
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"text"} title={"State of Origin"} />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"L.G.A"} />
        </div>
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"number"} title={"Tax ID. No. (TIN)"} />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"Religion(optional)"} />
        </div>
      </div>
      <Info type={"text"} title={"Purpose of Account"} />
      <InfoHeader number={"II."} text={"CONTACT DETAILS"} />
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"text"} title={"Residential Address"} />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"Street Name"} />
        </div>
      </div>
      <Info type={"text"} title={"Nearest Bus-Stop/Landmark"} />
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"text"} title={"City / Town"} />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"L.G.A"} />
        </div>
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"text"} title={"State"} />
        </div>
        <div className="flex gap-2 col-5">
          <span>Ownership Status:</span>
          <Checkbox
            text={"Owned"}
            checked={house === "Owned"}
            onChange={() => setHouse("Owned")}
          />
          <Checkbox
            text={"Rented"}
            checked={house === "Rented"}
            onChange={() => setHouse("Rented")}
          />
          <Checkbox
            text={"Family House"}
            checked={house === "Family House"}
            onChange={() => setHouse("Family House")}
          />
        </div>
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"number"} title={"Phone Number (1)"} />
        </div>
        <div className="col-5">
          <Info type={"number"} title={"Phone Number (2)"} />
        </div>
      </div>
      <Info type={"text"} title={"E-mail Address"} />
      <InfoHeader number={"III."} text={"MEANS OF IDENTIFICATION"} />
      <div className="flex justify-between items-center">
        <Checkbox
          text={"National ID Card"}
          checked={house === "ID"}
          onChange={() => setHouse("ID")}
        />
        <Checkbox
          text={"National Driver's License"}
          checked={house === "Driver"}
          onChange={() => setHouse("Driver")}
        />
        <Checkbox
          text={"International Pasport"}
          checked={house === "Passport"}
          onChange={() => setHouse("Passport")}
        />
        <Checkbox
          text={"National Voter's Card"}
          checked={house === "Voter"}
          onChange={() => setHouse("Voter")}
        />
        <Info type={"text"} title={"*Other(Please specify)"} />
      </div>
      <div>
        <Info type={"number"} title={"ID Number"} />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <span>ID Issue Date</span>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
          />
        </div>
        <div className="flex gap-2 items-center">
          <span>ID Expiry Date</span>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
          />
        </div>
      </div>
      <Info type={"number"} title={"Bank Verification Number (BVN)"} />
      <InfoHeader number={"IV."} text={"DETAILS OF NEXT OF KIN"} />
      <div className="row justify-between">
        <div className="col-4">
          <Info type={"text"} title={"Surname"} />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"First Name"} />
        </div>
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"text"} title={"Other Names"} />
        </div>
        <div className="relative col-5">
          <Info type={"text"} title="Title" />
          <span className="text-xs font-bold absolute top-[100%] left-[40%]">
            (Mr, Mrs, Dr, Chief, etc)
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <span>Date of Birth</span>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            text={"F"}
            checked={kGender === "F"}
            onChange={() => setKgender("F")}
          />
          <Checkbox
            text={"M"}
            checked={kGender === "M"}
            onChange={() => setKgender("M")}
          />
        </div>
        <Info type={"text"} title={"Relationship"} />
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"number"} title={"Phone Number (1)"} />
        </div>
        <div className="col-5">
          <Info type={"number"} title={"Phone Number (2)"} />
        </div>
      </div>
      <Info type={"text"} title={"E-mail Address"} />
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"text"} title={"Residential Address"} />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"Street Name"} />
        </div>
      </div>
      <Info type={"text"} title={"Nearest Bus-Stop/Landmark"} />
      <Info type={"text"} title={"Place of Work"} />
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"text"} title={"City / Town"} />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"L.G.A"} />
        </div>
      </div>
      <Info type={"text"} title={"State"} />
      <PageHeader text={"8. ADDTIONAL DETAILS"} />
      <Info type={"text"} title={"Name of Parent/Affliated Company"} />
      <Info
        type={"text"}
        title={"Country of Incorporation of Parent/Affliated Company"}
      />
    </div>
  );
}
