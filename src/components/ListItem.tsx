import { addCircleOutline, arrowForwardOutline, cafeOutline, caretForward, caretForwardOutline, checkmarkCircleOutline, checkmarkDoneCircle, checkmarkOutline, trashOutline } from 'ionicons/icons';
import { IonItem, IonImg, IonLabel, IonIcon, IonButton, useIonAlert, IonInput, IonList } from '@ionic/react'
import { createOutline } from 'ionicons/icons';
import './ListItem.css'
import { getPictogram } from '../ApiMethods';
import PopUp from '../components/PopUp';

interface ListItemProps{
  text: string; 
  pictogram?: string;
  value?: any;
  href?: string;
  handleSelectClick?: any;
  confirm?: any;
  id?: string;
  handleEdit?: any;
  handleDelete?: any;
  quantity?: number;
}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
    
  const [presentAlert] = useIonAlert();

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

  return (     
    <IonItem key={props.id} class="remove-padding custom-padding" >
      <IonItem lines="none" class="remove-padding full-width" onClick={props.handleSelectClick} href={props.href}>
        {props.quantity? <IonLabel color="primary" class='quantity fit-width'>{props.quantity}</IonLabel> : null}
        {props.pictogram? <IonImg class="pictogram-on-button" src={getPictogram(props.pictogram)} /> : null}
        <IonLabel class='ion-text-wrap'> {props.text}</IonLabel>
      </IonItem>
      <IonItem lines='none' slot='end' class='remove-padding fit-width'>
        <IonButton class='icon-button' icon-only item-end fill='clear'>
          <IonIcon icon={createOutline}></IonIcon>
        </IonButton>
        <IonButton class='icon-button' icon-only item-end fill='clear' onClick={deleteItem}>
          <IonIcon icon={trashOutline}></IonIcon>
        </IonButton>
      </IonItem>
      {props.handleSelectClick ? <IonButton class='icon-button' color="success" icon-only item-end fill='clear' onClick={() => {
        props.handleSelectClick(props.value);
        props.confirm();
      }}>
          <IonIcon class='check' icon={checkmarkCircleOutline}></IonIcon>
        </IonButton> : null}
    </IonItem>
  )
}

export default ListItem;