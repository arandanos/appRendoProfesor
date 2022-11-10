import './DishTypeButton.css'
import {
    IonRow,
    IonButton,
    IonImg,
    IonText,
    IonIcon
} from '@ionic/react';
import { trashOutline } from 'ionicons/icons';

const DishTypeButton: React.FC<{name: string}> = (dish: {name: string}) => {
    return(
        <IonRow class='ion-justify-content-left'>
            {/* Podemos crear una clase/tipo de boton para esto mejor que el por defecto */}
            <IonButton expand="full" class="tab-list" href='#'>
                <IonImg slot='start' class="pictogram-header" src="https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false"></IonImg>
                <IonText>{dish.name}</IonText>
                <IonIcon slot='end' icon={trashOutline}></IonIcon>
            </IonButton>
        </IonRow>
    );
};

export default DishTypeButton;