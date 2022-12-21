import { IonContent, IonButton, IonIcon, IonFabButton, IonButtons, IonModal, IonTitle, IonToolbar, IonFab, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useRef } from 'react';
import './PopUp.css'
import { checkmark, closeOutline, addCircleOutline } from 'ionicons/icons';
import StyledButton from './StyledButton';
import '../pages/Pages.css'

interface PopUpProps {
    label: string;
    title: string;
    popUpContent: JSX.Element;
    doneAction?: any;
    hasSearchBar?: boolean;
}

const PopUp: React.FC<PopUpProps> = (props: PopUpProps) => {

    const modal = useRef<HTMLIonModalElement>(null);

    function dismiss() {
        modal.current?.dismiss();
    }

    const cssClass = () => {
        return "pop-up-modal " + (props.hasSearchBar? "pop-up-search" : "")
    };

    return(
        <>
            <StyledButton label={props.label} id="open-modal" icon={addCircleOutline}></StyledButton>

            <IonModal class={cssClass()} ref={modal} trigger="open-modal">
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
                        <IonFabButton color="success" onClick={props.doneAction} >
                            <IonIcon icon={checkmark}></IonIcon>
                        </IonFabButton>
                    </IonFab>

                </IonContent>
            </IonModal>
        </>
    )
}

export default PopUp;