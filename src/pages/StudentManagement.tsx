import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css';

const StudentManagement: React.FC = () => {
  return (
    <IonPage>
      <Header title="Alumnado" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default StudentManagement;