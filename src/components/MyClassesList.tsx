import './MyClassesList.css';
import { trashOutline } from 'ionicons/icons';
import {IonItem, IonImg, IonLabel, IonIcon, IonFabButton, IonButton} from '@ionic/react'
import { restaurantOutline } from 'ionicons/icons';



const MyClassesList: React.FC<{ text: string; pictogram: string; }> = (props: { text: string; pictogram: string;}) => {
    return (       
      <IonItem href='#'>
        <IonImg class="pictogram-on-button" src={props.pictogram} />
        <IonLabel> {props.text} </IonLabel>
        <IonIcon icon={restaurantOutline} />     
        <IonIcon icon={trashOutline} />
      </IonItem>

    )
}

export default MyClassesList;