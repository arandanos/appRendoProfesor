import {
    IonItem,
    IonLabel,
    IonIcon,
    IonInput
  } from '@ionic/react';
import { calendarClearOutline, createOutline } from 'ionicons/icons';
  
  const CalendarPicker: React.FC<{ label: string; disabled: boolean; editable: boolean }> = (props: { label: string; disabled: boolean; editable: boolean }) => {

    var Label = () => {
      if(props.label){
        return (
          <IonLabel class="ion-text-wrap">{props.label}</IonLabel>
        )
      }

      return <></>
    }

    var EditIcon = () => {
      if(props.editable){
        return (
          <IonIcon slot='end' icon={createOutline}/>
        )
      }

      return <></>
    }
  
    return (
        <>
          <Label/>
          <IonItem fill="outline" shape="round">
            <IonIcon slot="start" icon={calendarClearOutline} />
            <IonInput type="date" disabled={props.disabled}></IonInput>
            <EditIcon/>
          </IonItem>
        </>
    );
  
  }
  
  export default CalendarPicker;