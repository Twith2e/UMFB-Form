export default function AcctNumber() {
  return (
    <div className="flex flex-col items-center">
      <table className="border-separate">
        <tbody>
          <tr className="flex">
            <td>
              <input
                type="text"
                className="border border-black outline-none h-8 w-8 text-center"
                maxLength={1}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black outline-none h-8 w-8 text-center"
                maxLength={1}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black outline-none h-8 w-8 text-center"
                maxLength={1}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black outline-none h-8 w-8 text-center"
                maxLength={1}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black outline-none h-8 w-8 text-center"
                maxLength={1}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black outline-none h-8 w-8 text-center"
                maxLength={1}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black outline-none h-8 w-8 text-center"
                maxLength={1}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black outline-none h-8 w-8 text-center"
                maxLength={1}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black outline-none h-8 w-8 text-center"
                maxLength={1}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </td>
            <td>
              <input
                type="text"
                className="border border-black outline-none h-8 w-8 text-center"
                maxLength={1}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <span>Account No.</span>
    </div>
  );
}
