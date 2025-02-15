import React, { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface MultiSelectProps {
  options: Option[] | (() => Promise<Option[]>);
  placeholder?: string;
  isLoading?: boolean;
  value?: Option[];
  onChange?: (selected: Option[]) => void;
  disabled?: boolean;
  clearable?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder = "Select options...",
  isLoading = false,
  value = [],
  onChange,
  disabled = false,
  clearable = true,
}) => {
  const [allOptions, setAllOptions] = useState<Option[]>([]);
  const [selected, setSelected] = useState<Option[]>(value);

  useEffect(() => {
    if (typeof options === "function") {
      options()
        .then((opts) => setAllOptions(opts))
        .catch(() => {});
    } else {
      setAllOptions(options);
    }
  }, [options]);

  const handleSelect = (selectedValue: string) => {
    const selectedOption = allOptions.find(
      (option) => option.value.toString() === selectedValue,
    );
    if (!selectedOption) return;

    let updated: Option[];
    if (selected.find((item) => item.value === selectedOption.value)) {
      updated = selected.filter((item) => item.value !== selectedOption.value);
    } else {
      updated = [...selected, selectedOption];
    }

    setSelected(updated);

    if (onChange) {
      onChange(updated);
    }
  };

  const clearSelection = () => {
    setSelected([]);

    if (onChange) {
      onChange([]);
    }
  };
  return (
    <div className="w-64 space-y-2">
      <Select onValueChange={handleSelect} disabled={disabled}>
        <SelectTrigger className="w-full">
          <SelectValue
            placeholder={
              selected.length > 0
                ? selected.map((o) => o.label).join(", ")
                : placeholder
            }
          />
        </SelectTrigger>
        <SelectContent>
          {isLoading ? (
            <SelectItem value="loading" disabled>
              Loading...
            </SelectItem>
          ) : (
            allOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value.toString()}
                disabled={option.disabled}
              >
                {option.label}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
      {clearable && selected.length > 0 && (
        <Button variant="secondary" size="sm" onClick={clearSelection}>
          Clear Selection
        </Button>
      )}
    </div>
  );
};

export default MultiSelect;
