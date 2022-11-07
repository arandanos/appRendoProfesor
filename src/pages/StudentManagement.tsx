import { IonContent } from '@ionic/react';
import Header from '../components/Header';
import './StudentManagement.css';

const StudentManagement: React.FC = () => {
  return (
    <>
      <Header title="Alumnado" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </>
  );
};

export default StudentManagement;