import { trashOutline } from 'ionicons/icons';
import { IonItem, IonImg, IonLabel, IonIcon, IonButton, useIonAlert } from '@ionic/react'
import { createOutline } from 'ionicons/icons';
import './ListItem.css'
import { getPictogram } from '../ApiMethods';

interface ListItemProps{
  text: string; 
  pictogram: string;
  href?: string;
  id?: string;
  editItem?: any;
  deleteItem?: any;
  number?: number;
}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
    
  const [presentAlert] = useIonAlert();

  var href = "#"
  if (props.href)
    href = props.href;

  //Llama al edit<item> de la página padre
  function editItem(){
    props.editItem(props.id);
  }
  //Llama al delete<item> de la página padre
  function deleteItem(){
    presentAlert({
      header: "¿Desea borrar: "+ props.text +"?",
      buttons: [
        {
          text: "NO",
          cssClass: "alert-button-cancel",
        },
        {
          text: "SI",
          cssClass: "alert-button-confirm",
          handler: () => {props.deleteItem(props.id)}
        }
      ],
    })
  }
  
  var pictogram = getPictogram(props.pictogram);

  return (     
    <IonItem key={props.id} class="remove-padding custom-padding" >
      <IonItem lines="none" class="remove-padding full-width" href={href}>
        <IonImg class="pictogram-on-button" src={pictogram} />
        <IonLabel> {props.text} {props.number}</IonLabel>
      </IonItem>
      <IonItem lines='none' slot='end' class='remove-padding fit-width'>
        <IonButton class='icon-button' icon-only item-end fill='clear' onClick={editItem}>
          <IonIcon icon={createOutline}></IonIcon>
        </IonButton>    
        <IonButton class='icon-button' icon-only item-end fill='clear' onClick={deleteItem}>
          <IonIcon icon={trashOutline}></IonIcon>
        </IonButton>
      </IonItem>
    </IonItem>
  )
}

export default ListItem;