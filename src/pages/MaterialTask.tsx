import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css'

const MaterialTask: React.FC = () => {
  return (
    <IonPage>
      <Header title="Material" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default MaterialTask;