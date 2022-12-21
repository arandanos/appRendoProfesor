import { IonContent, IonGrid, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { sendDeleteIDRequest, sendGetAllRequest } from "../ApiMethods";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

const PictogramManagement:React.FC = () => {

    const [pictograms, setPictograms] = useState([]);

    useEffect(() => {
        sendGetAllRequest('accessible_element').then(data => {
            setPictograms(data);
        })
    }, [])

    const handleDeleteClick = (id : string) => {
        sendDeleteIDRequest('accessible_element', id);
        window.location.reload();
    }

    return (
        <IonPage>
            <Header title="Gestión de Pictogramas" back></Header>
            <IonContent fullscreen>
                <IonGrid class="scroll">
                    {pictograms.map((pictogram : any) => {
                        return (
                          <ListItem id={pictogram['_id']} text={pictogram['_text']} pictogram={pictogram['_pictogram']} handleEdit={null} handleDelete={handleDeleteClick}></ListItem>
                        )
                      })}
                </IonGrid>
            </IonContent>
        </IonPage>);
}

export default PictogramManagement;