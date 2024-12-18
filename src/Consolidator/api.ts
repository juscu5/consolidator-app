import { showErrorToast } from "@/_shared/utils/toastService";
import axios from "axios";
import dayjs from "dayjs";

export const fetchPathFolder = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8081/api/consolidator/pathFolder"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const savePathFolder = async (folderPath: string) => {
  try {
    const savePathFolder = await axios.post(
      "http://localhost:8081/api/consolidator/pathFolder",
      {
        folderPath: folderPath,
      }
    );
    return savePathFolder;
  } catch (error) {
    showErrorToast("Failed to save path folder");
  }
};

export const getCSVFileList = async (
  consolidatorPathFolder: string,
  selectDate?: dayjs.Dayjs | null | string
) => {
  try {
    const response = await axios.get(
      "http://localhost:8081/api/consolidator/listCSVFile",
      {
        params: { folderPath: consolidatorPathFolder, selectDate: selectDate },
      }
    );
    return response.data.files;
  } catch (error) {
    console.error("Failed to call API:", error);
  }
};

export const consolidateFile = async (
  consolidatorPathFolder: string,
  selectDate?: dayjs.Dayjs | null | string
) => {
  try {
    console.log("selectDate", selectDate);
    const response = await axios.post(
      "http://localhost:8081/api/consolidator/combine-csv",
      {
        folderPath: consolidatorPathFolder,
        selectDate: selectDate,
      }
    );
    console.log("Consolidate File", response);
    return response;
  } catch (error) {
    console.error("Failed to call API:", error);
  }
};
