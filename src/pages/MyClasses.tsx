import { IonContent, IonPage } from '@ionic/react';
import './MyClasses.css';
import Header from '../components/Header';

const MyClasses: React.FC = () => {
  return (
    <IonPage>
      <Header title="Mis clases" settings back={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default MyClasses;
