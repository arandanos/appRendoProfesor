import { IonContent, IonGrid, IonPage, IonList, IonItem, IonIcon, IonInput, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './Storage.css'
import { addCircleOutline, cameraOutline, lockClosedOutline, personCircleOutline, personOutline, saveOutline, settingsOutline } from 'ionicons/icons';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';

const AddStudent: React.FC = () => {
    return (
        <IonPage>
            <Header title="Añadir alumno" back settings={false}/>
            <IonContent fullscreen>
                <IonGrid class="grid-with-button width-90">
                    <StyledInput label="Foto del Alumno" iconStart={cameraOutline} />
                    <StyledInput label="Nombre del Alumno" iconStart={personCircleOutline} />
                    <StyledButton label="Configuración Accesibilidad" id="open-modal" icon={settingsOutline} href="#"></StyledButton>
                    <StyledButton label="Modo de inicio de sesión" id="open-modal" icon={settingsOutline} href="#"></StyledButton>
                </IonGrid>
                <StyledButton label="Guardar" id="open-modal" icon={saveOutline} href="#"></StyledButton>
            </IonContent>
        </IonPage>
    )
};

export default AddStudent;