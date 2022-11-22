import './TaskList.css';
import { IonContent, IonPage, IonGrid, IonItem, IonLabel, IonIcon, IonRow, IonNavLink, IonButton, IonImg } from '@ionic/react';
interface TaskList {
  name: string;
}

const TaskList: React.FC<{ text: string; pictogram: string; }> = (props: { text: string; pictogram: string;}) => {

    return (       
        <IonItem href='#'>
          <IonImg class="pictogram-on-button" src={props.pictogram} />
          <IonLabel>
           {props.text}
          </IonLabel>
        </IonItem>
    )
  }

export default TaskList;
