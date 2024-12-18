import { Button, Divider, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useConsolidateFile } from "./useConsolidator";
import { showErrorToast } from "@/_shared/utils/toastService";
import { useEffect, useState } from "react";

const ConsolidatorList = ({
  selectedDate,
  csvFileList,
  consolidatorPathFolder,
  isFirstLoad,
}: any) => {
  const consolidate = useConsolidateFile(consolidatorPathFolder, selectedDate);

  const handleConsolidate = () => {
    if (!consolidatorPathFolder || !selectedDate) {
      showErrorToast("Both folder path and select date are required.");
      return;
    }

    alert(`You can locate the folder path at ${consolidatorPathFolder}`);

    consolidate({
      folderPath: consolidatorPathFolder,
      selectDate: selectedDate,
    });
  };

  return (
    <>
      <Stack direction="row" spacing={3}>
        <Box
          sx={{
            padding: "1rem",
            alignItems: "center",
            background: "#e7ecef",
            height: 430,
            width: "100%",
          }}
        >
          <Typography variant="h5" fontWeight={600} mb={1}>
            Daily:
          </Typography>
          <Divider />
          <Box mt={1.5} sx={{ overflowY: "auto" }}>
            {isFirstLoad ? (
              <Typography variant="body2">
                Please select Path Folder and select Date.
              </Typography>
            ) : !csvFileList?.eodFiles || csvFileList.eodFiles.length === 0 ? (
              <Typography variant="body2">
                No mallfiles on selected date on a specified path folder
              </Typography>
            ) : (
              csvFileList?.eodFiles?.map((csv: any) => (
                <Box key={csv.path}>
                  <Typography key={csv.path} variant="body2">
                    {csv.name}
                  </Typography>
                </Box>
              ))
            )}
          </Box>
        </Box>
        <Box
          sx={{
            padding: "1rem",
            alignItems: "center",
            background: "#e7ecef",
            height: 430,
            width: "100%",
          }}
        >
          <Typography variant="h5" fontWeight={600} mb={1}>
            Hourly:
          </Typography>
          <Divider />
          <Box mt={1.5} sx={{ overflowY: "auto" }}>
            {isFirstLoad ? (
              <Typography variant="body2">
                Please select Path Folder and select Date.
              </Typography>
            ) : !csvFileList?.mallFiles ||
              csvFileList.mallFiles.length === 0 ? (
              <Typography variant="body2">
                No mallfiles on selected date on a specified path folder
              </Typography>
            ) : (
              csvFileList?.mallFiles?.map((csv: any) => (
                <Box key={csv.path}>
                  <Typography key={csv.path} variant="body2">
                    {csv.name}
                  </Typography>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Stack>
      <Stack spacing={3} alignItems="center">
        <Button
          sx={{ width: 500 }}
          variant="contained"
          onClick={handleConsolidate}
        >
          Consolidate
        </Button>
      </Stack>
    </>
  );
};

export default ConsolidatorList;
