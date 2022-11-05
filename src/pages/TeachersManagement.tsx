import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/Header';
import './TeachersManagement.css';

const TeachersManagement: React.FC = () => {
  return (
    <>
      <Header title="Profesorado" back settings={false}/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profesorado</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </>
  );
};

export default TeachersManagement;