import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css'
import PrinterLaminator from '../components/PrinterLaminator';

const NewLaminatorTask: React.FC = () => {
  return (
    <IonPage>
      <Header title="Plastificadora" back settings={false}/>
      <IonContent fullscreen>
      <PrinterLaminator printer={false}></PrinterLaminator>
        
      </IonContent>
    </IonPage>
  );
};



export default NewLaminatorTask;