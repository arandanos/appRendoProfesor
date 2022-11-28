import './TaskList.css';
import './DishesList.css';
import { IonContent, IonPage, IonGrid, IonItem, IonLabel, IonIcon, IonRow, IonNavLink, IonButton, IonImg } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
import { useState } from 'react';
interface DishesList {
  text: string;
  pictogram: string;
  id: string;
  deleteDish: any;
}

const DishesList: React.FC<DishesList> = (props: DishesList) => {

  function deleteDish() {
    props.deleteDish(props.id);
  }

  return (
    <IonItem>
      <IonImg class="pictogram-on-button" src={props.pictogram} />
      <IonLabel>
        {props.text}
      </IonLabel>
      <IonButton class='delete-button' icon-only item-end fill='clear' onClick={deleteDish}>
        <IonIcon icon={trashOutline}></IonIcon>
      </IonButton>
    </IonItem>
  )
}

export default DishesList;