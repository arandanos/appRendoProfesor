import './MyClassesList.css';
import { trashOutline } from 'ionicons/icons';
import {IonItem, IonImg, IonLabel, IonIcon, IonFabButton, IonButton} from '@ionic/react'
import { restaurantOutline } from 'ionicons/icons';
import { addCircleOutline } from 'ionicons/icons';



const AddButton: React.FC<{ text: string;  }> = (props: { text: string; }) => {
    return (       
      <IonButton class="add-button" fill="outline" shape="round" expand="block" >
              <IonIcon slot="start" icon={addCircleOutline}></IonIcon>
                {props.text}              
        </IonButton>

    )
}

export default AddButton;