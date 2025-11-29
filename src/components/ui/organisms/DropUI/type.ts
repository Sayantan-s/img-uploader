"use client";

import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { DropzoneState, FileRejection } from "react-dropzone";

export interface FileRejectionCause {
  name: string;
  message: string;
}

export interface DropUIProps {
  maxFileSize: number;
  acceptedFileTypes: string[];
  onFilesAccept: (files: File[]) => void;
  onFilesReject: (fileRejections: FileRejectionCause[]) => void;
}

export interface DropUIPropsContextType {
  maxFileSize: number;
  acceptedFileTypes: string[];
  onFilesAccept: (files: File[]) => void;
  onFilesReject: (fileRejections: FileRejectionCause[]) => void;
}

export type DesktopContextType = DropzoneState;

export interface DropUIStateProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  asChild?: boolean;
}

export interface StateWrapperProps extends DropUIStateProps {
  show: boolean;
}

export interface DroppedFiles {
  acceptedFiles: File[];
  rejectedFiles: FileRejection[];
}
