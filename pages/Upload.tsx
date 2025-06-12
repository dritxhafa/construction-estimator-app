import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadZone from '../components/UploadZone';
import EstimateResults from '../components/EstimateResults';
import { processPDF } from '../utils/aiProcessor';
import { EstimateData } from '../types';

const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [estimateData, setEstimateData] = useState<EstimateData | null>(null);
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  const handleFileUpload = async (file: File) => {
    setIsProcessing(true);
    setProjectName(file.name.replace('.pdf', ''));
    
    try {
      const result = await processPDF(file);
      setEstimateData(result);
    } catch (error) {
      console.error('Error processing file:', error);
      // Handle error
    } finally {
      setIsProcessing(false);
    }
  };

  if (estimateData) {
    return <EstimateResults estimateData={estimateData} projectName={projectName} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upload Your Blueprint
          </h1>
          <p className="text-xl text-gray-600">
            Get accurate cost estimates powered by AI in minutes
          </p>
        </div>
        
        <UploadZone onUpload={handleFileUpload} isProcessing={isProcessing} />
        
        {isProcessing && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Gauge is analyzing your blueprint...
            </h3>
            <div className="space-y-2 text-blue-700">
              <p>✓ Extracting room dimensions and layouts</p>
              <p>✓ Identifying construction materials and methods</p>
              <p>✓ Calculating quantities for each trade</p>
              <p>🔍 Applying RSMeans pricing data...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;