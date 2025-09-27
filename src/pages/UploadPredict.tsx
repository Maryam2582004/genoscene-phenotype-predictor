import React from 'react';

const UploadPredict: React.FC = () => {
  return (
    <div className="upload-predict">
      <iframe 
        src="/upload-predict.html" 
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          display: 'block'
        }}
        title="DNA Phenotype Prediction Upload & Predict"
      />
    </div>
  );
};

export default UploadPredict;