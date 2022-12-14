import { IonContent, IonGrid, IonPage, IonList, IonItem, IonIcon, IonInput, IonLabel, IonSelect, IonSelectOption, IonFab, IonFabButton, IonButton, IonButtons, IonTitle, IonToolbar, IonModal } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './Storage.css'
import { addCircleOutline, lockClosedOutline, personCircleOutline, personOutline, saveOutline } from 'ionicons/icons';
import ToggleSwitch from '../components/ToggleSwitch';
import StyledButton from '../components/StyledButton';

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
                <IonGrid class="width-90">
                    <IonLabel>Introduce el nombre del profesor</IonLabel>
                    <IonItem shape="round" fill="outline">
                    <IonIcon slot="start" icon={personCircleOutline}/>
                        <IonSelect interface="popover" placeholder="Profesor">
                            <IonSelectOption>Manuel García</IonSelectOption>
                            <IonSelectOption>Franciso Barrios</IonSelectOption>
                            <IonSelectOption>Antonio Suárez</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonGrid>

                <IonGrid class="width-90-2">
                    <IonLabel class="padding-top">Introduce un nombre de usuario</IonLabel>
                    <IonItem shape="round" fill="outline">
                    <IonIcon slot="start" icon={personOutline}/>
                        <IonSelect interface="popover" placeholder="Alumno">
                            <IonSelectOption>Manuel García</IonSelectOption>
                            <IonSelectOption>Franciso Barrios</IonSelectOption>
                            <IonSelectOption>Antonio Suárez</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonGrid>
                    

                <IonGrid class="width-90-2">
                    <IonLabel>Introduce contraseña</IonLabel>
                    <IonItem shape="round" fill="outline"><IonIcon slot="start" icon={lockClosedOutline}/>Contraseña</IonItem>
                </IonGrid>

                <IonGrid class="width-90-2">
                    <IonLabel>Vuelve a introducir la contraseña</IonLabel>
                    <IonItem shape="round" fill="outline"><IonIcon slot="start" icon={lockClosedOutline}/>Contraseña</IonItem>
                </IonGrid>
                    
                <IonGrid class="width-90-2">
                    <IonLabel>Añade una imagen o pictograma</IonLabel>
                    <IonItem shape="round" fill="outline"><IonIcon slot="start" icon={addCircleOutline}/>Nuevo pictograma</IonItem>
                </IonGrid>

                <ToggleSwitch label='Permisos de administrador' checked id="admin_permissions"/>

                <IonGrid class="button-save">
                    <StyledButton label="Guardar" id="open-modal" icon={saveOutline} href="#"></StyledButton>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default AddTeacher;