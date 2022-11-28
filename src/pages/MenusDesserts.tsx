import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css';

const MenusDesserts: React.FC = () => {
  return (
    <IonPage>
      <Header title="Tipos de Platos" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default MenusDesserts;