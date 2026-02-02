interface HoneypotFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function HoneypotField({ value, onChange }: HoneypotFieldProps) {
  return (
    <input
      type="text"
      name="hp"
      value={value}
      onChange={onChange}
      className="hidden"
      tabIndex={-1}
      autoComplete="off"
    />
  );
}