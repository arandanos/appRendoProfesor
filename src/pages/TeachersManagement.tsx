import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/Header';
import './TeachersManagement.css';

const TeachersManagement: React.FC = () => {
  return (
    <>
      <Header title="Profesorado" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </>
  );
};

export default TeachersManagement;