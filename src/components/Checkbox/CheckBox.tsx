import React, { FC } from "react";
import { ReactComponent as Check } from "../../assets/checkbox.svg";

interface ICheckBox {
  isCompleted?: boolean;
  handleCheck: () => void;
}

export const CheckBox: FC<ICheckBox> = ({ isCompleted, handleCheck }) => {
  return (
    <div className="checkbox" onClick={handleCheck}>
      {isCompleted && <Check />}
    </div>
  );
};
