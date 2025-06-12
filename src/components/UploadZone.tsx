import { useState, useCallback } from 'react';
import { Upload, FileText, AlertCircle, CheckCircle } from 'lucide-react';

interface UploadZoneProps {
  onUpload: (file: File) => void;
  isProcessing: boolean;
}

const UploadZone = ({ onUpload, isProcessing }: UploadZoneProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf') {
        setSelectedFile(file);
        onUpload(file);
      }
    }
  }, [onUpload]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      onUpload(file);
    }
  }, [onUpload]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
          isDragOver
            ? 'border-blue-500 bg-blue-50'
            : selectedFile
            ? 'border-green-500 bg-green-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isProcessing ? (
          <div className="space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <h3 className="text-lg font-semibold text-gray-900">Processing Blueprint</h3>
            <p className="text-gray-600">
              Gauge is analyzing your blueprint and generating cost estimates...
            </p>
          </div>
        ) : selectedFile ? (
          <div className="space-y-4">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">File Ready</h3>
              <p className="text-gray-600 mt-1">{selectedFile.name}</p>
              <p className="text-sm text-gray-500 mt-2">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Upload className="h-12 w-12 text-gray-400 mx-auto" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Upload Your Blueprint
              </h3>
              <p className="text-gray-600 mt-1">
                Drag and drop your PDF blueprint here, or click to select
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <FileText className="h-4 w-4" />
              <span>PDF files only • Max 50MB</span>
            </div>
            <label className="inline-block">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileSelect}
                className="hidden"
                disabled={isProcessing}
              />
              <span className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors inline-block">
                Select Blueprint
              </span>
            </label>
          </div>
        )}
      </div>
      
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-700">
            <p className="font-medium">Supported file types:</p>
            <p className="mt-1">
              PDF blueprints, floor plans, and architectural drawings. For best results, 
              ensure your blueprint includes dimensions and room labels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadZone;