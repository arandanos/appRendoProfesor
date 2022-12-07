import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css'

const NewPrinterTask: React.FC = () => {
  return (
    <IonPage>
      <Header title="Impresora" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default NewPrinterTask;