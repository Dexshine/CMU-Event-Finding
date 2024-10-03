import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  RHFDatePicker,
  RHFMultiSelect,
  RHFQuill,
  RHFTextField,
} from "../../../components/hook-form";
import { tagOptions, departmentOptions } from "../../../assets/options";

const EventCreateEditPage = () => {
  const method = useForm();

  const displayForm = (
    <Stack spacing={2}>
      <RHFTextField name="title" label="ชื่อกิจกรรม" />
      <RHFQuill name="description" label="รายละเอียดกิจกรรม" />
      <RHFMultiSelect
        options={tagOptions}
        name="tags"
        chip
        label="ประเภทกิจกรรม"
      />
      <Box display="flex" alignItems="center" gap={2}>
        <RHFDatePicker name="start_date" label="วันเริ่มต้น" />
        <RHFDatePicker name="end_date" label="วันสิ้นสุด" />
      </Box>
      <RHFTextField name="location" label="สถานที่จัดกิจกรรม" />
      <RHFMultiSelect
        options={departmentOptions}
        name="faculties"
        chip
        label="คณะของผู้ร่วม"
      />
    </Stack>
  );

  const dispkayForm2 = (
    <Stack spacing={2}>
      <RHFTextField name="email" label="อีเมลติดต่อ" />
      <RHFTextField name="phone" label="เบอร์ติดต่อ" />
      <RHFTextField name="other_contact" label="ช่องทางติดต่ออื่น ๆ" />
    </Stack>
  );

  return (
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography>ข้อมูลกิจกรรม</Typography>

      <FormProvider {...method}>
        <Box display="flex" gap={2}>
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            {displayForm}
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            {dispkayForm2}
          </Box>
        </Box>

        <Stack direction="row" gap={2} justifyContent="end" alignItems="center">
          <Button variant="outlined" color="error">
            ยกเลิก
          </Button>
          <Button variant="contained" color="info">
            บันทึกฉบับร่าง
          </Button>
          <Button variant="contained" color="primary">
            ต่อไป
          </Button>
        </Stack>
      </FormProvider>
    </Paper>
  );
};

export default EventCreateEditPage;
