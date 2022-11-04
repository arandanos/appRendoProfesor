import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Create_task.css';
import Header from '../components/Header';

const Create_task: React.FC = () => {
  return (
    <IonPage>
      <Header title="Crear tarea" />
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
