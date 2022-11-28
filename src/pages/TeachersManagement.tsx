import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css';

const TeachersManagement: React.FC = () => {
  return (
    <IonPage>
      <Header title="Profesorado" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default TeachersManagement;