import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  rows?: number;
}

export default function FormField({
  id,
  name,
  label,
  type,
  placeholder,
  required = false,
  value,
  onChange,
  rows
}: FormFieldProps) {
  const inputClass = "border-border/50 focus:border-primary focus:ring-primary/20";

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {type === "textarea" ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
          value={value}
          onChange={onChange}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      )}
    </div>
  );
}