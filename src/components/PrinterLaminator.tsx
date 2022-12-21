import './PrinterLaminator.css'
import {IonItem, IonSelect, IonSelectOption, IonGrid, IonIcon} from '@ionic/react';
import ToggleSwitch from './ToggleSwitch';
import StyledButton from './StyledButton';
import StyledInput from './StyledInput';
import CalendarPicker from '../components/CalendarPicker';
import { personOutline, printOutline, brushOutline, checkmarkCircleOutline, briefcaseOutline } from 'ionicons/icons';

const PrinterLaminator: React.FC<{ printer: boolean }> = (props: { printer: boolean }) => {

  var Printer = () => {
    if (props.printer) {
      return (
        <>
          <StyledInput iconStart={printOutline} type="number" label='Nº de copias'></StyledInput>
          <IonItem shape="round" fill="outline">
            <IonIcon slot='start' icon={brushOutline} />
            <IonSelect interface="popover" placeholder="Tinta">
              <IonSelectOption value="Tinta1">Tinta 1</IonSelectOption>
              <IonSelectOption value="Tinta2">Tinta 2</IonSelectOption>
              <IonSelectOption value="Tinta3">Tinta 3</IonSelectOption>
            </IonSelect>
          </IonItem>
        </>
      )
    }
    return <></>
  }

  return (
    <>
      <IonGrid class="width-90 grid-with-button scroll">
        <CalendarPicker label='Introduce fecha de la tarea' disabled={false} editButton={false} value='' />
        <IonItem shape="round" fill="outline">
          <IonIcon slot='start' icon={personOutline} />
          <IonSelect interface="popover" placeholder="Alumno">
            <IonSelectOption value="Manuel García">Manuel García</IonSelectOption>
            <IonSelectOption value="Franciso Barrios">Franciso Barrios</IonSelectOption>
            <IonSelectOption value="Antonio Suárez">Antonio Suárez</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem shape="round" fill="outline">
          <IonIcon slot='start' icon={briefcaseOutline} />
          <IonSelect interface="popover" placeholder="Clase">
            <IonSelectOption value="Clase A">Clase A</IonSelectOption>
            <IonSelectOption value="Clase B">Clase B</IonSelectOption>
            <IonSelectOption value="Clase C">Clase C</IonSelectOption>
          </IonSelect>
        </IonItem>

        <Printer />

        <ToggleSwitch id='1' label='Auto feedback' checked={false} />
        <ToggleSwitch id='2' label='Comentarios' checked={false} />
      </IonGrid>
      <StyledButton label="Crear petición" icon={checkmarkCircleOutline} id="confirm-printer/laminator-task" />
    </>


  );

}

export default PrinterLaminator;