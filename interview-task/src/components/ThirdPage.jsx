import { useState } from "react";
import Checkbox from "../components/Checkbox";
import Info from "../components/Info";
import InfoHeader from "../components/InfoHeader";
import PageHeader from "../components/PageHeader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "./FormContext";

export default function ThirdPage() {
  const { formData, updateField } = useForm();

  const handleCheckboxChange = (field, value) => {
    updateField(field, value); // Update global state
  };

  return (
    <div className="col-12 flex flex-col gap-4">
      <PageHeader text={"7B. DETAILS OF A SOLE PROPRIETOR"} />
      <InfoHeader number={"I"} text={"PERSONAL INFORMATION"} />
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"text"} title={"Surname"} name={"proprietor-surname"} />
        </div>
        <div className="col-5">
          <Info
            type={"text"}
            title={"First Name"}
            name={"proprietor-firstname"}
          />
        </div>
      </div>
      <div className="row justify-between ">
        <div className="col-5">
          <Info
            type={"text"}
            title={"Other Names"}
            name={"proprietor-othernames"}
          />
        </div>
        <div className="col-5">
          <Info
            type={"text"}
            title={"Mother's Maiden Name"}
            name={"proprietor-maiden-name"}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <span>Date of Birth</span>
          <DatePicker
            selected={formData["proprietor-DOB"]}
            onChange={(date) => updateField("proprietor-DOB", date)}
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
            name="proprietor-DOB"
            value={formData["proprietor-DOB"] || ""}
          />
        </div>
        <div className="flex gap-2">
          <span>Gender:</span>
          <Checkbox
            text="F"
            checked={formData.Gender === "Female"}
            onChange={() => handleCheckboxChange("Gender", "Female")}
          />
          <Checkbox
            text="M"
            checked={formData.Gender === "Male"}
            onChange={() => handleCheckboxChange("Gender", "Male")}
          />
        </div>
        <div className="flex">
          <div className="relative">
            <Info type={"text"} title="Title" name={"proprietor-title"} />
            <span className="text-xs font-bold absolute top-[100%] left-[40%]">
              (Mr, Mrs, Dr, Chief, etc)
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Info
          type={"text"}
          title={"Place of Birth"}
          name={"proprietor-place-of-birth"}
        />
        <div className="flex gap-2">
          <span className="font-bold flex-wrap">Marital Status</span>
          <Checkbox
            text={"Single"}
            checked={formData.Marital === "Single"}
            onChange={() => handleCheckboxChange("Marital", "Single")}
          />
          <Checkbox
            text={"Married"}
            checked={formData.Marital === "Married"}
            onChange={() => handleCheckboxChange("Marital", "Married")}
          />
        </div>
        <Info
          type={"text"}
          title={"Others"}
          name={"proprietor-others"}
          required={false}
        />
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info
            type={"text"}
            title={"Nationality (for non-nigerians)"}
            name={"proprietor-religion"}
            required={false}
          />
        </div>
        <div className="col-5">
          <Info
            type={"number"}
            title={"Residence Permit Number"}
            name={"proprietor-residence-permit-number"}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <span>Permit Issue Date</span>
          <DatePicker
            selected={formData["permit-issue-date"]}
            onChange={(date) => updateField("permit-issue-date", date)}
            name="permit-issue-date"
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
          />
        </div>
        <div className="flex gap-2 items-center">
          <span>Permit Expiry Date</span>
          <DatePicker
            selected={formData["permit-exp-date"]}
            onChange={(date) => updateField("permit-exp-date", date)}
            name="permit-exp-date"
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
          />
        </div>
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info
            type={"text"}
            title={"State of Origin"}
            name={"proprietor-state-of-origin"}
          />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"L.G.A"} name={"proprietor-LGA"} />
        </div>
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info
            type={"number"}
            title={"Tax ID. No. (TIN)"}
            name={"proprietor-TIN"}
          />
        </div>
        <div className="col-5">
          <Info
            type={"text"}
            title={"Religion(optional)"}
            name={"proprietor-religion"}
          />
        </div>
      </div>
      <Info
        type={"text"}
        title={"Purpose of Account"}
        name={"proprietor-purpose-of-account"}
      />
      <InfoHeader number={"II."} text={"CONTACT DETAILS"} />
      <div className="row justify-between">
        <div className="col-5">
          <Info
            type={"text"}
            title={"Residential Address"}
            name={"proprietor-residence-address"}
          />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"Street Name"} name={"Street Name"} />
        </div>
      </div>
      <Info
        type={"text"}
        title={"Nearest Bus-Stop/Landmark"}
        name={"Landmark/Bus-Stop"}
      />
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"text"} title={"City / Town"} name={"City/Town"} />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"L.G.A"} name={"Residence LGA"} />
        </div>
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info type={"text"} title={"State"} name={"Residence State"} />
        </div>
        <div className="flex gap-2 col-5">
          <span>Ownership Status:</span>
          <Checkbox
            text={"Owned"}
            checked={formData.House === "Owned"}
            onChange={() => handleCheckboxChange("House", "Owned")}
          />
          <Checkbox
            text={"Rented"}
            checked={formData.House === "Rented"}
            onChange={() => handleCheckboxChange("House", "Rented")}
          />
          <Checkbox
            text={"Family House"}
            checked={formData.House === "Family House"}
            onChange={() => handleCheckboxChange("House", "Family House")}
          />
        </div>
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info
            type={"number"}
            title={"Phone Number (1)"}
            name={"Proprietor Phone Number (1)"}
          />
        </div>
        <div className="col-5">
          <Info
            type={"number"}
            title={"Phone Number (2)"}
            name={"Proprietor Phone Number (2)"}
          />
        </div>
      </div>
      <Info type={"text"} title={"E-mail Address"} name={"Proprietor Email"} />
      <InfoHeader number={"III."} text={"MEANS OF IDENTIFICATION"} />
      <div className="flex justify-between items-center">
        <Checkbox
          text={"National ID Card"}
          checked={formData.Identification === "ID"}
          onChange={() => handleCheckboxChange("Identification", "ID")}
        />
        <Checkbox
          text={"National Driver's License"}
          checked={formData.Identification === "Driver"}
          onChange={() => handleCheckboxChange("Identification", "Driver")}
        />
        <Checkbox
          text={"International Pasport"}
          checked={formData.Identification === "Passport"}
          onChange={() => handleCheckboxChange("Identification", "Passport")}
        />
        <Checkbox
          text={"National Voter's Card"}
          checked={formData.Identification === "Voter"}
          onChange={() => handleCheckboxChange("Identification", "Voter")}
        />
        <Info type={"text"} title={"*Other(Please specify)"} />
      </div>
      <div>
        <Info
          type={"number"}
          title={"ID Number"}
          name={"Other means of Identification"}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <span>ID Issue Date</span>
          <DatePicker
            selected={formData["ID-issue-date"]}
            onChange={(date) => updateField("ID-issue-date", date)}
            name="ID-issue-date"
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
          />
        </div>
        <div className="flex gap-2 items-center">
          <span>ID Expiry Date</span>
          <DatePicker
            selected={formData["ID-exp-date"]}
            onChange={(date) => updateField("ID-exp-date", date)}
            name="ID-exp-date"
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
          />
        </div>
      </div>
      <Info
        type={"number"}
        title={"Bank Verification Number (BVN)"}
        name={"Proprietor BVN"}
      />
      <InfoHeader number={"IV."} text={"DETAILS OF NEXT OF KIN"} />
      <div className="row justify-between">
        <div className="col-4">
          <Info type={"text"} title={"Surname"} name={"Next of Kin Surname"} />
        </div>
        <div className="col-5">
          <Info
            type={"text"}
            title={"First Name"}
            name={"Next of Kin Firstname"}
          />
        </div>
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info
            type={"text"}
            title={"Other Names"}
            name={"Next of Kin Other Names"}
          />
        </div>
        <div className="relative col-5">
          <Info type={"text"} title="Title" name={"Next of Kin Title"} />
          <span className="text-xs font-bold absolute top-[100%] left-[40%]">
            (Mr, Mrs, Dr, Chief, etc)
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <span>Date of Birth</span>
          <DatePicker
            selected={formData["next-of-kin-DOB"]}
            onChange={(date) => updateField("next-of-kin-DOB", date)}
            name="next-of-kin-DOB"
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholderText="Select a date"
          />
        </div>
        <div className="flex gap-2">
          <Checkbox
            text={"F"}
            checked={formData.kGender === "F"}
            onChange={() => handleCheckboxChange("kGender", "F")}
          />
          <Checkbox
            text={"M"}
            checked={formData.kGender === "M"}
            onChange={() => handleCheckboxChange("kGender", "M")}
          />
        </div>
        <Info
          type={"text"}
          title={"Relationship"}
          name={"Next of Kin Relationship"}
        />
      </div>
      <div className="row justify-between">
        <div className="col-5">
          <Info
            type={"number"}
            title={"Phone Number (1)"}
            name={"Next of Kin Phone Number (1)"}
          />
        </div>
        <div className="col-5">
          <Info
            type={"number"}
            title={"Phone Number (2)"}
            name={"Next of Kin of Phone Number (2)"}
          />
        </div>
      </div>
      <Info type={"text"} title={"E-mail Address"} name={"Next of Kin Email"} />
      <div className="row justify-between">
        <div className="col-5">
          <Info
            type={"text"}
            title={"Residential Address"}
            name={"Next of Kin Home Adress"}
          />
        </div>
        <div className="col-5">
          <Info
            type={"text"}
            title={"Street Name"}
            name={"Next of Kin Home Street Name"}
          />
        </div>
      </div>
      <Info
        type={"text"}
        title={"Nearest Bus-Stop/Landmark"}
        name={"Next of Kin Home Landmark/Bus-Stop"}
      />
      <Info
        type={"text"}
        title={"Place of Work"}
        name={"Next of Kin Place of Work"}
      />
      <div className="row justify-between">
        <div className="col-5">
          <Info
            type={"text"}
            title={"City / Town"}
            name={"Next of Kin Home City/Town"}
          />
        </div>
        <div className="col-5">
          <Info type={"text"} title={"L.G.A"} name={"Next of Kin Home LGA"} />
        </div>
      </div>
      <Info type={"text"} title={"State"} name={"Next of Kin Home State"} />
      <PageHeader text={"8. ADDTIONAL DETAILS"} />
      <Info
        type={"text"}
        title={"Name of Parent/Affliated Company"}
        name={"Affliated/Parent Company"}
      />
      <Info
        type={"text"}
        title={"Country of Incorporation of Parent/Affliated Company"}
        name={"Country of Affliated/Parent Company"}
      />
    </div>
  );
}
