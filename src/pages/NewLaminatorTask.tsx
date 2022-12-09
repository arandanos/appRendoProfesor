import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css'

const NewLaminatorTask: React.FC = () => {
  return (
    <IonPage>
      <Header title="Plastificadora" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default NewLaminatorTask;