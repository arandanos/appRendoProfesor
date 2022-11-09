import {
    IonItem,
    IonLabel,
    IonIcon,
    IonInput
  } from '@ionic/react';
import { calendarClearOutline } from 'ionicons/icons';
  
  const CalendarPicker: React.FC<{ label: string }> = (props: { label: string }) => {

    var Label = () => {
      if(props.label){
        return (
          <IonLabel class="ion-text-wrap">{props.label}</IonLabel>
        )
      }

      return <></>
    }
  
    return (
        <>
          <Label/>
          <IonItem fill="outline" shape="round">
            <IonIcon slot="start" icon={calendarClearOutline} />
            <IonInput type="date"></IonInput>
          </IonItem>
        </>
    );
  
  }
  
  export default CalendarPicker;