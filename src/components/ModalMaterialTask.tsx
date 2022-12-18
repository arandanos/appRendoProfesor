import { IonCol, IonContent, IonFabButton, IonGrid, IonIcon, IonLabel, IonModal, IonRow } from "@ionic/react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { add, checkmarkCircleOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { sendGetAllRequest, sendGetByIDRequest } from "../ApiMethods";
import Header from "./Header";
import MaterialInputs from "./MaterialInputs";
import PopUp from "./PopUp";
import StyledButton from "./StyledButton";

interface ModalMaterialTaskProps {
    trigger: string;
    handleDoneClick: any,
}

const ModalMaterialTask: React.FC<ModalMaterialTaskProps> = (props: ModalMaterialTaskProps) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    // TODO: Revisar IDS en Material Input, ya que errores cuando mismo material. Sugerencia -> Value = {idInput: , idMAterial: } ?

    // * MATERIALES OBTENIDOS DE LA API
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        sendGetAllRequest("material_type").then(data => {
            setMaterials(data);
        })
    }, [])


    // * ARRAY DE IDS MATERIAL INPUTS
    const materialInputDefault = {
        colorSelected: {},
        quantityCounter: 0,
        materialSelected: {},
    }
    //* Array de Material Input, uno por cada material que se va a añadir a la petición
    const quantityOptionDefault = {
        idColor: -1,
        quantity: 0
    }


    // * Hooks para los diferentes inputs
    const [materialInputs, setMaterialInputs] = useState(materialInputDefault);
    const [colorOptions, setColorOptions] = useState([]);
    const [quantityOptions, setQuantityOptions] = useState([quantityOptionDefault]);
    const [maxQuantity, setMaxQuantity] = useState(0);

    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
            sessionStorage.removeItem('color')
            sessionStorage.removeItem('material')
            sessionStorage.removeItem('quantity')
            setMaterialInputs(materialInputDefault);
            setColorOptions([]);
            setMaxQuantity(0);
            setQuantityOptions([quantityOptionDefault]);
        }
    }

    // * EVENTO AÑADIR NUEVA FILA: Se dispara al darle al botón de +
    // const handleAddClick = () => {
    //     // * Asigna el siguiente id disponible
    //     const newMaterialInput = materialInputDefault;
    //     newMaterialInput.id = materialInputs.length;

    //     setMaterialInputs([...materialInputs, newMaterialInput])
    //     setColorOptions([...colorOptions, []]);
    //     setQuantityOptions([...quantityOptions, [quantityOptionDefault]]);
        // setMaxQuantities([...maxQuantities, 0]);
    // }

    // * EVENTO ELIMINAR INPUT: Se dispara al darle al botón de basura
    // const handleDeleteClick = (idInput: number, selectRef: HTMLIonSelectElement) => {
    //     selectRef.value = null;
    //     if (materialInputs.length > 1) {
    //         console.log(selectRef)
    //         var toDelete = materialInputs[idInput].id; //* Variable para almacenar la posicion del elemento a eliminar
         
           
    //         var newInputs = materialInputs.filter((input) => input.id != idInput);
    //         setMaterialInputs(newInputs);
    //         console.log(newInputs);

    //         // TODO: ACTUALIZAR VALOR DE INPUTS DE FORMA DINAMICA? no sé como 

    //         // * Modificar el valor de id de los elementos siguientes al que se ha eliminado para que sigan siendo consecutivos.
    //         for (let i = toDelete; i < materialInputs.length; i++) {
    //             materialInputs[i].id--;
    //         }

    //     }
    //     // TODO: si solo hay uno clear inputs al darle al botón
    // }

    // * EVENTO SELECCIONAR MATERIAL
    const handleMaterialSelect = (materialSelected: any, id: string) => {

        sessionStorage.setItem('material', JSON.stringify(materialSelected));

        var newMaterialInputs = materialInputs
        newMaterialInputs.materialSelected = materialSelected;
        setMaterialInputs(newMaterialInputs);

        var selectedColors: any = [];
        var selectedQuantities: any = [];

        //* SE OBTIENEN DE LA API LOS COLORES DEL MATERIAL SELECCIONADO
        sendGetByIDRequest("material/type", materialSelected['_id']).then(data => {
            data.map((material: any) => {
                selectedColors.push(material['_color']);
                selectedQuantities.push({
                    idColor: material['_color']['_id'],
                    quantity: material['_quantity']
                })

            })

            //* ACTUALIZO LOS COLORES 
            setColorOptions(selectedColors);

            //* Actualizo las Cantidades maximas
            setQuantityOptions(selectedQuantities);
        })

    }

    //* EVENTO SELECCIONAR COLOR
    const handleColorSelect = (colorSelected: any) => {

        sessionStorage.setItem('color', JSON.stringify(colorSelected));

        var newMaterialInputs = materialInputs
        newMaterialInputs.colorSelected = colorSelected;
        setMaterialInputs(newMaterialInputs);

        //* ACTUALIZAR LA CANTIDAD MAXIMA
        quantityOptions.map(quantityOpt => {
            if (quantityOpt.idColor == colorSelected['_id']) {
                setMaxQuantity(quantityOpt.quantity);
            }
        })
    }

    //* EVENTO CAMBIAR LA CANTIDAD PEDIDA
    const handleCounterChange = (value: number) => {
        sessionStorage.setItem('quantity', value.toString());

        var newMaterialInputs = materialInputs
        newMaterialInputs.quantityCounter = value;
        setMaterialInputs(newMaterialInputs);
    }  

    return (
        <IonModal ref={modal} trigger={props.trigger} onWillDismiss={(ev) => onWillDismiss(ev)}>
            <Header title="Añadir Materiales" back></Header>
            <IonContent className="ion-padding">
                {/*Para hacer el tema de la cantidad, material ..etc he hecho un grid en donde cada fila sea pues los 3 inputs, y dentro de cada fila 2 filas para ir poniendo las cosas, en los select he hecho que en cuanto se haga un cambio
            se cambien automaticamente en el array con todas las cosas, para la visualización hago que se añada una fila por cada elemento del array, con el .map*/}
                <IonGrid class="grid-with-button width-90 scroll">
                        <MaterialInputs materials={materials} colors={colorOptions} maxQuantity={maxQuantity} handleCounterChange={handleCounterChange} handleMaterialSelect={handleMaterialSelect} handleColorSelect={handleColorSelect}></MaterialInputs>
                
                    {/* <IonRow class="center-content">
                        <IonFabButton class="center" color="success" size='small' onClick={handleAddClick}>
                            <IonIcon icon={add}></IonIcon>
                        </IonFabButton>
                    </IonRow> */}
                </IonGrid>
                <IonRow>
                    <IonCol size="6">
                        <StyledButton color="danger" icon={checkmarkCircleOutline} label="Cancelar" onClick={() => {
                            confirm();
                        }} />
                    </IonCol>
                    <IonCol size="6">
                        <StyledButton color="success" icon={checkmarkCircleOutline} label="Hecho" onClick={() => {
                            props.handleDoneClick(sessionStorage.getItem('material'), sessionStorage.getItem('color'), sessionStorage.getItem('quantity'));
                            confirm();
                        }} />
                    </IonCol>

                </IonRow>         

            </IonContent>
        </IonModal>
    );
}

export default ModalMaterialTask;