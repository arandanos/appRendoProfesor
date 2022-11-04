import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tasks.css';
import Header from '../components/Header';

const Tasks: React.FC = () => {
  return (
    <IonPage>
      <Header title="Tareas" />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tareas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tareas page" />
      </IonContent>
    </IonPage>
  );
};

export default Tasks;
