import { IonContent, IonGrid, IonPage, IonList, IonItem, IonIcon, IonInput, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './Storage.css'
import { addCircleOutline, lockClosedOutline, personCircleOutline, personOutline, saveOutline, settingsOutline } from 'ionicons/icons';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';

const AddStudent: React.FC = () => {
    return (
        <IonPage>
            <Header title="Añadir alumno" back settings={false}/>
            <IonContent fullscreen>
            <IonGrid class="width-90-2">
                    <IonLabel>Introduce el nombre del alumno</IonLabel>
                    <StyledInput label="Nombre del profesor" iconStart={personCircleOutline}/>
                </IonGrid>

                <IonGrid class="width-90-2">
                    <IonLabel>introduce un nombre de usuario</IonLabel>
                    <StyledInput label="Usuario" iconStart={personOutline}/>
                </IonGrid>

                <IonGrid class="width-90-2">
                    <IonLabel>Añade una imagen o pictograma</IonLabel>
                    <StyledInput label="Nuevo pictograma" iconStart={lockClosedOutline}/>
                </IonGrid>

                <IonGrid class="width-100">
                    <StyledButton label="Configuración Accesibilidad" id="open-modal" icon={settingsOutline} href="#"></StyledButton>
                </IonGrid>

                <IonGrid class="width-100">
                    <StyledButton label="Modo de inicio de sesión" id="open-modal" icon={settingsOutline} href="#"></StyledButton>
                </IonGrid>

                <IonGrid class="button-save">
                    <StyledButton label="Guardar" id="open-modal" icon={saveOutline} href="#"></StyledButton>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default AddStudent;