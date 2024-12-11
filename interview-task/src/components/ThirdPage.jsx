import Checkbox from "../components/Checkbox";
import Info from "../components/Info";
import InfoHeader from "../components/InfoHeader";
import PageHeader from "../components/PageHeader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "./FormContext";
import DropDown from "./DropDown";
import { useEffect } from "react";

export default function ThirdPage() {
  const { formData, updateField, formCount, setFormCount } = useForm();

  const handleCheckboxChange = (field, value) => {
    updateField(field, value);
  };

  const addForm = () => {
    setFormCount((prev) => [...prev, { id: prev[prev.length - 1].id + 1 }]);
  };

  const removeForm = (id) => {
    setFormCount((prev) => prev.filter((count) => count.id !== id));
  };

  return (
    <>
      {formCount.map((count) => (
        <div key={count.id} className="col-12 flex flex-col gap-4 mb-5">
          {count.id > 1 ? (
            <div className="text-right">
              <button
                onClick={() => removeForm(count.id)}
                className="bg-red-600 text-white px-2 py-1 hover:bg-red-700 active:bg-red-600"
              >
                Remove
              </button>
            </div>
          ) : (
            ""
          )}
          <PageHeader text={`7B. DETAILS OF A SOLE PROPRIETOR ${count.id}`} />
          <InfoHeader number={"I"} text={"PERSONAL INFORMATION"} />
          <div className="row justify-between">
            <div className="col-5">
              <Info
                type={"text"}
                title={"Surname"}
                name={`Proprietor Surname${count.id}`}
              />
            </div>
            <div className="col-5">
              <Info
                type={"text"}
                title={"First Name"}
                name={`Proprietor Firstname${count.id}`}
              />
            </div>
          </div>
          <div className="row justify-between ">
            <div className="col-5">
              <Info
                type={"text"}
                title={"Other Names"}
                name={`Proprietor Other Names${count.id}`}
              />
            </div>
            <div className="col-5">
              <Info
                type={"text"}
                title={"Mother's Maiden Name"}
                name={`Proprietor Mother's Maiden Name${count.id}`}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <span>Date of Birth</span>
              <DatePicker
                selected={formData[`Proprietor DOB${count.id}`]}
                onChange={(date) =>
                  updateField(`Proprietor DOB${count.id}`, date)
                }
                className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholderText="Select a date"
                name={`Proprietor DOB${count.id}`}
                value={formData[`Proprietor DOB${count.id}`] || ""}
              />
            </div>
            <div className="flex gap-2">
              <span>Gender:</span>
              <Checkbox
                text="F"
                checked={formData[`Gender${count.id}`] === "Female"}
                onChange={() =>
                  handleCheckboxChange(`Gender${count.id}`, "Female")
                }
              />
              <Checkbox
                text="M"
                checked={formData[`Gender${count.id}`] === "Male"}
                onChange={() =>
                  handleCheckboxChange(`Gender${count.id}`, "Male")
                }
              />
            </div>
            <div className="flex">
              <div className="relative">
                <Info
                  type={"text"}
                  title="Title"
                  name={`Proprietor Title${count.id}`}
                />
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
              name={`Proprietor Place of Birth${count.id}`}
            />
            <div className="flex gap-2">
              <span className="font-bold flex-wrap">Marital Status</span>
              <Checkbox
                text={"Single"}
                checked={formData[`Marital-Status${count.id}`] === "Single"}
                onChange={() =>
                  handleCheckboxChange(`Marital-Status${count.id}`, "Single")
                }
              />
              <Checkbox
                text={"Married"}
                checked={formData[`Marital-Status${count.id}`] === "Married"}
                onChange={() =>
                  handleCheckboxChange(`Marital-Status${count.id}`, "Married")
                }
              />
            </div>
            <Info
              type={"text"}
              title={"Others"}
              name={`Proprietor Marital Status (Others)${count.id}`}
              required={false}
            />
          </div>
          <div className="row justify-between">
            <div className="col-5">
              <Info
                type={"text"}
                title={"Nationality (for non-nigerians)"}
                name={`Proprietor's Nationality${count.id}`}
                required={false}
              />
            </div>
            <div className="col-5">
              <Info
                type={"number"}
                title={"Residence Permit Number"}
                name={`Proprietor's Residence Permit Number${count.id}`}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <span>Permit Issue Date</span>
              <DatePicker
                selected={formData[`Proprietor's Permit Issue Date${count.id}`]}
                onChange={(date) =>
                  updateField(`Proprietor's Permit Issue Date${count.id}`, date)
                }
                name={`Proprietor's Permit Issue Date${count.id}`}
                className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholderText="Select a date"
              />
            </div>
            <div className="flex gap-2 items-center">
              <span>Permit Expiry Date</span>
              <DatePicker
                selected={
                  formData[`Proprietor's Permit Expiry Date${count.id}`]
                }
                onChange={(date) =>
                  updateField(
                    `Proprietor's Permit Expiry Date${count.id}`,
                    date
                  )
                }
                name={`Proprietor's Permit Expiry Date${count.id}`}
                className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholderText="Select a date"
              />
            </div>
          </div>
          <DropDown
            stateName={`Proprietor State of Origin${count.id}`}
            LGAName={`Proprietor LGA of Origin${count.id}`}
          />
          <div className="row justify-between">
            <div className="col-5">
              <Info
                type={"number"}
                title={"Tax ID. No. (TIN)"}
                name={`Proprietor's TIN${count.id}`}
              />
            </div>
            <div className="col-5">
              <Info
                type={"text"}
                title={"Religion(optional)"}
                name={`Proprietor's Religion${count.id}`}
                required={false}
              />
            </div>
          </div>
          <Info
            type={"text"}
            title={"Purpose of Account"}
            name={`Proprietor's Purpose of Account${count.id}`}
          />
          <InfoHeader number={"II."} text={"CONTACT DETAILS"} />
          <div className="row justify-between">
            <div className="col-5">
              <Info
                type={"text"}
                title={"Residential Address"}
                name={`Proprietor's Residential Address${count.id}`}
              />
            </div>
            <div className="col-5">
              <Info
                type={"text"}
                title={"Street Name"}
                name={`Proprietor's Residence Street Name${count.id}`}
              />
            </div>
          </div>
          <Info
            type={"text"}
            title={"Nearest Bus-Stop/Landmark"}
            name={`Proprietor's Residence Landmark/Bus-Stop${count.id}`}
          />
          <DropDown
            stateName={`Proprietor's Residence State${count.id}`}
            LGAName={`Proprietor's Residence LGA${count.id}`}
          />
          <div className="row justify-between">
            <div className="col-5">
              <Info
                type={"text"}
                title={"City/Town"}
                name={`Proprietor's Residence City/Town${count.id}`}
              />
            </div>
            <div className="flex gap-2 col-5">
              <span>Ownership Status:</span>
              <Checkbox
                text={"Owned"}
                checked={formData[`House${count.id}`] === "Owned"}
                onChange={() =>
                  handleCheckboxChange(`House${count.id}`, "Owned")
                }
              />
              <Checkbox
                text={"Rented"}
                checked={formData[`House${count.id}`] === "Rented"}
                onChange={() =>
                  handleCheckboxChange(`House${count.id}`, "Rented")
                }
              />
              <Checkbox
                text={"Family House"}
                checked={formData[`House${count.id}`] === "Family House"}
                onChange={() =>
                  handleCheckboxChange(`House${count.id}`, "Family House")
                }
              />
            </div>
          </div>
          <div className="row justify-between">
            <div className="col-5">
              <Info
                type={"number"}
                title={"Phone Number (1)"}
                name={"First Proprietor's Phone Number"}
              />
            </div>
            <div className="col-5">
              <Info
                type={"number"}
                title={"Phone Number (2)"}
                name={`Second Proprietor's Phone Number${count.id}`}
              />
            </div>
          </div>
          <Info
            type={"text"}
            title={"E-mail Address"}
            name={`Proprietor Email${count.id}`}
          />
          <InfoHeader number={"III."} text={"MEANS OF IDENTIFICATION"} />
          <div className="flex justify-between items-center">
            <Checkbox
              text={"National ID Card"}
              checked={formData[`Identification${count.id}`] === "ID"}
              onChange={() =>
                handleCheckboxChange([`Identification${count.id}`], "ID")
              }
            />
            <Checkbox
              text={"National Driver's License"}
              checked={formData[`Identification${count.id}`] === "Driver"}
              onChange={() =>
                handleCheckboxChange([`Identification${count.id}`], "Driver")
              }
            />
            <Checkbox
              text={"International Pasport"}
              checked={formData[`Identification${count.id}`] === "Passport"}
              onChange={() =>
                handleCheckboxChange([`Identification${count.id}`], "Passport")
              }
            />
            <Checkbox
              text={"National Voter's Card"}
              checked={formData[`Identification${count.id}`] === "Voter"}
              onChange={() =>
                handleCheckboxChange([`Identification${count.id}`], "Voter")
              }
            />
            <Info type={"text"} title={"*Other(Please specify)"} />
          </div>
          <div>
            <Info
              type={"number"}
              title={"ID Number"}
              name={`Other means of Identification${count.id}`}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <span>ID Issue Date</span>
              <DatePicker
                selected={formData["Proprietor's ID Issue Date"]}
                onChange={(date) =>
                  updateField("Proprietor's ID Issue Date", date)
                }
                name={`Proprietor's ID Issue Date${count.id}`}
                className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholderText="Select a date"
              />
            </div>
            <div className="flex gap-2 items-center">
              <span>ID Expiry Date</span>
              <DatePicker
                selected={formData[`Proprietor's ID Expiry Date${count.id}`]}
                onChange={(date) =>
                  updateField(`Proprietor's ID Expiry Date${count.id}`, date)
                }
                name={`Proprietor's ID Expiry Date${count.id}`}
                className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholderText="Select a date"
              />
            </div>
          </div>
          <Info
            type={"number"}
            title={"Bank Verification Number (BVN)"}
            name={`Proprietor's BVN${count.id}`}
          />
          <InfoHeader number={"IV."} text={"DETAILS OF NEXT OF KIN"} />
          <div className="row justify-between">
            <div className="col-4">
              <Info
                type={"text"}
                title={"Surname"}
                name={`Next of Kin Surname${count.id}`}
              />
            </div>
            <div className="col-5">
              <Info
                type={"text"}
                title={"First Name"}
                name={`Next of Kin Firstname${count.id}`}
              />
            </div>
          </div>
          <div className="row justify-between">
            <div className="col-5">
              <Info
                type={"text"}
                title={"Other Names"}
                name={`Next of Kin Other Names${count.id}`}
              />
            </div>
            <div className="relative col-5">
              <Info
                type={"text"}
                title="Title"
                name={`Next of Kin Title${count.id}`}
              />
              <span className="text-xs font-bold absolute top-[100%] left-[40%]">
                (Mr, Mrs, Dr, Chief, etc)
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <span>Date of Birth</span>
              <DatePicker
                selected={formData[`next-of-kin-DOB${count.id}`]}
                onChange={(date) =>
                  updateField(`next-of-kin-DOB${count.id}`, date)
                }
                name={`Next of Kin DOB${count.id}`}
                className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholderText="Select a date"
              />
            </div>
            <div className="flex gap-2">
              <Checkbox
                text={"F"}
                checked={formData[`Next of Kin Gender${count.id}`] === "Female"}
                onChange={() =>
                  handleCheckboxChange(
                    `Next of Kin Gender${count.id}`,
                    "Female"
                  )
                }
              />
              <Checkbox
                text={"M"}
                checked={formData[`Next of Kin Gender${count.id}`] === "Male"}
                onChange={() =>
                  handleCheckboxChange(`Next of Kin Gender${count.id}`, "Male")
                }
              />
            </div>
            <Info
              type={"text"}
              title={"Relationship"}
              name={`Next of Kin Relationship${count.id}`}
            />
          </div>
          <div className="row justify-between">
            <div className="col-5">
              <Info
                type={"number"}
                title={"Phone Number (1)"}
                name={`First Next of Kin Phone Number${count.id}`}
              />
            </div>
            <div className="col-5">
              <Info
                type={"number"}
                title={"Phone Number (2)"}
                name={`Second Next of Kin of Phone Number${count.id}`}
              />
            </div>
          </div>
          <Info
            type={"text"}
            title={"E-mail Address"}
            name={`Next of Kin Email${count.id}`}
          />
          <div className="row justify-between">
            <div className="col-5">
              <Info
                type={"text"}
                title={"Residential Address"}
                name={`Next of Kin Home Adress${count.id}`}
              />
            </div>
            <div className="col-5">
              <Info
                type={"text"}
                title={"Street Name"}
                name={`Next of Kin Home Street Name${count.id}`}
              />
            </div>
          </div>
          <Info
            type={"text"}
            title={"Nearest Bus-Stop/Landmark"}
            name={`Next of Kin Home Landmark/Bus-Stop${count.id}`}
          />
          <Info
            type={"text"}
            title={"Place of Work"}
            name={`Next of Kin Place of Work${count.id}`}
          />
          <div className="row justify-between">
            <div className="col-5">
              <Info
                type={"text"}
                title={"City / Town"}
                name={`Next of Kin Home City/Town${count.id}`}
              />
            </div>
            <div className="col-5">
              <Info
                type={"text"}
                title={"L.G.A"}
                name={`Next of Kin Home LGA${count.id}`}
              />
            </div>
          </div>
          <Info
            type={"text"}
            title={"State"}
            name={`Next of Kin Home State${count.id}`}
          />
          <PageHeader text={"8. ADDTIONAL DETAILS"} />
          <Info
            type={"text"}
            title={"Name of Parent/Affliated Company"}
            name={`Affliated/Parent Company${count.id}`}
          />
          <Info
            type={"text"}
            title={"Country of Incorporation of Parent/Affliated Company"}
            name={`Country of Affliated/Parent Company${count.id}`}
          />
        </div>
      ))}
      <div className="text-center">
        <button className="bg-green-500 text-white px-2 py-1" onClick={addForm}>
          Add
        </button>
      </div>
    </>
  );
}
