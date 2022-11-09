import { IonContent, IonItem, IonPage, IonList, IonLabel, IonInput, IonIcon, IonTextarea, IonFabButton } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import CalendarPicker from '../components/CalendarPicker';
import { cameraOutline, chatbubbleOutline, checkmarkOutline, clipboardOutline, createOutline, personOutline } from 'ionicons/icons';
import './KitchenOrderView.css'

const KitchenOrderView: React.FC = () => {
  return (
    <IonPage>
      <Header title="Comanda" settings back={false}/>
      <IonContent fullscreen>
        <IonList>
            <div className="width-90">
                <IonLabel>Alumno asignado</IonLabel>
                <IonItem shape='round' fill='outline'>
                    <IonIcon slot='start' icon={personOutline} />
                    <IonInput value="Nombre alumno" disabled/>
                    <IonIcon slot='end' icon={createOutline}/>
                </IonItem>
                <CalendarPicker label='Fecha límite de realización' disabled editable/>

                <IonLabel>Estado</IonLabel>
                <IonItem shape='round' fill='outline'>
                    <IonIcon slot='start' icon={clipboardOutline} />
                    <IonInput value="Completada" disabled/>
                    <IonIcon slot='end' icon={createOutline}/>
                </IonItem>

                <IonLabel>Dar feedback</IonLabel>
                <IonItem shape='round' fill='outline'>
                    <IonTextarea placeholder='Escribir feedback...'></IonTextarea>
                    <IonIcon slot='end' icon={cameraOutline}/>
                </IonItem>
                <div className='wrap-kitchen-order-buttons'>
                    <div className='wrap-kitchen-order-button'>
                        <IonFabButton>
                            <IonIcon icon={chatbubbleOutline}/>
                        </IonFabButton>
                    </div>
                    <div className='wrap-kitchen-order-button'>
                        <IonFabButton>
                            <IonIcon icon={checkmarkOutline}/>
                        </IonFabButton>
                    </div>
                </div>
            </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default KitchenOrderView;