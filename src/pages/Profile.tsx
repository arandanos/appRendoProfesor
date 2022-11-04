import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';
import Header from '../components/Header';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <Header title="Mi perfil" />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Perfil page" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
