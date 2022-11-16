import {
    IonItem,
    IonLabel,
    IonIcon,
    IonDatetime,
    IonModal,
    IonDatetimeButton,
  } from '@ionic/react';
import { calendarOutline, createOutline } from 'ionicons/icons';
import './CalendarPicker.css'

interface CalendarPickerProps{
  label: string;
  disabled: boolean; 
  editButton: boolean, 
  value?: string
}
  
  const CalendarPicker: React.FC<CalendarPickerProps> = (props: CalendarPickerProps) => {

    var Label = () => {
      if(props.label){
        return (
          <IonLabel class="ion-text-wrap">{props.label}</IonLabel>
        )
      }

      return <></>
    }

    var EditIcon = () => {
      if(props.editButton){
        return (
          <IonIcon slot='end' icon={createOutline}/>
        )
      }

      return <></>
    }

    var DateTime = () => {
      if(props.value){
        return <IonDatetime id="datetime" presentation="date" locale="es-ES" value={props.value}></IonDatetime>
      } else {
        return <IonDatetime id="datetime" presentation="date" locale="es-ES"></IonDatetime>
      }
    }

    return (
        <>
          <Label/>
          <IonItem shape="round"  class="item-remove-animate" lines='none'>
            <IonIcon slot="start" icon={calendarOutline} />
            {/* <IonInput type="date" disabled={props.disabled} ></IonInput> */}
            
            <IonDatetimeButton datetime="datetime" disabled={props.disabled} ></IonDatetimeButton>
        
            <IonModal keepContentsMounted={true}>
                <DateTime/>
            </IonModal>
            <EditIcon/>
          </IonItem>
        </>
    );
  
  }
  
  export default CalendarPicker;