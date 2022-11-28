import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css'

const LaminatorTask: React.FC = () => {
  return (
    <IonPage>
      <Header title="Plastificadora" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default LaminatorTask;