import {
  IonNavLink,
  IonButton
} from '@ionic/react';

import './ButtonForward.css'

const ButtonForward: React.FC<{ label: string; route: React.FC; }> = (props: { label: string; route: React.FC; }) => {

  return (
      <IonNavLink class="ion-nav-link" routerDirection="forward" component={props.route}>
        <IonButton class="fullscreen-btn" color="primary" shape='round' fill='outline'>{props.label}</IonButton>
      </IonNavLink>
  );

}

export default ButtonForward;