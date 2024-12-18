import { TextField } from "@mui/material";

interface IPathFolderProps {
  setConsolidatorPathFolder: (value: string) => void;
  consolidatorPathFolder: string;
}

const PathFolder = ({
  setConsolidatorPathFolder,
  consolidatorPathFolder,
}: IPathFolderProps) => {
  return (
    <TextField
      fullWidth
      label="Path Folder"
      value={consolidatorPathFolder}
      onChange={(e) => setConsolidatorPathFolder(e.target.value)}
      size="small"
    />
  );
};

export default PathFolder;
