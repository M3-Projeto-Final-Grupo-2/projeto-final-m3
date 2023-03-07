import { useContext } from "react";
import { ProfileContext } from "../../../providers/profileContext";

export const ModalProfilePage = () => {
  const { cities, setModal } = useContext(ProfileContext);

  return (
    <div>
      <span
        onClick={() => {
          setModal(false);
        }}
      >
        X
      </span>
    </div>
  );
};
