import React from "react";
import DangerButton from "../Button/DangerButton";

export default function DangerButtonRow() {
  return (
    <div className="d-flex gap-5 justify-content-center mx-auto">
      <DangerButton button_text="Reset"/>
      <DangerButton button_text="Disable"/>
      <DangerButton button_text="Delete"/>
    </div>
  );
}
