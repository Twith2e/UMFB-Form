import Signature from "./Signature";
import InputField from "./InputField";

function SecondPage() {
  return (
    <div className="font-semibold font-arial">
      <div className="bg-[#7d3330] text-white text-center text-3xl mb-5">
        <span className="md:text-[30px] text-[12px]">
          MANDATE FOR SOLE PROPRIETORSHIP
        </span>
      </div>
      <div>
        <span>
          TO UNILAG MICROFINANCE BANK IT IS HEREBY RESOLVED AS FOLLOWS
        </span>
      </div>
      <div className="flex gap-2">
        <InputField text={"I"} name={"Mandate Sole Proprietor Name"} />
      </div>
      <div className="flex gap-2 mt-3 flex-wrap">
        <InputField
          text={"Being the sole proprietor of the firm"}
          name={"Mandate Sole Proprietor Firm"}
        />
        <span>which has been duly registered under the</span>
      </div>
      <div className="mt-3">
        <span>
          Registration of Business Names act hereby request and authorise you to
          open an account in the name of the
        </span>
      </div>
      <div>
        <span>above firm and honour the following signatures:</span>
      </div>
      <div className="d-flex flex-column flex-lg-row gap-3 mt-3">
        <Signature
          text="signature"
          name={"First Business Reg Signature Date"}
          imgName={"First Business Reg Signature"}
          label="Upload Signature"
        />
        <Signature
          text="signature"
          name={"Second Business Reg Signature Date"}
          imgName={"Second Business Reg Signature"}
          label="Upload Signature"
        />
      </div>
      <div className="mt-3">
        <span>
          For all purposes on behalf of the said firm whether in credit or debit
          as on behalf of the said firm
        </span>
      </div>
      <div>
        <span>
          and in consideration of you doing so I agree, convenant and declare as
          follows:
        </span>
      </div>
      <div>
        <p>
          I hereby affirm that I am the sole proprietor of the business now
          conducted and/or to be the conducted under the said style and I do
          hereby acknowledge that I am and shall continue to be personally an
          fully responsible for all business consucted by me or anyone else duly
          authorised by me. To the same extent as if the said business has been
          operated and conducted under my own name are hereby authorised to
          debit such account whether it be in credit or overdrawn with all
          cheques or order purporting to be drawn thereon. Provided they are
          signed by me or my authorised attorney as indicated on your specimen
          signature above.
        </p>
        <p>
          I declare myself liable on all such cheques or the orders which may be
          drawn on the said account and agree to comply with and to be bound by
          the Bank's rules of the conduct of current accounts.
        </p>
        <p>
          My attention has been drawn to the necessity of safeguarding my cheque
          book so that unauthorised persons are unable to gain access to it and
          to the fact that neglect of this caution may be a ground for any
          consequential loss being charge to my account.
        </p>
        <p>
          I agree that in addition to any general lien or similar right to which
          you as a banker may be entitled by law, you may at anytime and without
          notice to me combine or consolidate all or any of my accounts with and
          liablities to you and set off or transfer any sums standing to due
          credit of anyone or more of such accounts or any other credit, be it
          cash, cheques, valuables, deposits securities, negotiable instruments
          or other belonging to me in or towards satisfaction of any of my
          liabilities to you any other account or in any other respect, whether
          such liablities be actual or contingent, primary or collateral or
          several or joint.
        </p>
        <p>
          I agree that the Bank will accept no liability whatsover for funds
          handed to any member of its staff outside banking hours or outside the
          Bank's premises.
        </p>
        <p>
          I understand that any sums standing to the debit of the current
          account shall be liable to interest charges at rates fixed by the Bank
          .
        </p>
      </div>
      <div className="flex gap-3">
        <InputField
          text={"Dated this"}
          name={"Mandate Sole Proprietor Signature Date"}
        />
        <InputField
          text={"Day of"}
          name={"Mandate Sole Proprietor Signature Day"}
        />
      </div>
      <div className="row flex items-center mt-3">
        <div className="col-8">
          <InputField
            text="Full name"
            name={"Mandate Sole Proprietor Full Name"}
          />
        </div>
        <div className="col-4">
          <Signature
            imgName={"Mandate Sole Priopertor Signature"}
            isDate={false}
            label="Upload Signature"
          />
        </div>
      </div>
      <div>
        <InputField text="Address" name={"Mandate Sole Proprietor Address"} />
      </div>
      <div className="row d-flex mt-5">
        <div className="d-flex flex-column col-8 md:items-center gap-2">
          <span className="whitespace-nowrap font-bold text-sm">
            Witnessed by:
          </span>
          <InputField
            text={"Full name"}
            name={"Mandate Sole Proprietor Witness Name"}
          />
        </div>
        <div className="col-4">
          <Signature
            imgName={"Mandate Sole Priopertor Witness Signature"}
            isDate={false}
            label="Upload Signature"
          />
        </div>
      </div>
      <div>
        <InputField
          text={"Occupation"}
          name={"Mandate Sole Proprietor Witness Occupation"}
        />
      </div>
      <div className="mt-3">
        <InputField
          text={"Address"}
          name={"Mandate Sole Proprietor Witness Address"}
        />
      </div>
    </div>
  );
}

export default SecondPage;
