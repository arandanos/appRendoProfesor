import { IonContent } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css'

const PrinterTask: React.FC = () => {
  return (
    <>
      <Header title="Impresora" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </>
  );
};

export default PrinterTask;