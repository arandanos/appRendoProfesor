import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css'
import PrinterLaminator from '../components/PrinterLaminator';

const NewPrinterTask: React.FC = () => {
  return (
    <IonPage>
      <Header title="Impresora" back settings={false}/>
      <IonContent fullscreen>
        <PrinterLaminator printer={true}></PrinterLaminator>
        
      </IonContent>
    </IonPage>
  );
};

export default NewPrinterTask;