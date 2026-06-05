import { useState } from "react";
import RemoveIcon from "../../../shared/components/icons/RemoveIcon";
import AddIcon from "../../../shared/components/icons/AddIcon";

export default function QuantityStepper({ value, onChange }) {
  const min = 1;
  const max = 15;

  function increment() {
    onChange(Math.min(value + 1, max));
  }

  function decrement() {
    onChange(Math.max(value - 1, min));
  }

  function handleOnChange(e) {
    const value = Number(e.target.value);

    if (Number.isNaN(value)) {
      return;
    }

    onChange(value);
  }

  function handleOnBlur() {
    if (value > max) {
      onChange(max);
    }

    if (value < min) {
      onChange(min);
    }
  }

  return (
    <div className="flex items-center gap-4">
      <button
        className="p-1.5 rounded text-green-200 border-green-200 border"
        onClick={decrement}
      >
        <RemoveIcon />
      </button>

      <input
        className="max-w-10 p-1 border border-green-200 rounded outline-0"
        type="text"
        name="quantity"
        id="quantity"
        value={value}
        onChange={(e) => {
          handleOnChange(e);
        }}
        onBlur={handleOnBlur}
      />
      <button
        className="p-1.5 rounded text-green-200 border-green-200 border"
        onClick={increment}
      >
        <AddIcon />
      </button>
    </div>
  );
}
