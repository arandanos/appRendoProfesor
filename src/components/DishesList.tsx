import './TaskList.css';
import { IonContent, IonPage, IonGrid, IonItem, IonLabel, IonIcon, IonRow, IonNavLink, IonButton, IonImg } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
interface DishesList {
  name: string;
}

const DishesList: React.FC<{ text: string; pictogram: string; }> = (props: { text: string; pictogram: string;}) => {

    return (       
        <IonItem href='#'>
          <IonImg class="pictogram-on-button" src={props.pictogram} />
          <IonLabel>
           {props.text}
          </IonLabel>
          <IonIcon icon={trashOutline}></IonIcon>
      </IonItem>
    )
  }

export default DishesList;