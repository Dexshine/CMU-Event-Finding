import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFDatePicker = ({ name, label, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <DatePicker {...field} label={label} />}
    />
  );
};

export default RHFDatePicker;
