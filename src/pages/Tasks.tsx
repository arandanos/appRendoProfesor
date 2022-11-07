import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tasks.css';
import Header from '../components/Header';

const Tasks: React.FC = () => {
  return (
    <IonPage>
      <Header title="Tareas" settings back={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Tasks;
