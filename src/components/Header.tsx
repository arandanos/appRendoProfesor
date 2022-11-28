import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonFabButton,
    IonIcon,
  } from '@ionic/react';

  import { settingsOutline } from 'ionicons/icons';

import './Header.css'

const Header: React.FC<{ title: string; back: boolean; settings: boolean }> = (props: { title: string; back: boolean; settings: boolean }) => {
    var BackButton = () => {
      if(props.back){
        return (
          <IonFabButton slot="start" size="small" >
            <IonBackButton defaultHref="/"/>
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
          <BackButton/>
          <IonTitle>{props.title}</IonTitle>
          <SettingsButton/>
        </IonToolbar>
      </IonHeader>
    );

}

export default Header;