import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './CreateTask.css';
import Header from '../components/Header';

const CreateTask: React.FC = () => {
  return (
    <IonPage>
      <Header title="Crear tarea" settings back={false}/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Crear tarea</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default CreateTask;
