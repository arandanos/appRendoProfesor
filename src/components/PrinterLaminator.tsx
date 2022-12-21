import './PrinterLaminator.css'
import {IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonIcon, IonInput } from '@ionic/react';
import ToggleSwitch from './ToggleSwitch';
import StyledButton from './StyledButton';
import StyledInput from './StyledInput';
import CalendarPicker from '../components/CalendarPicker';
import { personOutline, printOutline, compassOutline, brushOutline, checkmarkCircleOutline} from 'ionicons/icons';




const PrinterLaminator: React.FC<{ printer: boolean}> = (props: { printer: boolean}) => {

  var Printer = () => {
      if(props.printer){
        return (
          <IonGrid class="PrinterTask">
            <IonRow>
              <IonCol size='6'>
                <StyledInput iconStart={printOutline} label='Nº de copias'></StyledInput>
              </IonCol>

              <IonCol size='6'>
                <IonLabel></IonLabel>
                  <IonItem shape="round" fill="outline">
                  <IonIcon class="boton1" slot='start' icon={brushOutline}/>
                      <IonSelect interface="popover" placeholder="Tipo">                          
                      <IonSelectOption value="Tinta1">Tinta 1</IonSelectOption>
                      <IonSelectOption value="Tinta2">Tinta 2</IonSelectOption>
                      <IonSelectOption value="Tinta3">Tinta 3</IonSelectOption>
                      </IonSelect>
                  </IonItem>                    
              </IonCol>
            </IonRow>
            
          </IonGrid>
        )
      }
      return <></>
  }

  return (
      <IonList>
      <div className="width-90">

        <CalendarPicker label='Introduce fecha de la tarea' disabled={false} editButton={false} value=''/>
        <IonRow>
          <IonCol>
            <IonLabel>Introduce el nombre del alumno</IonLabel>
            <IonItem shape="round" fill="outline">
              <IonIcon slot='start' icon={personOutline}/>
                <IonSelect interface="popover" placeholder="Alumno">
                <IonSelectOption value="Manuel García">Manuel García</IonSelectOption>
                <IonSelectOption value="Franciso Barrios">Franciso Barrios</IonSelectOption>
                <IonSelectOption value="Antonio Suárez">Antonio Suárez</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol>
            <StyledInput iconStart={compassOutline} label='Dónde está el documento'></StyledInput>                  
          </IonCol>
          <IonCol>
            <Printer/>
          </IonCol>
        </IonRow>

        

        <IonItem>
          <ToggleSwitch id='1' label='Activar feedback automático' checked={false} />
        </IonItem>

        <IonItem>
         <ToggleSwitch id='2' label='Activar comentarios' checked={false}/>   
        </IonItem>

        
      </div>
    <StyledButton label="Crear petición" icon={checkmarkCircleOutline} id="confirm-printer/laminator-task"/>

    </IonList>
    
        
  );

}

export default PrinterLaminator;