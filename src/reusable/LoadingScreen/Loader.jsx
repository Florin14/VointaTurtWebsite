import "./Loader.scss";
import { CircularProgress } from "@mui/material";

export const Loader = ({ fullscreen = false }) => {
  return (
    <div className={`loader-container ${fullscreen ? "fullscreen" : ""}`}>
      <CircularProgress />
    </div>
  );
};
