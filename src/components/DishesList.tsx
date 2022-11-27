import './TaskList.css';
import './DishesList.css';
import { IonContent, IonPage, IonGrid, IonItem, IonLabel, IonIcon, IonRow, IonNavLink, IonButton, IonImg } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
import { useState } from 'react';
interface DishesList {
  text: string;
  pictogram: string;
  value?: boolean;
}

const DishesList: React.FC<{ text: string; pictogram: string; }> = (props: { text: string; pictogram: string; }) => {

  const logValue = () => {
    console.log("DELETE " + props.text);
  }

  return (
    <IonItem href='#'>
      <IonImg class="pictogram-on-button" src={props.pictogram} />
      <IonLabel>
        {props.text}
      </IonLabel>
      <IonButton 
        class='delete-button' 
        icon-only item-end 
        fill='clear'
        onClick={logValue}
        >
        <IonIcon icon={trashOutline}></IonIcon>
      </IonButton>
    </IonItem>
  )
}

export default DishesList;