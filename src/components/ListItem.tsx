import { addCircleOutline, cafeOutline, trashOutline } from 'ionicons/icons';
import { IonItem, IonImg, IonLabel, IonIcon, IonButton, useIonAlert, IonInput, IonList } from '@ionic/react'
import { createOutline } from 'ionicons/icons';
import './ListItem.css'
import { getPictogram } from '../ApiMethods';
import PopUp from '../components/PopUp';

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
    presentAlert({
      header: "¿Desea modificar: "+ props.text +"?",
      buttons: ['Cambiar'],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Color',
          attributes: {
            maxlength: 8,
          },
        },
      ],
    })
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

  return (     
    <IonItem key={props.id} class="remove-padding custom-padding" >
      <IonItem lines="none" class="remove-padding full-width" href={href}>
        {quantity()}
        <IonImg class="pictogram-on-button" src={pictogram} />
        <IonLabel class='ion-text-wrap'> {props.text}</IonLabel>
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