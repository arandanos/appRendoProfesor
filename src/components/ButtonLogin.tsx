import { IonGrid, IonButton, IonImg, IonText } from '@ionic/react';
import { MouseEventHandler } from 'react';
import './ButtonLogin.css';

interface ButtonProps { 
  href?: MouseEventHandler;
  id?: string;
  
}

const ButtonLogin: React.FC<ButtonProps> = (props: ButtonProps) => {

  return (
    <IonButton color="secondary" class="buttonLogin" onClick={props.href} id={props.id} >
      <IonText class='large-text ion-text-wrap'>Iniciar Sesión</IonText>
    </IonButton>
  );
}

export default ButtonLogin;