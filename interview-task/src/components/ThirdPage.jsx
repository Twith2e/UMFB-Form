import Checkbox from "../components/Checkbox";
import Info from "../components/Info";
import InfoHeader from "../components/InfoHeader";
import PageHeader from "../components/PageHeader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "./FormContext";
import DropDown from "./DropDown";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "./useModal";

export default function ThirdPage() {
  const { formData, updateField, signatoryCount } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check sessionStorage to determine if the modal was already shown
    const modalShown = sessionStorage.getItem("modalShown");

    if (!modalShown) {
      setIsModalOpen(true); // Show the modal if it's not been shown already
    }

    // Cleanup on page unload (when navigating away)
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("modalShown");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleCheckboxChange = (field, value) => {
    updateField(field, value);
  };

  return (
    <>
      {isModalOpen ? (
        <Modal closeModal={setIsModalOpen} />
      ) : (
        Array.from({ length: signatoryCount }).map((_, index) => (
          <div key={index} className="col-12 flex flex-col gap-4 mb-5">
            <PageHeader
              text={`7B. DETAILS OF A SOLE PROPRIETOR ${index + 1}`}
            />
            <InfoHeader number={"I"} text={"PERSONAL INFORMATION"} />
            <div className="row justify-between">
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"Surname"}
                  name={`Proprietor Surname${index + 1}`}
                />
              </div>
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"First Name"}
                  name={`Proprietor Firstname${index + 1}`}
                />
              </div>
            </div>
            <div className="row justify-between ">
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"Other Names"}
                  name={`Proprietor Other Names${index + 1}`}
                />
              </div>
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"Mother's Maiden Name"}
                  name={`Proprietor Mother's Maiden Name${index + 1}`}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <span>Date of Birth</span>
                <DatePicker
                  selected={formData[`Proprietor DOB${index + 1}`]}
                  onChange={(date) =>
                    updateField(`Proprietor DOB${index + 1}`, date)
                  }
                  className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholderText="Select a date"
                  name={`Proprietor DOB${index + 1}`}
                  value={formData[`Proprietor DOB${index + 1}`] || ""}
                />
              </div>
              <div className="flex gap-2">
                <span>Gender:</span>
                <Checkbox
                  text="F"
                  checked={formData[`Gender${index + 1}`] === "Female"}
                  onChange={() =>
                    handleCheckboxChange(`Gender${index + 1}`, "Female")
                  }
                />
                <Checkbox
                  text="M"
                  checked={formData[`Gender${index + 1}`] === "Male"}
                  onChange={() =>
                    handleCheckboxChange(`Gender${index + 1}`, "Male")
                  }
                />
              </div>
              <div className="flex">
                <div className="relative">
                  <Info
                    type={"text"}
                    title="Title"
                    name={`Proprietor Title${index + 1}`}
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
                name={`Proprietor Place of Birth${index + 1}`}
              />
              <div className="flex gap-2">
                <span className="font-bold flex-wrap">Marital Status</span>
                <Checkbox
                  text={"Single"}
                  checked={formData[`Marital-Status${index + 1}`] === "Single"}
                  onChange={() =>
                    handleCheckboxChange(`Marital-Status${index + 1}`, "Single")
                  }
                />
                <Checkbox
                  text={"Married"}
                  checked={formData[`Marital-Status${index + 1}`] === "Married"}
                  onChange={() =>
                    handleCheckboxChange(
                      `Marital-Status${index + 1}`,
                      "Married"
                    )
                  }
                />
              </div>
              <Info
                type={"text"}
                title={"Others"}
                name={`Proprietor Marital Status (Others)${index + 1}`}
                required={false}
              />
            </div>
            <div className="row justify-between">
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"Nationality (for non-nigerians)"}
                  name={`Proprietor's Nationality${index + 1}`}
                  required={false}
                />
              </div>
              <div className="col-5">
                <Info
                  type={"number"}
                  title={"Residence Permit Number"}
                  name={`Proprietor's Residence Permit Number${index + 1}`}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <span>Permit Issue Date</span>
                <DatePicker
                  selected={
                    formData[`Proprietor's Permit Issue Date${index + 1}`]
                  }
                  onChange={(date) =>
                    updateField(
                      `Proprietor's Permit Issue Date${index + 1}`,
                      date
                    )
                  }
                  name={`Proprietor's Permit Issue Date${index + 1}`}
                  className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholderText="Select a date"
                />
              </div>
              <div className="flex gap-2 items-center">
                <span>Permit Expiry Date</span>
                <DatePicker
                  selected={
                    formData[`Proprietor's Permit Expiry Date${index + 1}`]
                  }
                  onChange={(date) =>
                    updateField(
                      `Proprietor's Permit Expiry Date${index + 1}`,
                      date
                    )
                  }
                  name={`Proprietor's Permit Expiry Date${index + 1}`}
                  className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholderText="Select a date"
                />
              </div>
            </div>
            <DropDown
              stateName={`Proprietor State of Origin${index + 1}`}
              LGAName={`Proprietor LGA of Origin${index + 1}`}
            />
            <div className="row justify-between">
              <div className="col-5">
                <Info
                  type={"number"}
                  title={"Tax ID. No. (TIN)"}
                  name={`Proprietor's TIN${index + 1}`}
                />
              </div>
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"Religion(optional)"}
                  name={`Proprietor's Religion${index + 1}`}
                  required={false}
                />
              </div>
            </div>
            <Info
              type={"text"}
              title={"Purpose of Account"}
              name={`Proprietor's Purpose of Account${index + 1}`}
            />
            <InfoHeader number={"II."} text={"CONTACT DETAILS"} />
            <div className="row justify-between">
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"Residential Address"}
                  name={`Proprietor's Residential Address${index + 1}`}
                />
              </div>
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"Street Name"}
                  name={`Proprietor's Residence Street Name${index + 1}`}
                />
              </div>
            </div>
            <Info
              type={"text"}
              title={"Nearest Bus-Stop/Landmark"}
              name={`Proprietor's Residence Landmark/Bus-Stop${index + 1}`}
            />
            <DropDown
              stateName={`Proprietor's Residence State${index + 1}`}
              LGAName={`Proprietor's Residence LGA${index + 1}`}
            />
            <div className="row justify-between">
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"City/Town"}
                  name={`Proprietor's Residence City/Town${index + 1}`}
                />
              </div>
              <div className="flex gap-2 col-5">
                <span>Ownership Status:</span>
                <Checkbox
                  text={"Owned"}
                  checked={formData[`House${index + 1}`] === "Owned"}
                  onChange={() =>
                    handleCheckboxChange(`House${index + 1}`, "Owned")
                  }
                />
                <Checkbox
                  text={"Rented"}
                  checked={formData[`House${index + 1}`] === "Rented"}
                  onChange={() =>
                    handleCheckboxChange(`House${index + 1}`, "Rented")
                  }
                />
                <Checkbox
                  text={"Family House"}
                  checked={formData[`House${index + 1}`] === "Family House"}
                  onChange={() =>
                    handleCheckboxChange(`House&{index+1}`, "Family House")
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
                  name={`Second Proprietor's Phone Number${index + 1}`}
                />
              </div>
            </div>
            <Info
              type={"text"}
              title={"E-mail Address"}
              name={`Proprietor Email${index + 1}`}
            />
            <InfoHeader number={"III."} text={"MEANS OF IDENTIFICATION"} />
            <div className="flex justify-between items-center">
              <Checkbox
                text={"National ID Card"}
                checked={formData[`Identification${index + 1}`] === "ID"}
                onChange={() =>
                  handleCheckboxChange([`Identification${index + 1}`], "ID")
                }
              />
              <Checkbox
                text={"National Driver's License"}
                checked={formData[`Identification${index + 1}`] === "Driver"}
                onChange={() =>
                  handleCheckboxChange([`Identification${index + 1}`], "Driver")
                }
              />
              <Checkbox
                text={"International Pasport"}
                checked={formData[`Identification${index + 1}`] === "Passport"}
                onChange={() =>
                  handleCheckboxChange(
                    [`Identification${index + 1}`],
                    "Passport"
                  )
                }
              />
              <Checkbox
                text={"National Voter's Card"}
                checked={formData[`Identification${index + 1}`] === "Voter"}
                onChange={() =>
                  handleCheckboxChange([`Identification${index + 1}`], "Voter")
                }
              />
              <Info type={"text"} title={"*Other(Please specify)"} />
            </div>
            <div>
              <Info
                type={"number"}
                title={"ID Number"}
                name={`Other means of Identification${index + 1}`}
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
                  name={`Proprietor's ID Issue Date${index + 1}`}
                  className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholderText="Select a date"
                />
              </div>
              <div className="flex gap-2 items-center">
                <span>ID Expiry Date</span>
                <DatePicker
                  selected={formData[`Proprietor's ID Expiry Date${index + 1}`]}
                  onChange={(date) =>
                    updateField(`Proprietor's ID Expiry Date${index + 1}`, date)
                  }
                  name={`Proprietor's ID Expiry Date${index + 1}`}
                  className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholderText="Select a date"
                />
              </div>
            </div>
            <Info
              type={"number"}
              title={"Bank Verification Number (BVN)"}
              name={`Proprietor's BVN${index + 1}`}
            />
            <InfoHeader number={"IV."} text={"DETAILS OF NEXT OF KIN"} />
            <div className="row justify-between">
              <div className="col-4">
                <Info
                  type={"text"}
                  title={"Surname"}
                  name={`Next of Kin Surname${index + 1}`}
                />
              </div>
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"First Name"}
                  name={`Next of Kin Firstname${index + 1}`}
                />
              </div>
            </div>
            <div className="row justify-between">
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"Other Names"}
                  name={`Next of Kin Other Names${index + 1}`}
                />
              </div>
              <div className="relative col-5">
                <Info
                  type={"text"}
                  title="Title"
                  name={`Next of Kin Title${index + 1}`}
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
                  selected={formData[`next-of-kin-DOB${index + 1}`]}
                  onChange={(date) =>
                    updateField(`next-of-kin-DOB${index + 1}`, date)
                  }
                  name={`Next of Kin DOB${index + 1}`}
                  className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholderText="Select a date"
                />
              </div>
              <div className="flex gap-2">
                <Checkbox
                  text={"F"}
                  checked={
                    formData[`Next of Kin Gender${index + 1}`] === "Female"
                  }
                  onChange={() =>
                    handleCheckboxChange(
                      `Next of Kin Gender${index + 1}`,
                      "Female"
                    )
                  }
                />
                <Checkbox
                  text={"M"}
                  checked={
                    formData[`Next of Kin Gender${index + 1}`] === "Male"
                  }
                  onChange={() =>
                    handleCheckboxChange(
                      `Next of Kin Gender${index + 1}`,
                      "Male"
                    )
                  }
                />
              </div>
              <Info
                type={"text"}
                title={"Relationship"}
                name={`Next of Kin Relationship${index + 1}`}
              />
            </div>
            <div className="row justify-between">
              <div className="col-5">
                <Info
                  type={"number"}
                  title={"Phone Number (1)"}
                  name={`First Next of Kin Phone Number${index + 1}`}
                />
              </div>
              <div className="col-5">
                <Info
                  type={"number"}
                  title={"Phone Number (2)"}
                  name={`Second Next of Kin of Phone Number${index + 1}`}
                />
              </div>
            </div>
            <Info
              type={"text"}
              title={"E-mail Address"}
              name={`Next of Kin Email${index + 1}`}
            />
            <div className="row justify-between">
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"Residential Address"}
                  name={`Next of Kin Home Adress${index + 1}`}
                />
              </div>
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"Street Name"}
                  name={`Next of Kin Home Street Name${index + 1}`}
                />
              </div>
            </div>
            <Info
              type={"text"}
              title={"Nearest Bus-Stop/Landmark"}
              name={`Next of Kin Home Landmark/Bus-Stop${index + 1}`}
            />
            <Info
              type={"text"}
              title={"Place of Work"}
              name={`Next of Kin Place of Work${index + 1}`}
            />
            <div className="row justify-between">
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"City / Town"}
                  name={`Next of Kin Home City/Town${index + 1}`}
                />
              </div>
              <div className="col-5">
                <Info
                  type={"text"}
                  title={"L.G.A"}
                  name={`Next of Kin Home LGA${index + 1}`}
                />
              </div>
            </div>
            <Info
              type={"text"}
              title={"State"}
              name={`Next of Kin Home State${index + 1}`}
            />
            <PageHeader text={"8. ADDTIONAL DETAILS"} />
            <Info
              type={"text"}
              title={"Name of Parent/Affliated Company"}
              name={`Affliated/Parent Company${index + 1}`}
            />
            <Info
              type={"text"}
              title={"Country of Incorporation of Parent/Affliated Company"}
              name={`Country of Affliated/Parent Company${index + 1}`}
            />
          </div>
        ))
      )}
    </>
  );
}
