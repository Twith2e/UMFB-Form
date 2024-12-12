import { useMemo } from "react";

export default function Required({ requiredFields = [], formCount = [] }) {
  // Static required fields with a default fallback
  const defaultRequiredFields = [
    "Business Name",
    "Business Registration Number",
    "Business Registration Date",
    "Business Telephone Number1",
    "Business Telephone Number2",
    "Nature of Business",
    "Business Sector",
    "Business Email Address",
    "Business Monthly Turnover",
    "Business Annual Turnover",
    "Business Employee Size",
    "Business Proposed Initial Deposit",
    "Business Office Address",
    "Business Mailing Email Address",
    "Business Bank1",
    "Business Bank2",
    "Business Bank3",
    "Business Account Name1",
    "Business Account Name2",
    "Business Account Name3",
    "Business Account Number1",
    "Business Account Number2",
    "Business Account Number3",
    "Proprietor-name",
    "Proprietor-firm",
    "m-s-1",
    "m-s-2",
    "proprietor-signature-date",
    "proprietor-signature-day",
    "Proprietor Full Name",
    "Proprietor-signature",
    "Proprietor-address",
    "Proprietor-witness-name",
    "Proprietor-witness-signature",
    "Proprietor-witness-occupation",
    "Proprietor-witness-address",
  ];

  // Merge default fields with props
  const staticFields = useMemo(
    () => [...defaultRequiredFields, ...requiredFields],
    [requiredFields]
  );

  // Memoize dynamic fields based on formCount
  const dynamicFields = useMemo(() => {
    return formCount.flatMap((count) => [
      `Identification${count.id}`,
      `House${count.id}`,
      `Gender${count.id}`,
      `Marital-Status${count.id}`,
      `Proprietor Surname${count.id}`,
      `Proprietor Firstname${count.id}`,
      `Proprietor Other Names${count.id}`,
      `Proprietor Mother's Maiden Name${count.id}`,
      `Proprietor DOB${count.id}`,
      `Proprietor Title${count.id}`,
      `Proprietor Place of Birth${count.id}`,
      `Proprietor's Residence Permit Number${count.id}`,
      `Proprietor's Permit Issue Date${count.id}`,
      `Proprietor's Permit Expiry Date${count.id}`,
      `Proprietor's TIN${count.id}`,
      `Proprietor State of Origin${count.id}`,
      `Proprietor LGA of Origin${count.id}`,
      `Proprietor's Purpose of Account${count.id}`,
      `Proprietor's Residential Address${count.id}`,
      `Proprietor's Residence Street Name${count.id}`,
      `Proprietor's Residence Landmark/Bus-Stop${count.id}`,
      `Proprietor's Residence City/Town${count.id}`,
      `Proprietor's Residence LGA${count.id}`,
      `Proprietor's Residence State${count.id}`,
      `First Proprietor's Phone Number${count.id}`,
      `Second Proprietor's Phone Number${count.id}`,
      `Proprietor's Email${count.id}`,
      `Other means of Identification${count.id}`,
      `Proprietor's ID Issue Date${count.id}`,
      `Proprietor's ID Expiry Date${count.id}`,
      `Proprietor's BVN${count.id}`,
      `Next of Kin Surname${count.id}`,
      `Next of Kin Gender${count.id}`,
      `Next of Kin Firstname${count.id}`,
      `Next of Kin Other Names${count.id}`,
      `Next of Kin Title${count.id}`,
      `Next of Kin DOB${count.id}`,
      `Next of Kin Relationship${count.id}`,
      `First Next of Kin Phone Number${count.id}`,
      `Second Next of Kin of Phone Number${count.id}`,
      `Next of Kin Email${count.id}`,
      `Next of Kin Home Street Name${count.id}`,
      `Next of Kin Home Address${count.id}`,
      `Next of Kin Home Landmark/Bus-Stop${count.id}`,
      `Next of Kin Place of Work${count.id}`,
      `Next of Kin Home City/Town${count.id}`,
      `Next of Kin Home LGA${count.id}`,
      `Next of Kin Home State${count.id}`,
      `Affiliated/Parent Company${count.id}`,
      `Country of Affiliated/Parent Company${count.id}`,
    ]);
  }, [formCount]);

  // Combine static and dynamic fields
  const allRequiredFields = useMemo(() => {
    return [...staticFields, ...dynamicFields];
  }, [staticFields, dynamicFields]);

  return { allRequiredFields };
}
