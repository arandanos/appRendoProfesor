import { IonContent, IonGrid, IonPage, IonList, IonItem, IonIcon, IonInput, IonLabel, IonSelect, IonSelectOption, IonFab, IonFabButton, IonButton, IonButtons, IonTitle, IonToolbar, IonModal } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './Storage.css'
import { addCircleOutline, closeOutline, lockClosedOutline, personCircleOutline, personOutline, saveOutline } from 'ionicons/icons';
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
                <IonGrid class="width-90-2">
                    <IonLabel>Introduce el nombre del profesor</IonLabel>
                    <StyledInput label="Nombre del profesor" iconStart={personCircleOutline}/>
                </IonGrid>

                <IonGrid class="width-90-2">
                    <IonLabel>introduce un nombre de usuario</IonLabel>
                    <StyledInput label="Usuario" iconStart={personOutline}/>
                </IonGrid>

                <IonGrid class="width-90-2">
                    <IonLabel>Introduce contraseña</IonLabel>
                    <StyledInput label="Contraseña" iconStart={lockClosedOutline}/>
                </IonGrid>

                <IonGrid class="width-90-2">
                    <IonLabel>Vuelve a introducir la contraseña</IonLabel>
                    <StyledInput label="Contraseña" iconStart={lockClosedOutline}/>
                </IonGrid>
                    
                <IonGrid class="width-90-2">
                    <IonLabel>Añade una imagen o pictograma</IonLabel>
                    <StyledInput label="Nuevo pictograma" iconStart={lockClosedOutline}/>
                </IonGrid>

                <ToggleSwitch label='Permisos de administrador' checked id="admin_permissions"/>

                <IonGrid class="button-save">
                    <StyledButton label="Guardar" id="open-modal" icon={addCircleOutline} href="#"></StyledButton>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default AddTeacher;