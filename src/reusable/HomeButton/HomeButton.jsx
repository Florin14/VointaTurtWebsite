import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NavLink } from "react-router-dom";
import "./HomeButton.scss";

const HomeButton = ({ name, linkTo }) => {
  return (
    <div className="button-link-section">
      <NavLink className="button-link" to={linkTo}>
        {name} <ArrowForwardIcon className="arrowright-icon" />
      </NavLink>
    </div>
  );
};

export default HomeButton;
