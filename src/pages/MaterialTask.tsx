import { IonPage,IonFab, IonIcon, IonFabButton, IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import Header from '../components/Header';
import { checkmark, arrowBackOutline, arrowForwardOutline, add, trash } from 'ionicons/icons';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import './Pages.css'
import { useState } from 'react';

const MaterialTask: React.FC = () => {

  return (
    <IonPage>
      <Header title="Material" back settings={false}/>
      <IonContent fullscreen class="scroll-content">      
      <IonList>
          <div className="width-90">
            <CalendarPicker label='Selecciona fecha de la tarea' disabled={false} editButton={false} value=''/>

            <IonLabel>Seleccionar alumno</IonLabel>
            <IonItem shape="round" fill="outline">
              <IonSelect interface="popover" placeholder="Alumno">
                <IonSelectOption value="apples">Manuel García</IonSelectOption>
                <IonSelectOption value="oranges">Franciso Barrios</IonSelectOption>
                <IonSelectOption value="bananas">Antonio Suárez</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonGrid>

              <IonRow>
                <IonGrid>
                  <IonRow>
                      <IonCol>
                      <IonLabel>Cantidad</IonLabel>
                        <IonItem shape="round" fill="outline">
                          <IonFabButton size='small' >
                              <IonIcon icon={add}></IonIcon>
                          </IonFabButton>
                          0
                        </IonItem>
                      </IonCol>


                      

                      <IonCol>
                      <IonLabel>Material</IonLabel>
                      <IonItem shape="round" fill="outline">
                      <IonSelect interface="popover" placeholder="0">
                            <IonSelectOption>1</IonSelectOption>
                            <IonSelectOption>2</IonSelectOption>
                            <IonSelectOption>3</IonSelectOption>
                          </IonSelect>
                      </IonItem>
                      </IonCol>
                  </IonRow>

                  <IonRow>
                      <IonLabel>Color</IonLabel>
                      <IonItem shape="round" fill="outline">
                        <IonSelect interface="popover" placeholder="Selecciona un tipo">
                            <IonSelectOption>Rojo</IonSelectOption>
                            <IonSelectOption>Amarillo</IonSelectOption>
                            <IonSelectOption>Verde</IonSelectOption>
                          </IonSelect>
                      </IonItem>

                      <IonFabButton color="danger" size='small'>
                        <IonIcon icon={trash}></IonIcon>
                      </IonFabButton>           
                  </IonRow>
                </IonGrid>
              </IonRow>

              <IonRow text-center>
                <IonCol className='ButtonSuccess'>
                  <IonFabButton color="success" size='small'>
                          <IonIcon icon={add}></IonIcon>
                  </IonFabButton>
                </IonCol>                
              </IonRow>

            </IonGrid>

            
                        

            <ToggleSwitch label='Feedback automático' checked={false}/>
            <ToggleSwitch label='Comentarios' checked/>

          </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MaterialTask;