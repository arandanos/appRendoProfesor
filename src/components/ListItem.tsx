import { trashOutline } from 'ionicons/icons';
import {IonItem, IonImg, IonLabel, IonIcon, IonFabButton, IonButton} from '@ionic/react'
import { createOutline } from 'ionicons/icons';
import './ListItem.css'

interface ListItemProps{
  text: string; 
  pictogram: string;
  href?: string;
}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
    
  var href = "#"
  if (props.href)
    href = props.href;

  
  return (       
    <IonItem class="remove-padding" href={href}>
      <IonImg class="pictogram-on-button" src={props.pictogram} />
      <IonLabel> {props.text} </IonLabel>
      <IonIcon class="ion-margin-start" icon={createOutline} />     
      <IonIcon class="ion-margin-start" icon={trashOutline} />
    </IonItem>
  )
}

export default ListItem;