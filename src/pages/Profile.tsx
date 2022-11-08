import { IonContent, IonPage } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <Header title="Mi perfil" settings back={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
