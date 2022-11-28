import { IonContent } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css';

const MenusDesserts: React.FC = () => {
  return (
    <>
      <Header title="Tipos de Platos" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </>
  );
};

export default MenusDesserts;