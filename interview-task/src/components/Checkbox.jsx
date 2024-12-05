export default function Checkbox({ text, checked, onChange }) {
  return (
    <div className="flex gap-2">
      <span>{text}</span>
      <input
        className="rounded-none w-6 h-6"
        id="check"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}
