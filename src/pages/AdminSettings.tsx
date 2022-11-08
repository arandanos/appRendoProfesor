import { IonContent, IonPage, IonNav, IonGrid } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import MenusDesserts from './MenusDesserts';
import StudentManagement from './StudentManagement';
import ClassroomsManagement from './ClassroomsManagement';
import TeachersManagement from './TeachersManagement';
import Materials from './Materials';
import ButtonForward from '../components/ButtonForward';

const AdminSettings: React.FC = () => {
  return (
    <IonNav root={() => 
      <IonPage>
      <Header title="Administración" back={false} settings={false}/>
      <IonContent fullscreen>
        <IonGrid>
          <ButtonForward class="ion-nav-link-five" label="Tipos de menús y postres" route={MenusDesserts}/>
          <ButtonForward class="ion-nav-link-five" label="Gestión de alumnado" route={StudentManagement}/>
          <ButtonForward class="ion-nav-link-five" label="Gestión de profesorado" route={TeachersManagement}/>
          <ButtonForward class="ion-nav-link-five" label="Gestión de clases" route={ClassroomsManagement}/>
          <ButtonForward class="ion-nav-link-five" label="Materiales del almacén" route={Materials}/>
        </IonGrid>
      </IonContent>
    </IonPage>
    }></IonNav>
  );
};

export default AdminSettings;