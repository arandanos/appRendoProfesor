import { IonContent, IonPage } from '@ionic/react';
import './CreateTask.css';
import Header from '../components/Header';

const CreateTask: React.FC = () => {
  return (
    <IonPage>
      <Header title="Crear tarea" settings back={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default CreateTask;
