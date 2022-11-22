import './StyledButton.css';
import {IonIcon, IonButton} from '@ionic/react'

interface buttonProps{ 
  label: string; 
  icon:  string;
  id: string;
}

const StyledButton: React.FC<buttonProps> = (props: buttonProps) => {
    return (       
      <IonButton id={props.id} fill="outline" shape="round" expand="block" >
          <IonIcon slot="start" icon={props.icon}></IonIcon>
          {props.label}              
      </IonButton>
    )
}

export default StyledButton;