import { IonContent, IonButton, IonIcon, IonFabButton, IonButtons, IonModal, IonTitle, IonToolbar, IonFab } from '@ionic/react';
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

    function dismiss() {
        modal.current?.dismiss();
    }
    
    //Funcion que llama al padre y cierra el popup
    function newDish() {
        //Podria comprobar con sessions que los campos estén vacíos o no
        props.newDish(props.type);
        dismiss();
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
                        <IonFabButton color="success" onClick={() => {newDish()}}>
                            <IonIcon icon={checkmark}></IonIcon>
                        </IonFabButton>
                    </IonFab>

                </IonContent>
            </IonModal>
        </>
    )
}

export default CreateDishPopUp;