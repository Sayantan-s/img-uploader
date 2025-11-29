export const fileTypesSupportedText = (fileTypes: string[]) =>
  fileTypes.map((fileType) => `.${fileType.split("/")[1]}`).join(", ");

export const fileSizeText = (fileSize: number) => {
  if (fileSize < 1024) {
    return `${fileSize}B`;
  }
  if (fileSize < 1024 * 1024) {
    return `${fileSize / 1024}KB`;
  }
  return `${fileSize / 1024 / 1024}MB`;
};
