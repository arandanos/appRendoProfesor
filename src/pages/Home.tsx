import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title="Home" settings back={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Home;
