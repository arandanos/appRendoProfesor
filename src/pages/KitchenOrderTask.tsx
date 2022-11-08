import { IonContent } from '@ionic/react';
import Header from '../components/Header';

const KitchenOrderTask: React.FC = () => {
  return (
    <>
      <Header title="Comanda" back settings={false}/>
      <IonContent fullscreen>
      </IonContent>
    </>
  );
};

export default KitchenOrderTask;