import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "./FormContext";

export default function Table3() {
  const { formData, updateField } = useForm();

  const handleChange = (event) => {
    const name = event.target.name;
    updateField(name, event.target.value);
  };

  return (
    <table>
      <thead className="bg-[#7d3330] text-white text-2xl border-x border-x-black">
        <tr>
          <th className="text-center">S/N</th>
          <th className="text-center">DOCUMENTS OBTAINED</th>
          <th className="text-center">REQUEST DATE</th>
          <th className="text-center">DATE RECEIVED/COMPLETED</th>
          <th className="text-center">N/A</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-black border">
          <td className="border-r border-black text-center">1</td>
          <td className="border-r border-black">
            Collection of A/C Opening Forms
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none w-full"
              selected={formData["Collection Opening Form Request Date"] || ""}
              onChange={(date) =>
                updateField("Collection Opening Form Request Date", date)
              }
              name="Collection Opening Form Request Date"
              style={{ width: "100%" }}
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none w-full"
              selected={
                formData["Collection Opening Form Completed Date"] || ""
              }
              onChange={(date) =>
                updateField("Collection Opening Form Completed Date", date)
              }
              name="Collection Opening Form Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">2</td>
          <td className="border-r border-black">
            Submission of A/C Opening Forms
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Submission Opening Form Request Date"] || ""}
              onChange={(date) =>
                updateField("Submission Opening Form Request Date", date)
              }
              name="Submission Opening Form Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={
                formData["Submission Opening Form Completed Date"] || ""
              }
              onChange={(date) =>
                updateField("Submission Opening Form Completed Date", date)
              }
              name="Submission Opening Form Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">3</td>
          <td className="border-r border-black">Identification</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Identification Request Date"] || ""}
              onChange={(date) =>
                updateField("Identification Request Date", date)
              }
              name="Identification Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Identification Completed Date"] || ""}
              onChange={(date) =>
                updateField("Identification Completed Date", date)
              }
              name="Identification Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black"></td>
          <td className="border-r border-black">(A) International Passport</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["International Passport Request Date"] || ""}
              onChange={(date) =>
                updateField("International Passport Request Date", date)
              }
              name="International Passport Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["International Passport Completed Date"] || ""}
              onChange={(date) =>
                updateField("International Passport Completed Date", date)
              }
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black"></td>
          <td className="border-r border-black">(B) Driver's License</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Driver's License Request Date"] || ""}
              onChange={(date) =>
                updateField("Driver's License Request Date", date)
              }
              name="Driver's License Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Driver's License Completed Date"] || ""}
              onChange={(date) =>
                updateField("Driver's License Completed Date", date)
              }
              name="Driver's License Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">4</td>
          <td className="border-r border-black">Passport Photograph</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Passport Photograph Request Date"] || ""}
              onChange={(date) =>
                updateField("Passport Photograph Request Date", date)
              }
              name="Passport Photograph Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Passport Photograph Completed Date"] || ""}
              onChange={(date) =>
                updateField("Passport Photograph Completed Date", date)
              }
              name="Passport Photograph Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">5</td>
          <td className="border-r border-black">Verification of Signature</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={
                formData["Verification of Signature Request Date"] || ""
              }
              onChange={(date) =>
                updateField("Verification of Signature Request Date", date)
              }
              name="Verification of Signature Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={
                formData["Verification of Signature Completed Date"] || ""
              }
              onChange={(date) =>
                updateField("Verification of Signature Completed Date", date)
              }
              name="Verification of Signature Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">6</td>
          <td className="border-r border-black">Signature Card</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Signature Card Request Date"] || ""}
              onChange={(date) =>
                updateField("Signature Card Request Date", date)
              }
              name="Signature Card Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Signature Card Completed Date"] || ""}
              onChange={(date) =>
                updateField("Signature Card Completed Date", date)
              }
              name="Signature Card Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">7</td>
          <td className="border-r border-black">Mandate</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Mandate Request Date"] || ""}
              onChange={(date) => updateField("Mandate Request Date", date)}
              name="Mandate Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Mandate Completed Date"] || ""}
              onChange={(date) => updateField("Mandate Completed Date", date)}
              name="Mandate Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">8a</td>
          <td className="border-r border-black">Internal Reference Form</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Internal Reference Form Request Date"] || ""}
              onChange={(date) =>
                updateField("Internal Reference Form Request Date", date)
              }
              name="Internal Reference Form Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={
                formData["Internal Reference Form Completed Date"] || ""
              }
              onChange={(date) =>
                updateField("Internal Reference Form Completed Date", date)
              }
              name="Internal Reference Form Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">8b</td>
          <td className="border-r border-black">External Reference Form</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["External Reference Form Request Date"] || ""}
              onChange={(date) =>
                updateField("External Reference Form Request Date", date)
              }
              name="External Reference Form Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={
                formData["External Reference Form Completed Date"] || ""
              }
              onChange={(date) =>
                updateField("External Reference Form Completed Date", date)
              }
              name="External Reference Form Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">8c</td>
          <td className="border-r border-black">Direct Reference Form</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Direct Reference Form Request Date"] || ""}
              onChange={(date) =>
                updateField("Direct Reference Form Request Date", date)
              }
              name="Direct Reference Form Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Direct Reference Form Completed Date"] || ""}
              onChange={(date) =>
                updateField("Direct Reference Form Completed Date", date)
              }
              name="Direct Reference Form Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">9</td>
          <td className="border-r border-black">
            Appliction for Registration (Copy of Sighted Original)
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={
                formData["Application for Registration Request Date"] || ""
              }
              onChange={(date) =>
                updateField("Application for Registration Request Date", date)
              }
              name="Application for Registration Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={
                formData["Application for Registration Completed Date"] || ""
              }
              onChange={(date) =>
                updateField("Application for Registration Completed Date", date)
              }
              name="Application for Registration Completed Date"
            />
          </td>
          <td className="border-r border-black"></td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">10</td>
          <td className="border-r border-black">
            Certificate of Registration (Copy of Sighted Original)
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={
                formData["Certificate of Registration Request Date"] || ""
              }
              onChange={(date) =>
                updateField("Certificate of Registration Request Date", date)
              }
              name="Certificate of Registration Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={
                formData["Certificate of Registration Completed Date"] || ""
              }
              onChange={(date) =>
                updateField("Certificate of Registration Completed Date", date)
              }
              name="Certificate of Registration Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">11</td>
          <td className="border-r border-black">Search Report</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Search Report Request Date"] || ""}
              onChange={(date) =>
                updateField("Search Report Request Date", date)
              }
              name="Search Report Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Search Report Completed Date"] || ""}
              onChange={(date) =>
                updateField("Search Report Completed Date", date)
              }
              name="Search Report Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">12</td>
          <td className="border-r border-black">Waived Document</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Waived Document Request Date"] || ""}
              onChange={(date) =>
                updateField("Waived Document Request Date", date)
              }
              name="Waived Document Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Waived Document Completed Date"] || ""}
              onChange={(date) =>
                updateField("Waived Document Completed Date", date)
              }
              name="Waived Document Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black text-center">13</td>
          <td className="border-r border-black">What Document is Deferred</td>
          <td className="border-r border-black">
            <input
              name="Deferred Document"
              value={formData["Deferred Document"] || ""}
              onChange={handleChange}
              type="text"
              placeholder="Kindly Name the Deferred Doc."
              className="border-none outline-none placeholder:text-xs"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none w-full" />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
        <tr className="border-black border">
          <td className="border-r border-black"></td>
          <td className="border-r border-black">Deferral Period</td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Deferral Period Request Date"] || ""}
              onChange={(date) =>
                updateField("Deferral Period Request Date", date)
              }
              name="Deferral Period Request Date"
            />
          </td>
          <td className="border-r border-black">
            <DatePicker
              className="outline-none border-none"
              selected={formData["Deferral Period Completed Date"] || ""}
              onChange={(date) =>
                updateField("Deferral Period Completed Date", date)
              }
              name="Deferral Period Completed Date"
            />
          </td>
          <td className="border-r border-black">
            <input type="text" className="border-none outline-none" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
