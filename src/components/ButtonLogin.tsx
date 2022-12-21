import { IonGrid, IonButton, IonImg, IonText } from '@ionic/react';
import { MouseEventHandler } from 'react';
import './ButtonLogin.css';

interface ButtonProps { 
  href?: any;
  id?: string;
  onClick?: any
  
}

const ButtonLogin: React.FC<ButtonProps> = (props: ButtonProps) => {

  return (
    <IonButton onClick={props.onClick? props.onClick : null} color="secondary" class="buttonLogin" href={props.href? props.href : null} id={props.id} >
      <IonText class='large-text ion-text-wrap'>Iniciar Sesión</IonText>
    </IonButton>
  );
}

export default ButtonLogin;