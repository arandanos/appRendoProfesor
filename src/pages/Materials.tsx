import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css'

const Materials: React.FC = () => {
  return (
    <IonPage>
      <Header title="Materiales" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Materials;