import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonFabButton,
    IonIcon,
  } from '@ionic/react';

  import { settingsOutline } from 'ionicons/icons';

import './Header.css'

const Header: React.FC<{ title: string; }> = (props: { title: string }) => {
    return (
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{props.title}</IonTitle>
            <IonFabButton slot="end" size="small" href="/admin_settings">
              <IonIcon icon={settingsOutline} />
            </IonFabButton>
        </IonToolbar>
      </IonHeader>
    );

}

export default Header;