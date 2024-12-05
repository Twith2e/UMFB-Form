export default function InputField({ text }) {
  return (
    <div className="flex gap-2 w-full items-end">
      <span className="whitespace-nowrap font-bold text-sm">{text}</span>
      <input
        type="text"
        className="border-b border-b-black w-full outline-none"
      />
    </div>
  );
}
