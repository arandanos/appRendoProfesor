import { IonContent, IonPage, IonGrid, IonNav } from '@ionic/react';
import Header from '../components/Header';
import ButtonForward from '../components/ButtonForward';
import './Pages.css';
import KitchenOrderTask from './KitchenOrderTask';
import LaminatorTask from './LaminatorTask';
import MaterialTask from './MaterialTask';
import PrinterTask from './PrinterTask';

const CreateTask: React.FC = () => {
  return (
    <IonNav root={() => 
      <IonPage>
        <Header title="Crear tarea" settings back={false}/>
        <IonContent fullscreen>
          <IonGrid>
              <ButtonForward class="ion-nav-link-four" label="Comanda de cocina" route={KitchenOrderTask}/>
              <ButtonForward class="ion-nav-link-four" label="Petición de material" route={MaterialTask}/>
              <ButtonForward class="ion-nav-link-four" label="Impresora" route={PrinterTask}/>
              <ButtonForward class="ion-nav-link-four" label="Plastificadora" route={LaminatorTask}/>
            </IonGrid>
        </IonContent>
      </IonPage>
    }></IonNav>
  );
};

export default CreateTask;
