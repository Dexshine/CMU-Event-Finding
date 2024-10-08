import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
// @mui
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

// ----------------------------------------------------------------------

export default function RHFRadioGroup({
  row,
  name,
  label,
  options,
  spacing,
  helperText,
  disabled,
  ...other
}) {
  const { control } = useFormContext();

  const labelledby = label ? `${name}-${label}` : "";

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormControl component="fieldset">
            {label && (
              <FormLabel
                component="legend"
                id={labelledby}
                sx={{ typography: "body2" }}
              >
                {label}
              </FormLabel>
            )}

            <RadioGroup
              {...field}
              value={field.value || ""}
              aria-labelledby={labelledby}
              row={row}
              {...other}
            >
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  disabled={disabled}
                  label={option.label}
                  sx={{
                    "&:not(:last-of-type)": {
                      mb: spacing || 0,
                    },
                    ...(row && {
                      mr: 0,
                      "&:not(:last-of-type)": {
                        mr: spacing || 2,
                      },
                    }),
                  }}
                />
              ))}
            </RadioGroup>

            {(!!error || helperText) && (
              <FormHelperText error={!!error} sx={{ mx: 0 }}>
                {error ? error?.message : helperText}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
    />
  );
}

RHFRadioGroup.propTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  row: PropTypes.bool,
  spacing: PropTypes.number,
};
