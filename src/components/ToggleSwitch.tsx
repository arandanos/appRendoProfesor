import {
    IonItem,
    IonLabel,
    IonToggle
  } from '@ionic/react';
  
  import './ToggleSwitch.css'

  interface ToggleSwitchProps {
    label: string;
    checked?: boolean ;
    id: string; // Necesario para poder obtener el valor 
  }
  
  const ToggleSwitch: React.FC<ToggleSwitchProps> = (props: ToggleSwitchProps) => {
  
    // Obtenemos valor inicial
    var checked = props.checked? props.checked : false;
    
    // Función para convertir los boolean de Ionic en Boolean de Django para post en la api.
    const boolToString = (checked: boolean) => {
      if (checked)
        return "True"
      else
        return "False"
    }

    // Inicializamos la sesión
    sessionStorage.setItem(props.id, boolToString(checked));

    //Función que guarda el valor del switch cuando cambia 
    const handleSwitchChange = ()=>{
      //Modificamos el valor de la variable 
      checked = !checked;
      // Guardamos en el almacenamiento de sesión el nuevo valor
      sessionStorage.setItem(props.id!, boolToString(checked));
    }

    // Devolvemos el componente
    return (
        <IonItem shape="round" lines='none'>
            <IonLabel class="ion-text-wrap">{props.label}</IonLabel>
            <IonToggle id={props.id} slot="start" checked={props.checked} onIonChange={handleSwitchChange}></IonToggle>
        </IonItem>
    );
  
  }
  
  export default ToggleSwitch;