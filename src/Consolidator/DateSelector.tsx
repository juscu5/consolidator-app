import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import React, { useState } from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useGetCSVFileList } from "./useConsolidator";
import dayjs, { Dayjs } from "dayjs";

interface ISelectedProps {
  setSelectedDate: (date?: string) => void;
  setPathFolder: () => void;
  consolidatorPathFolder: string;
  setFirstLoad: (isFirstLoad: boolean) => void;
}

const DateSelector = ({
  setSelectedDate,
  setPathFolder,
  consolidatorPathFolder,
  setFirstLoad,
}: ISelectedProps) => {
  const [csvFiles, setCsvFiles] = useState<any[]>([]);
  const fetchedFiles = useGetCSVFileList(consolidatorPathFolder);

  const handleSubmit = () => {
    setCsvFiles(fetchedFiles);
    setFirstLoad(false);
    setPathFolder();
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack direction="row" spacing={2}>
          <DatePicker
            slotProps={{
              textField: {
                size: "small",
                fullWidth: true,
                label: "Date",
              },
            }}
            onChange={(newValue) => {
              const date = dayjs(newValue).format("MMDDYY");
              console.log("savalue", date);
              setSelectedDate(date || "");
              handleSubmit();
            }}
            sx={{ width: 320 }}
          />
        </Stack>
      </LocalizationProvider>
    </>
  );
};

export default DateSelector;
