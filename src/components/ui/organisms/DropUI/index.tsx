"use client";

import { Mobile } from "./Mobile";
import { Desktop } from "./Desktop";
import { FC, PropsWithChildren } from "react";
import { DropUIPropsContext } from "./context/DropUIPropsContext";
import { DropUIProps } from "./type";

const Root: FC<PropsWithChildren<DropUIProps>> = ({
  maxFileSize,
  acceptedFileTypes,
  onFilesAccept,
  onFilesReject,
  children,
}) => {
  return (
    <DropUIPropsContext.Provider
      value={{ maxFileSize, acceptedFileTypes, onFilesAccept, onFilesReject }}
    >
      {children}
    </DropUIPropsContext.Provider>
  );
};

const FileDropper = Object.assign(Root, {
  Desktop,
  Mobile,
});

export default FileDropper;
