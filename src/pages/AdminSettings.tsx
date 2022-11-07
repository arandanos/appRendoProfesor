import { IonContent, IonPage, IonNav, IonGrid } from '@ionic/react';
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
        <IonGrid>
          <SettingsLink label="Tipos de menús y postres" route={MenusDesserts}/>
          <SettingsLink label="Gestión de alumnado" route={StudentManagement}/>
          <SettingsLink label="Gestión de profesorado" route={TeachersManagement}/>
          <SettingsLink label="Gestión de clases" route={ClassroomsManagement}/>
          <SettingsLink label="Materiales del almacén" route={Materials}/>
        </IonGrid>
      </IonContent>
    </IonPage>
    }></IonNav>
  );
};

export default AdminSettings;