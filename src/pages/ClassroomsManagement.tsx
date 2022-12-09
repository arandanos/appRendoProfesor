import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css'

const ClassroomsManagement: React.FC = () => {
  return (
    <IonPage>
      <Header title="Clases" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default ClassroomsManagement;