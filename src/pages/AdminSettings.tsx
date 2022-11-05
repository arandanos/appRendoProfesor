import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonNav, IonGrid} from '@ionic/react';
import './AdminSettings.css';
import Header from '../components/Header';
import MenusDesserts from './MenusDesserts';
import StudentManagement from './StudentManagement';
import ClassroomsManagement from './ClassroomsManagement';
import TeachersManagement from './TeachersManagement';
import Materials from './Materials';
import SettingsLink from '../components/SettingsLink';

const AdminSettings: React.FC = () => {
  return (
    <IonNav root={() => 
      <IonPage>
      <Header title="Administración" back={false} settings={false}/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Admin Tools</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <SettingsLink position='top' label="Tipos de menús y postres" route={MenusDesserts}/>
          <SettingsLink position='middle' label="Gestión de alumnado" route={StudentManagement}/>
          <SettingsLink position='middle' label="Gestión de profesorado" route={TeachersManagement}/>
          <SettingsLink position='middle' label="Gestión de clases" route={ClassroomsManagement}/>
          <SettingsLink position='buttom' label="Materiales del almacén" route={Materials}/>
        </IonGrid>
      </IonContent>
    </IonPage>
    }></IonNav>
  );
};

export default AdminSettings;