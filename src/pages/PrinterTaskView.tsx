import { IonContent, IonGrid, IonLoading, IonPage } from "@ionic/react/dist/types/components";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ListItem from "../components/ListItem";

const PrinterTaskView: React.FC = () => {
    const [task, setTask] = useState();
    const [colors, setColors] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
        setShowLoading(false)
    }, [])

    if(isLoading){
        return(
        <div className='App'>
            <IonLoading 
            isOpen={showLoading} 
            onDidPresent={() => setShowLoading(true)}
            message={'Cargando...'}
            duration={1000}
            />
        </div>
        );
    }

    var arrayElementos: Array<JSX.Element> = [
        <IonGrid class="list-container-materials">
            {colors.map(task => {
                return (
                    <ListItem quantity={task['_quantity']}
                        text={task['_color']['_text']}
                        pictogram={task['_color']['_pictogram']}
                        id={task['_id']}
                    ></ListItem>
                )
            })}
        </IonGrid>
    ]

    return (
        <IonPage>
            <Header title= {"Impresión: " + task!['_name']['_text']} back settings={false}  />
            <IonContent fullscreen>
                    {/* {arrayElementos} */}
            </IonContent>
        </IonPage>
    );
};

export default PrinterTaskView;