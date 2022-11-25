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
          <IonGrid class='button-grid'>
              <ButtonForward label="Comanda de cocina" route={KitchenOrderTask}/>
              <ButtonForward label="Petición de material" route={MaterialTask}/>
              <ButtonForward label="Impresora" route={PrinterTask}/>
              <ButtonForward label="Plastificadora" route={LaminatorTask}/>
            </IonGrid>
        </IonContent>
      </IonPage>
    }></IonNav>
  );
};

export default CreateTask;
