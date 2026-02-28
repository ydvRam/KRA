export default function Input({
  label,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 font-medium">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}