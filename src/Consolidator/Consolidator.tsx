import { RootStyle } from "@/_shared/components/Style/RootStyle";
import { useEffect, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import DateSelector from "./DateSelector";
import ConsolidatorList from "./ConsolidatorList";
import PathFolder from "./PathFolder";
import { useGetCSVFileList } from "./useConsolidator";

export interface CsvFile {
  name: string;
  path: string;
}

const Consolidator = () => {
  const [consolidatorPathFolder, setConsolidatorPathFolder] = useState<
    string | undefined
  >("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isFirstLoad, setFirstLoad] = useState<boolean>(true);
  const csvFileList = useGetCSVFileList(consolidatorPathFolder!, selectedDate);

  const setLocalPathFolder = () => {
    localStorage.setItem("path", consolidatorPathFolder || "");
  };
  const getLocalPathFolder = () => {
    setConsolidatorPathFolder(localStorage.getItem("path") || "");
  };

  useEffect(() => {
    getLocalPathFolder();
    setFirstLoad(true);
  }, []);

  return (
    <RootStyle>
      <Stack spacing={2}>
        <Paper
          sx={{
            background: "#f8f9fa",
            borderRadius: 5,
            p: 3,
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            CONSOLIDATOR APPLICATION FOR POS
          </Typography>
        </Paper>
        <Paper
          sx={{
            background: "#f8f9fa",
            borderRadius: 5,
            p: 6,
          }}
        >
          <Box height={600} width={1600}>
            <Stack sx={{ width: "100%" }} spacing={4}>
              <Stack direction="row" spacing={2}>
                <PathFolder
                  setConsolidatorPathFolder={setConsolidatorPathFolder}
                  consolidatorPathFolder={consolidatorPathFolder!}
                />
                <DateSelector
                  setSelectedDate={(date?: string) =>
                    setSelectedDate(date || "")
                  }
                  setPathFolder={setLocalPathFolder}
                  consolidatorPathFolder={consolidatorPathFolder!}
                  setFirstLoad={(isFirstLoad: boolean) =>
                    setFirstLoad(isFirstLoad)
                  }
                />
              </Stack>
              <ConsolidatorList
                selectedDate={selectedDate}
                csvFileList={csvFileList}
                consolidatorPathFolder={consolidatorPathFolder}
                isFirstLoad={isFirstLoad}
              />
            </Stack>
          </Box>
        </Paper>
        <Box textAlign="right" color="gray">
          <Typography>Version: 1.2.0</Typography>
        </Box>
      </Stack>
    </RootStyle>
  );
};

export default Consolidator;
