import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonNav} from '@ionic/react';
import './AdminSettings.css';
import Header from '../components/Header';
import MenusDesserts from './MenusDesserts';
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
        <SettingsLink label="Tipos de menus y postres" route={MenusDesserts}/>
        <SettingsLink label="Gestión de Alumnado" route={MenusDesserts}/>
        <SettingsLink label="Gestión de Profesorado" route={MenusDesserts}/>
        <SettingsLink label="Gestión de Clases" route={MenusDesserts}/>
        <SettingsLink label="Materiales del Almacén" route={MenusDesserts}/>
      </IonContent>
    </IonPage>
    }></IonNav>
  );
};

export default AdminSettings;