import { IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { useRef, useState } from 'react';

const Pruebas: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
        
        <IonModal keepContentsMounted={true}>
            <IonDatetime id="datetime" presentation="date" locale="es-ES" value="2022-04-21"></IonDatetime>
        </IonModal>
      </IonContent>
    </IonPage>
  );

//   return (
//     <IonPage>
//       <Header title="Pruebas" settings back={false}/>
//       <IonContent fullscreen>
//         <IonButton id="modal">VEREEEE</IonButton>
//         <IonModal trigger='modal'>
//             <IonItem>
//                 <IonLabel>Fecha</IonLabel>
//                 <IonDatetime locale="es-ES" firstDayOfWeek={1} >
//                     <span slot="time-label">Hora</span>
//                 </IonDatetime>
//             </IonItem>
//         </IonModal>
//       </IonContent>
//     </IonPage>
//   );
};

export default Pruebas;
