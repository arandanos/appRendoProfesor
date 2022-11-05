import {
  IonNavLink,
  IonButton
} from '@ionic/react';

import './SettingsLink.css'

const SettingsLink: React.FC<{ label: string; route: React.FC; }> = (props: { label: string; route: React.FC; }) => {

  return (
      <IonNavLink routerDirection="forward" component={props.route}>
        <IonButton color="primary" shape='round' fill='outline'>{props.label}</IonButton>
      </IonNavLink>
  );

}

export default SettingsLink;