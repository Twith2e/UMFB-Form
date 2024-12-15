import Checkbox from "../components/Checkbox";
import Info from "../components/Info";
import InfoHeader from "../components/InfoHeader";
import PageHeader from "../components/PageHeader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "./FormContext";
import DropDown from "./DropDown";

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
                className="bg-red-900 text-white px-2 py-1 hover:bg-red-700 active:bg-red-600"
              >
                Remove
              </button>
            </div>
          ) : (
            ""
          )}
          <PageHeader text={`7B. DETAILS OF A SOLE PROPRIETOR ${count.id}`} />
          <InfoHeader number={"I"} text={"PERSONAL INFORMATION"} />
          <div className="d-flex flex-lg-row flex-column gap-3 justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <Info
                type={"text"}
                title={"Surname"}
                name={`Proprietor Surname${count.id}`}
              />
            </div>
            <div className="col-12 col-lg-5">
              <Info
                type={"text"}
                title={"First Name"}
                name={`Proprietor Firstname${count.id}`}
              />
            </div>
          </div>
          <div className="row flex-column flex-lg-row gap-3 justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <Info
                type={"text"}
                title={"Other Names"}
                name={`Proprietor Other Names${count.id}`}
              />
            </div>
            <div className="col-12 col-lg-5">
              <Info
                type={"text"}
                title={"Mother's Maiden Name"}
                name={`Proprietor Mother's Maiden Name${count.id}`}
              />
            </div>
          </div>
          <div className="row flex-column flex-lg-row gap-3">
            <div className="flex gap-2 items-center col-12 col-lg-6">
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
            <div className="d-flex align-items-center justify-between col-lg-5">
              <div className="flex gap-2">
                <span>Gender:</span>
                <Checkbox
                  text="F"
                  checked={
                    formData[`Proprietor's Gender${count.id}`] === "Female"
                  }
                  onChange={() =>
                    handleCheckboxChange(
                      `Proprietor's Gender${count.id}`,
                      "Female"
                    )
                  }
                />
                <Checkbox
                  text="M"
                  checked={
                    formData[`Proprietor's Gender${count.id}`] === "Male"
                  }
                  onChange={() =>
                    handleCheckboxChange(
                      `Proprietor's Gender${count.id}`,
                      "Male"
                    )
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
          </div>
          <div className="row d-flex flex-column gap-3 flex-lg-row justify-content-lg-between">
            <div className="col-lg-4">
              <Info
                type={"text"}
                title={"Place of Birth"}
                name={`Proprietor Place of Birth${count.id}`}
              />
            </div>
            <div className="flex gap-2 col-lg-3">
              <span className="font-bold flex-wrap">Marital Status:</span>
              <Checkbox
                text={"Single"}
                checked={
                  formData[`Proprietor's Marital Status${count.id}`] ===
                  "Single"
                }
                onChange={() =>
                  handleCheckboxChange(
                    `Proprietor's Marital Status${count.id}`,
                    "Single"
                  )
                }
              />
              <Checkbox
                text={"Married"}
                checked={
                  formData[`Proprietor's Marital Status${count.id}`] ===
                  "Married"
                }
                onChange={() =>
                  handleCheckboxChange(
                    `Proprietor's Marital Status${count.id}`,
                    "Married"
                  )
                }
              />
            </div>
            <div className="col-lg-4">
              <Info
                type={"text"}
                title={"Others"}
                name={`Proprietor Marital Status (Others)${count.id}`}
                required={false}
              />
            </div>
          </div>
          <div className="row flex-column flex-lg-row gap-3 justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <Info
                type={"text"}
                title={"Nationality (for non-nigerians)"}
                name={`Proprietor's Nationality${count.id}`}
                required={false}
              />
            </div>
            <div className="col-12 col-lg-5">
              <Info
                type={"number"}
                title={"Residence Permit Number"}
                name={`Proprietor's Residence Permit Number${count.id}`}
              />
            </div>
          </div>
          <div className="row flex-column gap-3 flex-lg-row">
            <div className="flex gap-2 items-center col-lg-5">
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
            <div className="flex gap-2 items-center col-lg-5">
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
          <div className="row flex-column flex-lg-row gap-3 justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <Info
                type={"number"}
                title={"Tax ID. No. (TIN)"}
                name={`Proprietor's TIN${count.id}`}
              />
            </div>
            <div className="col-12 col-lg-5">
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
          <div className="row flex-column flex-lg-row gap-3 justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <Info
                type={"text"}
                title={"Residential Address"}
                name={`Proprietor's Residential Address${count.id}`}
              />
            </div>
            <div className="col-12 col-lg-5">
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
          <div className="row flex-column flex-lg-row gap-3">
            <div className="col-12 col-lg-5">
              <Info
                type={"text"}
                title={"City/Town"}
                name={`Proprietor's Residence City/Town${count.id}`}
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-3 col-12 col-lg-5">
              <div>
                <span>Ownership Status:</span>
              </div>
              <div className="flex justify-between gap-lg-3">
                <Checkbox
                  text={"Owned"}
                  checked={
                    formData[`House Ownership Status${count.id}`] === "Owned"
                  }
                  onChange={() =>
                    handleCheckboxChange(
                      `House Ownership Status${count.id}`,
                      "Owned"
                    )
                  }
                />
                <Checkbox
                  text={"Rented"}
                  checked={
                    formData[`House Ownership Status${count.id}`] === "Rented"
                  }
                  onChange={() =>
                    handleCheckboxChange(
                      `House Ownership Status${count.id}`,
                      "Rented"
                    )
                  }
                />
                <Checkbox
                  text={"Family House"}
                  checked={
                    formData[`House Ownership Status${count.id}`] ===
                    "Family House"
                  }
                  onChange={() =>
                    handleCheckboxChange(
                      `House Ownership Status${count.id}`,
                      "Family House"
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="row flex-column flex-lg-row gap-3 justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <Info
                type={"number"}
                title={"Phone Number (1)"}
                name={`First Proprietor's Phone Number${count.id}`}
              />
            </div>
            <div className="col-12 col-lg-5">
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
          <div className="flex justify-between items-center flex-wrap gap-y-3">
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
          <div className="row flex-column flex-lg-row gap-3">
            <div className="flex gap-2 items-center col-lg-6">
              <span className="font-bold">ID Issue Date:</span>
              <DatePicker
                selected={formData[`Proprietor's ID Issue Date${count.id}`]}
                onChange={(date) =>
                  updateField(`Proprietor's ID Issue Date${count.id}`, date)
                }
                name={`Proprietor's ID Issue Date${count.id}`}
                className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholderText="Select a date"
              />
            </div>
            <div className="flex gap-2 items-center col-lg-5">
              <span className="font-bold">ID Expiry Date:</span>
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
          <div className="row flex-column flex-lg-row gap-3 justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <Info
                type={"text"}
                title={"Surname"}
                name={`Next of Kin Surname${count.id}`}
              />
            </div>
            <div className="col-12 col-lg-5">
              <Info
                type={"text"}
                title={"First Name"}
                name={`Next of Kin Firstname${count.id}`}
              />
            </div>
          </div>
          <div className="row flex-column flex-lg-row gap-3 justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <Info
                type={"text"}
                title={"Other Names"}
                name={`Next of Kin Other Names${count.id}`}
              />
            </div>
            <div className="relative col-12 col-lg-5">
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
          <div className="row d-flex flex-column flex-lg-row gap-3">
            <div className="flex gap-2 items-center col-lg-4">
              <span>Date of Birth</span>
              <DatePicker
                selected={formData[`Next of Kin DOB${count.id}`]}
                onChange={(date) =>
                  updateField(`Next of Kin DOB${count.id}`, date)
                }
                name={`Next of Kin DOB${count.id}`}
                className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholderText="Select a date"
              />
            </div>
            <div className="flex gap-2 col-lg-3">
              <span className="font-bold">Gender:</span>
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
            <div className="col-lg-4">
              <Info
                type={"text"}
                title={"Relationship"}
                name={`Next of Kin Relationship${count.id}`}
              />
            </div>
          </div>
          <div className="row flex-column flex-lg-row gap-3 justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <Info
                type={"number"}
                title={"Phone Number (1)"}
                name={`First Next of Kin Phone Number${count.id}`}
              />
            </div>
            <div className="col-12 col-lg-5">
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
          <div className="row flex-column flex-lg-row gap-3 justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <Info
                type={"text"}
                title={"Residential Address"}
                name={`Next of Kin Home Address${count.id}`}
              />
            </div>
            <div className="col-12 col-lg-5">
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
          <div className="row flex-column flex-lg-row gap-3 justify-content-lg-between">
            <div className="col-12 col-lg-5">
              <Info
                type={"text"}
                title={"City / Town"}
                name={`Next of Kin Home City/Town${count.id}`}
              />
            </div>
            <div className="col-12 col-lg-5">
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
