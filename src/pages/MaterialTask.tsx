import { IonFab, IonIcon, IonFabButton, IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonCol } from '@ionic/react';
import Header from '../components/Header';
import { checkmark, arrowBackOutline, arrowForwardOutline, add } from 'ionicons/icons';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import './Pages.css'

const MaterialTask: React.FC = () => {
  return (
    <>
      <Header title="Material" back settings={false}/>
      <IonContent fullscreen>
      <IonList>
          <div className="width-90">
            <CalendarPicker label='Seleccionar fecha límite' disabled={false} editButton={false} value=''/>

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
                      <IonCol>Cantidad</IonCol>
                      <IonCol>Material</IonCol>
                  </IonRow>
                  <IonRow>
                      Tipo de material                
                  </IonRow>
                </IonGrid>
              </IonRow>
            </IonGrid>
            
            <IonFabButton color="success" size='small'>
                      <IonIcon icon={add}></IonIcon>
            </IonFabButton>            

            <ToggleSwitch label='Feedback automático' checked={false}/>
            <ToggleSwitch label='Comentarios' checked/>

          </div>
        </IonList>
      </IonContent>
    </>
  );
};

export default MaterialTask;