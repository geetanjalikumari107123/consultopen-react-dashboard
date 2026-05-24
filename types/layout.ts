import { Dispatch, SetStateAction } from "react";

export interface SidebarControlProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}