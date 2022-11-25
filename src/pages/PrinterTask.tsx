import Header from '../components/Header';
import { IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import './PrinterTask.css'

import { personOutline, printOutline, compassOutline, brushOutline} from 'ionicons/icons';

const PrinterTask: React.FC = () => {
  return (
    <>
      <Header title="Impresora" back settings={false}/>

      <IonContent fullscreen>
        <IonList>
            <div className="width-90">

              <CalendarPicker label='Introduce fecha de la tarea' disabled={false} editButton={false} value=''/>
              
              <IonLabel>Introduce el nombre del alumno</IonLabel>
              <IonItem shape="round" fill="outline">
              <IonIcon slot='start' icon={personOutline}/>
                <IonSelect interface="popover" placeholder="Alumno">
                  <IonSelectOption value="Manuel García">Manuel García</IonSelectOption>
                  <IonSelectOption value="Franciso Barrios">Franciso Barrios</IonSelectOption>
                  <IonSelectOption value="Antonio Suárez">Antonio Suárez</IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonLabel>Introduce donde está el documento</IonLabel>
              <IonItem shape="round" fill="outline">
              <IonIcon slot='start' icon={compassOutline}/>
                <IonSelect interface="popover" placeholder="Lugar">
                  <IonSelectOption value="Lugar1">Lugar 1</IonSelectOption>
                  <IonSelectOption value="Lugar2">Lugar 2</IonSelectOption>
                  <IonSelectOption value="Lugar3">Lugar 3</IonSelectOption>
                </IonSelect>
              </IonItem>


              <IonGrid className='PrinterTask'>
                <IonRow>
                    <IonCol size='auto'>
                        <IonLabel>Número de copias</IonLabel>
                        <IonItem shape="round" fill="outline">
                        <IonIcon slot='start' icon={printOutline}/>
                          <IonSelect interface="popover" placeholder="Número">
                            <IonSelectOption value="Lugar1">Lugar 1</IonSelectOption>
                            <IonSelectOption value="Lugar2">Lugar 2</IonSelectOption>
                            <IonSelectOption value="Lugar3">Lugar 3</IonSelectOption>
                          </IonSelect>
                        </IonItem>
                    </IonCol>


                    <IonCol size='auto'>
                    <IonLabel>Tinta</IonLabel>
                        <IonItem shape="round" fill="outline">
                          <IonIcon slot='start' icon={brushOutline}/>
                            <IonSelect interface="popover" placeholder="Tipo">                          
                              <IonSelectOption value="Lugar1">Lugar 1</IonSelectOption>
                              <IonSelectOption value="Lugar2">Lugar 2</IonSelectOption>
                              <IonSelectOption value="Lugar3">Lugar 3</IonSelectOption>
                            </IonSelect>
                        </IonItem>                    
                    </IonCol>

                </IonRow>
              </IonGrid>


              <IonItem>
                <ToggleSwitch label='Activar cálculo automático del resumen del total de menús' checked={false}/>
              </IonItem>

              <IonItem>
                <ToggleSwitch label='Activar feedback automático' checked={false}/>
              </IonItem>

              <IonItem>
               <ToggleSwitch label='Activar comentarios' checked={false}/>   
              </IonItem>

            </div>
          </IonList>
              
           

            

                          
      </IonContent>

    </>
  );
};

export default PrinterTask;