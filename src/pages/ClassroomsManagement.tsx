import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/Header';
import './ClassroomsManagement.css'

const ClassroomsManagement: React.FC = () => {
  return (
    <>
      <Header title="Clases" back settings={false}/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Clases</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </>
  );
};

export default ClassroomsManagement;