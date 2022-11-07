import {
  IonNavLink,
  IonButton
} from '@ionic/react';

import './ButtonForward.css'

const ButtonForward: React.FC<{ class: string; label: string; route: React.FC; }> = (props: { class: string; label: string; route: React.FC; }) => {

  return (
      <IonNavLink class={props.class} routerDirection="forward" component={props.route}>
        <IonButton color="primary" shape='round' fill='outline'>{props.label}</IonButton>
      </IonNavLink>
  );

}

export default ButtonForward;