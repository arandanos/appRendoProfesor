import { IonContent } from '@ionic/react';
import Header from '../components/Header';

const MaterialTask: React.FC = () => {
  return (
    <>
      <Header title="Petición de material" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </>
  );
};

export default MaterialTask;