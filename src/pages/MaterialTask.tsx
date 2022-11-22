import { IonContent } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css'

const MaterialTask: React.FC = () => {
  return (
    <>
      <Header title="Material" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </>
  );
};

export default MaterialTask;