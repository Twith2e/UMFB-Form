export default function InfoHeader({ number, text }) {
  return (
    <div className="flex gap-2 text-[#7d3330] font-bold">
      <span>{number}.</span>
      <span>{text}</span>
    </div>
  );
}
