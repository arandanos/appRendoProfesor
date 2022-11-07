import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/Header';
import './Materials.css'

const Materials: React.FC = () => {
  return (
    <>
      <Header title="Materiales" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </>
  );
};

export default Materials;