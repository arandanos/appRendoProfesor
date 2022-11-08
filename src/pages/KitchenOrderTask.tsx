import { IonContent, IonList, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonToggle, IonIcon } from '@ionic/react';
import { calendarClearOutline } from 'ionicons/icons';
import Header from '../components/Header';
import './Pages.css'

const KitchenOrderTask: React.FC = () => {
  return (
    <>
      <Header title="Comanda" back settings={false}/>
      <IonContent fullscreen>
        <IonList>
        <div className="width-90">
          <IonLabel>Fecha límite</IonLabel>
          <IonItem fill="outline" shape="round">
            <IonIcon slot="start" icon={calendarClearOutline} />
            <IonInput type="date"></IonInput>
          </IonItem>

          <IonItem shape="round">
            <IonSelect interface="popover" placeholder="Alumno">
              <IonSelectOption value="apples">Manuel García</IonSelectOption>
              <IonSelectOption value="oranges">Franciso Barrios</IonSelectOption>
              <IonSelectOption value="bananas">Antonio Suárez</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem shape="round">
            <IonLabel class="ion-text-wrap">Cálculo automático de número menús</IonLabel>
            <IonToggle slot="start"></IonToggle>
          </IonItem>

          <IonItem shape="round">
            <IonLabel>Feedback automático</IonLabel>
            <IonToggle slot="start"></IonToggle>
          </IonItem>

          <IonItem shape="round">
            <IonLabel>Comentarios</IonLabel>
            <IonToggle slot="start" checked={true}></IonToggle>
          </IonItem>

        </div>
        </IonList>
      </IonContent>
    </>
  );
};

export default KitchenOrderTask;