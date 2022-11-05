import {
  IonNavLink,
  IonButton
} from '@ionic/react';

import './SettingsLink.css'

const SettingsLink: React.FC<{ label: string; route: React.FC; position: string; }> = (props: { label: string; route: React.FC; position: string; }) => {

  var classCSS = "";

  switch(props.position){
    case "top":
      classCSS = "top-button";
      break;
    case "bottom":
      classCSS = "bottom-button";
      break;
    default:
      classCSS = "middle-button";
      break;
  }

  return (
      <IonNavLink class={classCSS} routerDirection="forward" component={props.route}>
        <IonButton color="primary" shape='round' fill='outline'>{props.label}</IonButton>
      </IonNavLink>
  );

}

export default SettingsLink;