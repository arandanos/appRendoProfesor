import {
    IonItem,
    IonLabel,
    IonToggle
  } from '@ionic/react';
import { checkmarkDone } from 'ionicons/icons';
  
  import './ToggleSwitch.css'

  interface ToggleSwitchProps {
    label: string;
    checked: boolean ;
    id?: string;
  }
  
  const ToggleSwitch: React.FC<ToggleSwitchProps> = (props: ToggleSwitchProps) => {
  
    var checked = props.checked;

    const boolToString = (checked: boolean) => {
      if (checked)
        return "True"
      else
        return "False"
    }

    return (
        <IonItem shape="round" lines='none'>
            <IonLabel class="ion-text-wrap">{props.label}</IonLabel>
            <IonToggle id={props.id} slot="start" checked={props.checked} onIonChange={()=>{
              checked = !checked;
              sessionStorage.setItem(props.id!, boolToString(checked));
            }}></IonToggle>
        </IonItem>
    );
  
  }
  
  export default ToggleSwitch;