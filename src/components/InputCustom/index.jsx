import React from "react";
import { useField } from "formik";

export const InputCustom = ({ placeholder, name }) => {
  const [field] = useField(name);

  return (
    <div>
      <input
        className="px-3 py-2 placeholder-gray-400 text-gray-700 border border-gray-400 rounded w-full"
        type="text"
        placeholder={placeholder}
        {...field}
      />
    </div>
  );
};
