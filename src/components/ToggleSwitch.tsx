import {
    IonItem,
    IonLabel,
    IonToggle
  } from '@ionic/react';
  
  import './ToggleSwitch.css'
  
  const ToggleSwitch: React.FC<{ label: string; checked: boolean }> = (props: { label: string; checked: boolean }) => {
  
    return (
        <IonItem shape="round" lines='none'>
            <IonLabel class="ion-text-wrap">{props.label}</IonLabel>
            <IonToggle slot="start" checked={props.checked}></IonToggle>
        </IonItem>
    );
  
  }
  
  export default ToggleSwitch;