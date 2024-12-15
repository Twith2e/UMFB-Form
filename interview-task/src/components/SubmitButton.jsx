import { useForm } from "./FormContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import Required from "./RequiredFields";

export default function SubmitButton() {
  const { formData, imageData, validateForm, formCount } = useForm();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const unrequiredFields = ["proprietor-others", "proprietor-religion"];

  const handleSubmit = async () => {
    const isFormValid = validateForm(formData, unrequiredFields);
    console.log("Is form valid:", isFormValid);

    console.log(formData);

    if (!isFormValid) {
      toast.error("Fill all inputs");
      return;
    }

    const staticOrder = [
      "Business Name",
      "Business Registration Number",
      "Business Registration Date",
      "Business Office Address",
      "Business Mailing Email Address",
      "Business Telephone Number1",
      "Business Telephone Number2",
      "Nature of Business",
      "Business Sector",
      "Business Email Address",
      "Business Monthly Turnover",
      "Business Annual Turnover",
      "Business Employee Size",
      "Business Proposed Initial Deposit",
      "Business Bank1",
      "Business Bank2",
      "Business Bank3",
      "Business Account Name1",
      "Business Account Name2",
      "Business Account Name3",
      "Business Account Number1",
      "Business Account Number2",
      "Business Account Number3",
      "First Business Signature Date",
      "First Business Signature",
      "Second Business Signature Date",
      "Second Business Signature",
      "Third Business Signature Date",
      "Third Business Signature",
      "Mandate Sole Proprietor Name",
      "Mandate Sole Proprietor Firm",
      "First Business Reg Signature Date",
      "Second Business Reg Signature Date",
      "First Business Reg Signature",
      "Second Business Reg Signature",
      "Mandate Sole Proprietor Signature Date",
      "Mandate Sole Proprietor Signature Day",
      "Mandate Sole Proprietor Full Name",
      "Mandate Sole Priopertor Signature",
      "Mandate Sole Proprietor Address",
      "Mandate Sole Proprietor Witness Name",
      "Mandate Sole Priopertor Witness Signature",
      "Mandate Sole Proprietor Witness Occupation",
      "Mandate Sole Proprietor Witness Address",
    ];

    const dynamicOrder = formCount.flatMap((count) => {
      return [
        `Proprietor Surname${count.id}`,
        `Proprietor Firstname${count.id}`,
        `Proprietor Other Names${count.id}`,
        `Proprietor Mother's Maiden Name${count.id}`,
        `Proprietor DOB${count.id}`,
        `Proprietor's Gender${count.id}`,
        `Proprietor Title${count.id}`,
        `Proprietor Place of Birth${count.id}`,
        `Proprietor's Marital Status${count.id}`,
        `Proprietor's Residence Permit Number${count.id}`,
        `Proprietor's Permit Issue Date${count.id}`,
        `Proprietor's Permit Expiry Date${count.id}`,
        `Proprietor State of Origin${count.id}`,
        `Proprietor LGA of Origin${count.id}`,
        `Proprietor's TIN${count.id}`,
        `Proprietor's Purpose of Account${count.id}`,
        `Proprietor's Residential Address${count.id}`,
        `Proprietor's Residence Street Name${count.id}`,
        `Proprietor's Residence Landmark/Bus-Stop${count.id}`,
        `Proprietor's Residence City/Town${count.id}`,
        `Proprietor's Residence LGA${count.id}`,
        `Proprietor's Residence State${count.id}`,
        `House Ownership Status${count.id}`,
        `First Proprietor's Phone Number${count.id}`,
        `Second Proprietor's Phone Number${count.id}`,
        `Proprietor's Email${count.id}`,
        `Identification${count.id}`,
        `Other means of Identification${count.id}`,
        `Proprietor's ID Issue Date${count.id}`,
        `Proprietor's ID Expiry Date${count.id}`,
        `Proprietor's BVN${count.id}`,
        `Next of Kin Surname${count.id}`,
        `Next of Kin Firstname${count.id}`,
        `Next of Kin Other Names${count.id}`,
        `Next of Kin Title${count.id}`,
        `Next of Kin DOB${count.id}`,
        `Next of Kin Gender${count.id}`,
        `Next of Kin Relationship${count.id}`,
        `First Next of Kin Phone Number${count.id}`,
        `Second Next of Kin of Phone Number${count.id}`,
        `Next of Kin Email${count.id}`,
        `Next of Kin Home Address${count.id}`,
        `Next of Kin Home Street Name${count.id}`,
        `Next of Kin Home Landmark/Bus-Stop${count.id}`,
        `Next of Kin Place of Work${count.id}`,
        `Next of Kin Home City/Town${count.id}`,
        `Next of Kin Home LGA${count.id}`,
        `Next of Kin Home State${count.id}`,
        `Affliated/Parent Company${count.id}`,
        `Country of Affliated/Parent Company${count.id}`,
      ];
    });

    const specimenStaticOrder = [
      "Specimen Account Number",
      "Specimen Account Name",
      "Specimen Home Address",
      "Specimen Phone Number",
    ];

    const specimenDynamicOrder = formCount.flatMap((index) => {
      return [
        `Specimen Title${index.id}`,
        `Specimen Name${index.id}`,
        `Specimen Designation${index.id}`,
        `Specimen BVN Number${index.id}`,
        `Specimen Signature${index.id}`,
        `Specimen Passport Photograph${index.id}`,
        `Specimen Signature Class${index.id}`,
      ];
    });
    const order = [
      ...staticOrder,
      ...dynamicOrder,
      ...specimenStaticOrder,
      ...specimenDynamicOrder,
    ];

    const sortedOrder = order.reduce((acc, fieldName) => {
      if (formData[fieldName] !== undefined) {
        acc[fieldName] = formData[fieldName];
      }
      return acc;
    }, {});

    try {
      setIsPending(true);
      const response = await axios.post(
        "http://localhost:5000/email/send-email",
        {
          formData: sortedOrder,
          imageData,
        }
      );

      if (response.status === 200) {
        toast.success("Form Submitted");
      } else {
        setError("Error Submitting");
        toast.error(error);
        console.error("Submission error:", errorText);
      }
    } catch (error) {
      toast.error("An error occurred while submitting");
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <button
        onClick={handleSubmit}
        className="bg-[#7d3330] text-white p-2 rounded"
        disabled={isPending ? true : false}
      >
        {isPending ? "Loading" : "Submit"}
      </button>
      <ToastContainer />
    </>
  );
}
