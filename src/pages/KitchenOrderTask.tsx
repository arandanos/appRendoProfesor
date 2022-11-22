import { IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import Header from '../components/Header';
import ToggleSwitch from '../components/ToggleSwitch';
import CalendarPicker from '../components/CalendarPicker';
import './Pages.css'

const KitchenOrderTask: React.FC = () => {
  return (
    <>
      <Header title="Comanda" back settings={false}/>
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

            <ToggleSwitch label='Cálculo automático de número menús' checked={false}/>

            <ToggleSwitch label='Feedback automático' checked={false}/>

            <ToggleSwitch label='Comentarios' checked/>

          </div>
        </IonList>
      </IonContent>
    </>
  );
};

export default KitchenOrderTask;