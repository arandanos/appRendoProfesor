import { IonContent, IonGrid, IonPage, IonList, IonItem, IonIcon, IonInput, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import './Storage.css'
import { addCircleOutline, lockClosedOutline, personCircleOutline, personOutline, saveOutline, settingsOutline } from 'ionicons/icons';
import StyledButton from '../components/StyledButton';

const AddStudent: React.FC = () => {
    return (
        <IonPage>
            <Header title="Añadir alumno" back settings={false}/>
            <IonContent fullscreen>
                <IonGrid class="width-90">
                    <IonLabel>Introduce el nombre del alumno</IonLabel>
                    <IonItem shape="round" fill="outline">
                    <IonIcon slot="start" icon={personCircleOutline}/>
                        <IonSelect interface="popover" placeholder="Alumno">
                            <IonSelectOption>Manuel García</IonSelectOption>
                            <IonSelectOption>Franciso Barrios</IonSelectOption>
                            <IonSelectOption>Antonio Suárez</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonGrid>

                <IonGrid class="width-90">
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

                <IonGrid class="width-90">
                    <IonLabel>Añade una imagen o pictograma</IonLabel>
                    <IonItem shape="round" fill="outline"><IonIcon slot="start" icon={addCircleOutline}/>Nuevo pictograma</IonItem>
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