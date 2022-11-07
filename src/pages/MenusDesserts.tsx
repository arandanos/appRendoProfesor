import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/Header';
import './MenusDesserts.css';

const MenusDesserts: React.FC = () => {
  return (
    <>
      <Header title="Menús y postres" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </>
  );
};

export default MenusDesserts;