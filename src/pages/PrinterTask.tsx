import Header from '../components/Header';
import { IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import './PrinterTask.css'


const PrinterTask: React.FC = () => {
  return (
    <>
      <Header title="Impresora" back settings={false}/>

      <IonContent>
      <IonList>
          <div className="width-90">
            <CalendarPicker label='Seleccionar fecha límite' disabled={false} editButton={false} value=''/>

            
            <IonItem shape="round" fill="outline">
              <IonSelect interface="popover" placeholder="Alumno">
                <IonSelectOption value="Manuel García">Manuel García</IonSelectOption>
                <IonSelectOption value="Franciso Barrios">Franciso Barrios</IonSelectOption>
                <IonSelectOption value="Antonio Suárez">Antonio Suárez</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonLabel>Introduce donde está el documento</IonLabel>
            <IonItem shape="round" fill="outline">
              <IonSelect interface="popover" placeholder="Lugar">
                <IonSelectOption value="Lugar1">Lugar 1</IonSelectOption>
                <IonSelectOption value="Lugar2">Lugar 2</IonSelectOption>
                <IonSelectOption value="Lugar3">Lugar 3</IonSelectOption>
              </IonSelect>
            </IonItem>


            <IonGrid>
              <IonRow>
                  <IonCol>
                      <IonLabel>Número de copias</IonLabel>
                      <IonItem shape="round" fill="outline">
                        <IonSelect interface="popover" placeholder="Número">
                          <IonSelectOption value="Lugar1">Lugar 1</IonSelectOption>
                          <IonSelectOption value="Lugar2">Lugar 2</IonSelectOption>
                          <IonSelectOption value="Lugar3">Lugar 3</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                  </IonCol>


                  <IonCol>
                  <IonLabel>Tinta</IonLabel>
                      <IonItem shape="round" fill="outline">
                        <IonSelect interface="popover" placeholder="Tipo">
                          <IonSelectOption value="Lugar1">Lugar 1</IonSelectOption>
                          <IonSelectOption value="Lugar2">Lugar 2</IonSelectOption>
                          <IonSelectOption value="Lugar3">Lugar 3</IonSelectOption>
                        </IonSelect>
                      </IonItem>                    
                  </IonCol>

              </IonRow>
            </IonGrid>


            <ToggleSwitch label='Activar cálculo automático del resumen del total de menús' checked={false}/>

            <ToggleSwitch label='Activar feedback automático' checked={false}/>

            <ToggleSwitch label='Activar comentarios' checked/>

          </div>
        </IonList>        
      </IonContent>
    </>
  );
};

export default PrinterTask;