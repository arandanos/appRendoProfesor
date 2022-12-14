import '@progress/kendo-react-pdf';
import { checkmarkOutline, save } from 'ionicons/icons';
import StyledButton from '../components/StyledButton';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { useRef } from 'react';

const PDFPage: React.FC = () => {

  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);

  /* const handleExportWithComponent = () => {
    pdfExportComponent.current?.save();
  }; */

  const handleExportWithMethod = () => {
    if(contentArea.current)
      savePDF(contentArea.current, {paperSize: 'A4'});
  };

  return(
    <div className="app-content">
      <PDFExport ref={pdfExportComponent} paperSize='A4'>
        <div ref={contentArea}>
          <h1>KendoReact PDF Processing</h1>
          <p>This is an example of text that may be <span className="neat-style">styled</span>
          </p>
          <div className="button-area">
            <StyledButton icon={checkmarkOutline} label='Generar PDF' onClick={handleExportWithMethod}></StyledButton>
          </div>
        </div>
      </PDFExport>
    </div>
  );
};

export default PDFPage;