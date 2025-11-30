"use client";

import Dropzone, { FileRejection } from "react-dropzone";
import { useDropUIPropsCtx } from "./hooks/useDropUIPropsCtx";
import { FC, PropsWithChildren, useCallback, useState } from "react";

import { DesktopContext } from "./context/DesktopContext";
import { useDesktopCtx } from "./hooks/useDesktopCtx";
import { DropUIStateProps, StateWrapperProps } from "./type";
import { validator } from "./validations";

const Root: FC<PropsWithChildren> = ({ children }) => {
  const { maxFileSize, acceptedFileTypes, onFilesAccept, onFilesReject } =
    useDropUIPropsCtx();

  const acceptedFileTypesObject = acceptedFileTypes.reduce((acc, type) => {
    acc[type] = [];
    return acc;
  }, {} as Record<string, string[]>);

  const handleDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      console.log("fileRejections", fileRejections);
      onFilesAccept(acceptedFiles);
      onFilesReject(
        fileRejections.map((fileRejection) => ({
          name: fileRejection.file.name,
          message: fileRejection.errors[0]?.message || "Unknown error",
        }))
      );
    },
    []
  );

  return (
    <Dropzone
      onDrop={handleDrop}
      accept={acceptedFileTypesObject}
      maxSize={maxFileSize}
      validator={validator(acceptedFileTypes, maxFileSize)}
    >
      {(state) => {
        console.log(state, "state");
        return (
          <DesktopContext.Provider value={state}>
            <section>
              <div
                {...state.getRootProps({
                  className:
                    "p-4 border border-dashed border-gray-300 rounded-md",
                })}
              >
                <input
                  {...state.getInputProps({
                    disabled: !!(
                      state.acceptedFiles.length || state.fileRejections.length
                    ),
                  })}
                />
                {children}
              </div>
            </section>
          </DesktopContext.Provider>
        );
      }}
    </Dropzone>
  );
};

const StateWrapper: FC<StateWrapperProps> = ({
  children,
  asChild,
  show,
  ...props
}) => {
  if (!show) return null;

  if (asChild) return children;

  return <div {...props}>{children}</div>;
};

const DragActive: FC<DropUIStateProps> = (props) => {
  const { isDragActive } = useDesktopCtx();
  return (
    <StateWrapper {...props} show={isDragActive}>
      {props.children}
    </StateWrapper>
  );
};

const Accept: FC<DropUIStateProps> = (props) => {
  const { acceptedFiles } = useDesktopCtx();
  const show = !!acceptedFiles.length;

  return (
    <StateWrapper {...props} show={show}>
      {props.children}
    </StateWrapper>
  );
};

const Reject: FC<DropUIStateProps> = (props) => {
  const { acceptedFiles, fileRejections } = useDesktopCtx();
  const show = !acceptedFiles.length && !!fileRejections.length;

  return (
    <StateWrapper {...props} show={show}>
      {props.children}
    </StateWrapper>
  );
};

const Default: FC<DropUIStateProps> = (props) => {
  const { isDragActive, acceptedFiles, fileRejections } = useDesktopCtx();
  const areFilesSubmitted = acceptedFiles.length || fileRejections.length;
  return (
    <StateWrapper {...props} show={!areFilesSubmitted && !isDragActive}>
      {props.children}
    </StateWrapper>
  );
};

export const Desktop = Object.assign(Root, {
  Default,
  DragActive,
  Accept,
  Reject,
});
