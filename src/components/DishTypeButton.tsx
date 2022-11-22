import './DishTypeButton.css'
import {
    IonRow,
    IonButton,
    IonImg,
    IonText,
    IonIcon,
    IonFabButton,
    IonCol
} from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../variables';

interface DishTypeButtonProps {
    id: string;
    name: string;
}

const DishTypeButton: React.FC<DishTypeButtonProps> = (props: DishTypeButtonProps) => {
 
    const [post, setPost] = useState<number>();

    useEffect(() => {
        axios.get(API_URL+"dish").then((response) => {
            setPost(response.data);
        });
    });

    const handleDeleteClick = () => {
        alert("Dish with id: " + props.id + " is going to be deleted!");
        axios.delete(API_URL+"dish/"+props.id)
        .then(response => {
            alert("Dish with id: " + props.id + " has been deleted!");
            setPost(response.status);
            
        });
    };
 
    return(
        <IonRow class='ion-justify-content-left'>
            {/* Podemos crear una clase/tipo de boton para esto mejor que el por defecto */}
            <IonCol size='9'>
                <IonButton class="tab-list-button" href='#'>
                    <IonImg slot='start' class="pictogram-header" src="https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false"></IonImg>
                    <IonText>{props.name}</IonText>
                </IonButton>
            </IonCol>
            <IonCol size='1'>
                <IonFabButton size='small' color="danger" onClick={handleDeleteClick} class="delete-button" id={"delete_"+props.id}>
                    <IonIcon icon={trashOutline}></IonIcon>    
                </IonFabButton> 
            </IonCol>
        </IonRow>
    );
};

export default DishTypeButton;