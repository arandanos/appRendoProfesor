import { IonContent, IonPage, IonGrid, IonNav } from '@ionic/react';
import Header from '../components/Header';
import './Pages.css';
import StyledButton from '../components/StyledButton';

const CreateTask: React.FC = () => {
  return (
    <IonPage>
      <Header title="Crear tarea" settings back={false}/>
      <IonContent fullscreen>
        <IonGrid class='button-grid'>
          <StyledButton label="Comanda de cocina" href="/task/new/kitchen_order"/>
          <StyledButton label="Petición de material" href="/task/new/material_request"/>
          <StyledButton label="Impresora" href="/task/new/printer_task"/>
          <StyledButton label="Plastificadora" href="/task/new/laminator_task"/>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CreateTask;
