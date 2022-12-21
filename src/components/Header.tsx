import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonFabButton,
    IonIcon,
    IonRow,
  } from '@ionic/react';

  import { arrowBackOutline, settingsOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';

import './Header.css'

interface HeaderProps {
  title: string; 
  back?: boolean; 
  settings?: boolean;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const history = useHistory();

    var BackButton = () => {
      if(props.back){
        return (
          <IonFabButton slot="start" size="small" onClick={() => { history.goBack(); }} >
            <IonIcon icon={arrowBackOutline}/>
          </IonFabButton>
        )
      }

      return <></>
    }

    var SettingsButton = () => {
      if(props.settings){
        return (
          <IonFabButton slot="end" size="small" href="/admin_settings" class='margin-right-settings'>
            <IonIcon icon={settingsOutline} />
          </IonFabButton>
        ) 
      }

      return <></>
    }
  
    return (
      <IonHeader>
        <IonToolbar>
          <BackButton />
          <IonTitle class='ion-text-wrap'>
            <IonRow class="ion-text-wrap">
              {props.title}
            </IonRow>
          </IonTitle>
          <SettingsButton />
        </IonToolbar>
      </IonHeader>
    );

}

export default Header;