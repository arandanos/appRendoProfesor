import { IonContent } from '@ionic/react';
import Header from '../components/Header';

const LaminatorTask: React.FC = () => {
  return (
    <>
      <Header title="Plastificadora" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </>
  );
};

export default LaminatorTask;