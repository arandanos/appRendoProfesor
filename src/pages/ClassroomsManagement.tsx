import { IonContent } from '@ionic/react';
import Header from '../components/Header';
import './ClassroomsManagement.css'

const ClassroomsManagement: React.FC = () => {
  return (
    <>
      <Header title="Clases" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </>
  );
};

export default ClassroomsManagement;