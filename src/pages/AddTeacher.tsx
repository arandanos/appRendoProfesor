import { IonContent, IonGrid, IonPage, IonList, IonItem, IonIcon, IonInput, IonLabel, IonSelect, IonSelectOption, IonFab, IonFabButton, IonButton, IonButtons, IonTitle, IonToolbar, IonModal } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './Storage.css'
import { addCircleOutline, cameraOutline, closeOutline, lockClosedOutline, personCircleOutline, personOutline, saveOutline } from 'ionicons/icons';
import ToggleSwitch from '../components/ToggleSwitch';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';

const AddTeacher: React.FC = () => {

    const clearSessions = () => {
        sessionStorage.removeItem("admin_permissions");
    }

    const content = ( 
        <IonList class='width-90' >
          <IonItem fill="outline" shape="round">
            <IonIcon slot="start" icon={saveOutline} />
            <IonInput type="text" placeholder='Nombre de la Clase' ></IonInput>
          </IonItem>
        </IonList>
      )

    return (
        <IonPage>
            <Header title="Añadir profesor" back settings={false}/>
            <IonContent fullscreen>
                <IonGrid class="grid-with-button width-90">
                    <StyledInput label="Foto del Profesor" iconStart={cameraOutline}/>
                    <StyledInput label="Nombre del Profesor" iconStart={personCircleOutline}/>
                    <StyledInput label="Nombre de Usuario" iconStart={personOutline} />
                    <StyledInput label="Introduce la Contraseña" iconStart={lockClosedOutline} />
                    <StyledInput label="Confirmar Contraseña" iconStart={lockClosedOutline} />
                    
                    <ToggleSwitch label='Permisos de administrador' id="admin_permissions" />
                </IonGrid>

                <StyledButton label="Crear Profesor" id="open-modal" icon={addCircleOutline} href="#"></StyledButton>

            </IonContent>
        </IonPage>
    )
};

export default AddTeacher;