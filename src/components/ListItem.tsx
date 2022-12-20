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
  handleEdit?: any;
  handleDelete?: any;
  quantity?: number;
}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
    
  const [presentAlert] = useIonAlert();

  var href = "#"
  if (props.href)
    href = props.href;

  //Llama al edit<item> de la página padre
  function editItem(){
    props.handleEdit(props.id);
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
          handler: () => {props.handleDelete(props.id)}
        }
      ],
    })
  }
  
  var pictogram = getPictogram(props.pictogram);

  const quantity = () => {
    if (props.quantity != undefined) {
      return <IonLabel color="primary" class='quantity fit-width'>{props.quantity}</IonLabel>
    }
    return <></>
  }

  const editButton = () => {
    if(props.handleEdit != undefined) {
      return (
        <IonButton class='icon-button' icon-only item-end fill='clear' onClick={editItem}>
          <IonIcon icon={createOutline}></IonIcon>
        </IonButton>
      )
    }
    return <></>
  }

  const deleteButton = () => {
    if(props.handleDelete != undefined) {
      return (
        <IonButton class='icon-button' icon-only item-end fill='clear' onClick={deleteItem}>
          <IonIcon icon={trashOutline}></IonIcon>
        </IonButton>
      )
    }
  }

  const handleButtons = () => {
    return (
      <IonItem lines='none' slot='end' class='remove-padding fit-width'>
        {editButton()}
        {deleteButton()}
      </IonItem>
    )
  }

  return (     
    <IonItem key={props.id} class="remove-padding custom-padding" >
      <IonItem lines="none" class="remove-padding full-width" href={href}>
        <IonImg class="pictogram-on-button" src={pictogram} />
        <IonLabel class='ion-text-wrap'> {props.text}</IonLabel>
        <IonLabel class='quantity'>{quantity()}</IonLabel>
      </IonItem>
      {handleButtons()}
    </IonItem>
  )
}

export default ListItem;