import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploaderProps {
  onFileSelect: (file: File | null) => void;
}

const formatBytes = (bytes: number, decimals = 2): string => {
  if (!bytes) return "0 Bytes";
  const k = 1024;
  const dm = Math.max(decimals, 0);
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(dm)} ${sizes[i]}`;
};

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect }) => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0] ?? null;
      setFile(selectedFile);
      onFileSelect(selectedFile);
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "application/pdf": [".pdf"] },
    maxSize: 20 * 1024 * 1024,
  });

  return (
    <div className="w-full gradient-border">
      <div {...getRootProps()} className="cursor-pointer space-y-4">
        <input {...getInputProps()} />

        {file ? (
          <div
            className="uploader-selected-file flex items-center space-x-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/images/pdf.png"
              alt="PDF file icon"
              className="size-10"
            />
            <div>
              <p className="text-lg text-gray-500">{file.name}</p>
              <p className="text-sm text-gray-500">{formatBytes(file.size)}</p>
            </div>
            <button  className="p-2 cursor-pointer "  onClick={(e)=>onFileSelect ?.(null) }  >
              <img src="/icons/cross.svg" alt="remove"  />
            </button>
          </div>
          
        ) : (
          <div className="text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center hover:shadow-amber-300">
              <img src="/icons/info.svg" alt="upload" className="size-20" />
            </div>
            <p className="text-lg text-gray-500">
              <span>Click to upload</span> or drag and drop
            </p>
            <p className="text-lg text-gray-500">PDF max (20 MB)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;

