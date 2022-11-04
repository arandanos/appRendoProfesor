import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Admin_settings.css';
import Header from '../components/Header';

const Admin_settings: React.FC = () => {
  return (
    <IonPage>
      <Header title="Administración" />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Admin Tools</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Administración page" />
      </IonContent>
    </IonPage>
  );
};

export default Admin_settings;