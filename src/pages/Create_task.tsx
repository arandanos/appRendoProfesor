import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Create_task.css';

const Create_task: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Crear tarea</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Crear tarea</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Crear tarea page" />
      </IonContent>
    </IonPage>
  );
};

export default Create_task;
