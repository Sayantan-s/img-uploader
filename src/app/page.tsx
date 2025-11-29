"use client";

import FileDropper from "@/components/ui/organisms/DropUI";
import {
  FILE_TYPES_SUPPORTED,
  MAX_FILE_SIZE,
} from "@/components/ui/organisms/DropUI/constants";
import { FileRejectionCause } from "@/components/ui/organisms/DropUI/type";
import {
  fileSizeText,
  fileTypesSupportedText,
} from "@/components/ui/organisms/DropUI/utils";

export default function Home() {
  const onFilesAccept = (files: File[]) => {
    console.log("files", files);
  };

  const onFilesReject = (fileRejections: FileRejectionCause[]) => {
    console.log("fileRejections", fileRejections);
  };

  return (
    <div className="">
      <FileDropper
        maxFileSize={MAX_FILE_SIZE}
        acceptedFileTypes={FILE_TYPES_SUPPORTED}
        onFilesAccept={onFilesAccept}
        onFilesReject={onFilesReject}
      >
        <FileDropper.Desktop>
          <FileDropper.Desktop.Default className="text-sm text-gray-800">
            <h1>Drag 'n' drop some files here, or click to select files</h1>
            <p className="text-xs text-gray-400">
              Supported file types:{" "}
              {fileTypesSupportedText(FILE_TYPES_SUPPORTED)}
              &nbsp; (max size:{" "}
              <span className="text-blue-600">
                {fileSizeText(MAX_FILE_SIZE)}
              </span>
              )
            </p>
          </FileDropper.Desktop.Default>
          <FileDropper.Desktop.DragActive className="text-sm text-blue-500">
            DragActive
          </FileDropper.Desktop.DragActive>
          <FileDropper.Desktop.Accept className="text-sm text-emerald-500">
            <p>Files accepted</p>
            <p className="text-xs text-gray-400">
              Check console for accepted files
            </p>
          </FileDropper.Desktop.Accept>
          <FileDropper.Desktop.Reject className="text-sm text-rose-500">
            <p>Files rejected</p>
            <p className="text-xs text-gray-400">
              Check console for rejected files
            </p>
          </FileDropper.Desktop.Reject>
        </FileDropper.Desktop>
        <FileDropper.Mobile />
      </FileDropper>
    </div>
  );
}

/**
 *
 * Drop UI -> Desktop / Mobile
 * Image List -> <UploadedImageList />
 *
 */
