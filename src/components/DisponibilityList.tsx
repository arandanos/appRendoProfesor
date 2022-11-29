import { trashOutline } from 'ionicons/icons';
import {IonItem, IonImg, IonLabel, IonIcon, IonFabButton, IonButton} from '@ionic/react'
import { createOutline } from 'ionicons/icons';
import './ListItem.css'

interface DisponibilityListProps{
  text: string; 
  pictogram: string;
  quantity: string;
  href?: string;
}

const DisponibilityList: React.FC<DisponibilityListProps> = (props: DisponibilityListProps) => {
    
  var href = "#"
  if (props.href)
    href = props.href;
  
  return (
    <IonItem class="remove-padding">
      <IonImg class="pictogram-on-button" src={props.pictogram} />
      <IonLabel> {props.text} </IonLabel>
      <IonLabel> {props.quantity} </IonLabel>
      <IonIcon class="ion-margin-start" icon={createOutline} />
      <IonIcon class="ion-margin-start" icon={trashOutline} />
    </IonItem>
  )
}

export default DisponibilityList;