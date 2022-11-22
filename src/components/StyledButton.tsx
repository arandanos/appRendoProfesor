import './StyledButton.css';
import { trashOutline } from 'ionicons/icons';
import {IonItem, IonImg, IonLabel, IonIcon, IonFabButton, IonButton} from '@ionic/react'
import { restaurantOutline } from 'ionicons/icons';
import { addCircleOutline } from 'ionicons/icons';

interface buttonProps{ 
  label: string; 
  icon:  string;
  id: string;
}

const StyledButton: React.FC<buttonProps> = (props: buttonProps) => {
    return (       
      <IonButton id={props.id} class="add-button" fill="outline" shape="round" expand="block" >
          <IonIcon slot="start" icon={props.icon}></IonIcon>
          {props.label}              
      </IonButton>
    )
}

export default StyledButton;