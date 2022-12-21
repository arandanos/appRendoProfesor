import { IonButton, IonCol, IonContent, IonFabButton, IonGrid, IonHeader, IonIcon, IonList, IonModal, IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { checkmarkCircleOutline, closeCircleOutline, closeOutline, settingsOutline } from "ionicons/icons";
import { useRef, useState } from "react";
import { sendGetARASAACRequest } from "../ApiMethods";
import Header from "./Header";
import ListItem from "./ListItem";
import StyledButton from "./StyledButton";

interface ModalSearchPictogramProps {
    trigger: string;
    handlePictogramClick: any;
}


const ModalSearchPictogram: React.FC<ModalSearchPictogramProps> = (props: ModalSearchPictogramProps) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
           
        }
    }

    const [data, setData] = useState([]);
    // let [results, setResults] = useState([...data]);
  
    const handleChange = (ev: Event) => {
      let query = "";
      const target = ev.target as HTMLIonSearchbarElement;
      if (target) query = target.value!.toLowerCase();
  
      sendGetARASAACRequest(query).then( (resp) => {
        setData(resp);
      })
    }

    return (
        <IonModal ref={modal} trigger={props.trigger} onWillDismiss={(ev) => onWillDismiss(ev)}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle class="ion-text-wrap">Buscar Pictograma</IonTitle>
                    <IonFabButton slot="end" size="small" class='margin-right-settings' color="danger" onClick={() => {confirm();}}>
                        <IonIcon icon={closeOutline} />
                    </IonFabButton>      
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonSearchbar onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
                <IonGrid class="grid-with-button scroll">
                    <IonList class="scroll">
                        {data.map(pic => (
                            <ListItem text={pic['keywords'][0]['keyword']} pictogram={'https://api.arasaac.org/api/pictograms/' + pic["_id"] + '?resolution=500&download=false'} handleSelectClick={props.handlePictogramClick} confirm={confirm} value={'https://api.arasaac.org/api/pictograms/' + pic["_id"] + '?resolution=500&download=false'} />
                        ))}
                    </IonList>
                </IonGrid>
            </IonContent>
        </IonModal>)
}

export default ModalSearchPictogram;