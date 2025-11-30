import { FileError } from "react-dropzone";

const CODE_INVALID_FILE_TYPE = "file-invalid-type";
const CODE_FILE_SIZE_TOO_LARGE = "file-size-too-large";

export function validator(acceptedFileTypes: string[], maxFileSize: number) {
  return function (file: File): FileError | null {
    if (!acceptedFileTypes.includes(file.type)) {
      return {
        code: CODE_INVALID_FILE_TYPE,
        message: `File type is invalid`,
      };
    }

    if (file.size > maxFileSize) {
      return {
        code: CODE_FILE_SIZE_TOO_LARGE,
        message: `File size is too large`,
      };
    }

    return null;
  };
}
