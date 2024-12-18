import { useQuery } from "@tanstack/react-query";
import { consolidateFile, getCSVFileList } from "./api";
import { showErrorToast, showSuccessToast } from "@/_shared/utils/toastService";
import { useMutation, useQueryClient } from "react-query";
import dayjs from "dayjs";

export const useGetCSVFileList = (
  consolidatorPathFolder: string,
  selectDate?: string
) => {
  try {
    const { data: getCSVFileLists } = useQuery({
      queryKey: ["files", { consolidatorPathFolder, selectDate }],
      queryFn: () => getCSVFileList(consolidatorPathFolder, selectDate),
    });
    console.log(getCSVFileLists);
    return getCSVFileLists;
  } catch (e) {
    console.log(e);
  }
};

export const useConsolidateFile = (
  consolidatorPathFolder: string,
  selectDate?: dayjs.Dayjs | null | string
) => {
  const queryClient = useQueryClient();
  const { mutate: consolidate } = useMutation({
    mutationFn: ({
      folderPath,
      selectDate,
    }: {
      folderPath: string;
      selectDate?: dayjs.Dayjs | null | string;
    }) => consolidateFile(folderPath, selectDate),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pathfolder"] });
      queryClient.invalidateQueries({
        queryKey: ["getFileList", consolidatorPathFolder],
      });
      showSuccessToast("Consolidate CSV File");
    },
    onError: (error) => {
      console.error("Error during file consolidation:", error);
      showErrorToast("Failed to consolidate CSV file");
    },
  });

  return consolidate;
};
