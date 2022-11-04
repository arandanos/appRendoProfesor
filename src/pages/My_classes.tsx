import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './My_classes.css';

const My_classes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mis clases</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mis clases</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Mis clases page" />
      </IonContent>
    </IonPage>
  );
};

export default My_classes;
