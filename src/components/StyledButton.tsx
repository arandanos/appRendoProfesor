import {IonIcon, IonButton} from '@ionic/react'

interface buttonProps{ 
  label: string; 
  icon?:  string;
  id?: string;
  onClick?: any;
  href?: any;
  color?: any;
}

const StyledButton: React.FC<buttonProps> = (props: buttonProps) => {
    return (       
      <IonButton color={props.color} id={props.id} fill="outline" shape="round" expand="block" onClick={props.onClick} class="fullscreen-btn" href={props.href}>
          { props.icon? <IonIcon slot="start" icon={props.icon}></IonIcon> : null }
          {props.label}              
      </IonButton>
    )
}

export default StyledButton;