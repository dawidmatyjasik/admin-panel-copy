import React from "react";
import { useSubheader } from "../../_metronic/layout";

export const MyPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Moje konto");

  return <>My Page</>;
};
