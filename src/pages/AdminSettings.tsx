import { IonContent, IonPage, IonGrid } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import StyledButton from '../components/StyledButton';

const AdminSettings: React.FC = () => {
  return (
      <IonPage>
        <Header title="Administración" back={false} settings={false}/>
        <IonContent fullscreen>
          <IonGrid class='button-grid'>
            <StyledButton label="Tipos de menús y postres" href="/dish_types"/>
            <StyledButton label="Gestión de alumnado" href="/students"/>
            <StyledButton label="Gestión de profesorado" href="/teachers"/>
            <StyledButton label="Gestión de clases" href="/classrooms"/>
            <StyledButton label="Materiales del almacén" href="/storage"/>
          </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default AdminSettings;