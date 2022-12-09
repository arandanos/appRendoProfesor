import { IonContent, useIonAlert, IonButton, IonIcon, IonFabButton, IonButtons, IonModal, IonTitle, IonToolbar, IonFab } from '@ionic/react';
import { useRef } from 'react';
import './PopUp.css'
import { checkmark, closeOutline, addCircleOutline } from 'ionicons/icons';
import StyledButton from './StyledButton';
import '../pages/DishTypes.tsx';

interface PopUpProps {
    label: string;
    title: string;
    popUpContent: JSX.Element;
    type: string;
    newDish: any;
}

const CreateDishPopUp: React.FC<PopUpProps> = (props: PopUpProps) => {

    const modal = useRef<HTMLIonModalElement>(null);
    const [presentAlert] = useIonAlert();

    function dismiss() {
        modal.current?.dismiss();
    }
    
    //Funcion que llama al padre y cierra el popup
    function newDish() {
        //Comprobamos que los campos no estén vacíos
        if((sessionStorage.getItem("name") == "") || (sessionStorage.getItem("pictogram") == "")){
            presentAlert({
                header: 'Atención',
                subHeader: 'Faltan campos por completar',
                message: 'Por favor, rellene todos los campos',
                buttons: ['OK']
            })
        } else {
            console.log(sessionStorage.getItem("name"));
            props.newDish(props.type);
            dismiss();
        }
    }

    return(
        <>
            <StyledButton label={props.label} id="open-modal" icon={addCircleOutline}></StyledButton>

            <IonModal class="pop-up-modal" ref={modal} trigger="open-modal">
                <IonContent scrollY={false}>

                    <IonToolbar>
                        <IonTitle>{props.title}</IonTitle>
                        <IonButtons slot="end">
                            <IonButton color="light" onClick={() => dismiss()}>
                                <IonIcon slot="start" icon={closeOutline}></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>

                    {props.popUpContent}

                    <IonFab vertical="bottom" horizontal='center'>
                        <IonFabButton color="success" onClick={newDish}>
                            <IonIcon icon={checkmark}></IonIcon>
                        </IonFabButton>
                    </IonFab>

                </IonContent>
            </IonModal>
        </>
    )
}

export default CreateDishPopUp;