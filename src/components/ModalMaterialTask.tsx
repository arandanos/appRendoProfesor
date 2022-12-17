import { IonContent, IonFabButton, IonGrid, IonIcon, IonModal, IonRow } from "@ionic/react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { add, checkmarkCircleOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { sendGetAllRequest, sendGetByIDRequest } from "../ApiMethods";
import Header from "./Header";
import MaterialInputs from "./MaterialInputs";
import StyledButton from "./StyledButton";

interface ModalMaterialTaskProps {
    trigger: string;
    handleDoneClick: any
}

const ModalMaterialTask: React.FC<ModalMaterialTaskProps> = (props: ModalMaterialTaskProps) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    // TODO: Revisar IDS en Material Input, ya que errores cuando mismo material. Value = {idInput: , idMAterial: } ?

    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {

        }
    }

    // * MATERIALES OBTENIDOS DE LA API
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        sendGetAllRequest("material_type").then(data => {
            setMaterials(data);
        })
    }, [])


    // * ARRAY DE IDS MATERIAL INPUTS
    const materialInputDefault = {
        id: 0,
        colorSelected: null,
        quantityCounter: 0,
        materialSelected: null,
    }
    //* Array de Material Input, uno por cada material que se va a añadir a la petición
    const quantityOptionDefault = {
        idColor: -1,
        quantity: 0
    }


    // * Hooks para los diferentes inputs
    const [materialInputs, setMaterialInputs] = useState([materialInputDefault]);
    const [colorOptions, setColorOptions] = useState([[]]);
    const [quantityOptions, setQuantityOptions] = useState([[quantityOptionDefault]]);
    const [maxQuantities, setMaxQuantities] = useState([0]);


    // * EVENTO AÑADIR NUEVA FILA: Se dispara al darle al botón de +
    const handleAddClick = () => {
        // * Asigna el siguiente id disponible
        const newMaterialInput = materialInputDefault;
        newMaterialInput.id = materialInputs.length;

        setMaterialInputs([...materialInputs, newMaterialInput])
        setColorOptions([...colorOptions, []]);
        setQuantityOptions([...quantityOptions, [quantityOptionDefault]]);
        setMaxQuantities([...maxQuantities, 0]);
    }

    // * EVENTO ELIMINAR INPUT: Se dispara al darle al botón de basura
    const handleDeleteClick = (idInput: number) => {

        console.log(idInput)
        if (materialInputs.length > 1) {

            var toDelete = materialInputs[idInput]; //* Variable para almacenar la posicion del elemento a eliminar

            setMaterialInputs(materialInputs.filter((input) => input.id != idInput));
            // * Modificar el valor de id de los elementos siguientes al que se ha eliminado para que sigan siendo consecutivos.
            for (let i = toDelete.id; i < materialInputs.length; i++) {
                materialInputs[i].id--;
            }

        }
        // TODO: si solo hay uno clear inputs al darle al botón
    }

    // * EVENTO SELECCIONAR MATERIAL
    const handleMaterialSelect = (idMaterial: any, idInput: number) => {

        materialInputs[idInput].materialSelected = idMaterial;
        var selectedColors: any = [];
        var selectedQuantities: any = [];

        //* SE OBTIENEN DE LA API LOS COLORES DEL MATERIAL SELECCIONADO
        sendGetByIDRequest("material/type", idMaterial).then(data => {
            data.map((material: any) => {
                selectedColors.push(material['_color']);
                selectedQuantities.push({
                    idColor: material['_color']['_id'],
                    quantity: material['_quantity']
                })

            })

            //* ACTUALIZO LOS COLORES 
            var newColorOptions = [...colorOptions];
            newColorOptions[idInput] = selectedColors;
            setColorOptions(newColorOptions);

            //* Actualizo las Cantidades maximas
            var newQuantityOptions = [...quantityOptions];
            newQuantityOptions[idInput] = selectedQuantities;
            setQuantityOptions(newQuantityOptions);
        })

    }

    //* EVENTO SELECCIONAR COLOR
    const handleColorSelect = (idColor: any, idInput: number) => {
        materialInputs[idInput].colorSelected = idColor;

        //* ACTUALIZAR LA CANTIDAD MAXIMA
        quantityOptions.map(quantityOpt => {
            if (quantityOpt[idInput].idColor == idColor) {
                var newMaxQuantities = [...maxQuantities];
                newMaxQuantities[idInput] = quantityOpt[idInput].quantity;
                setMaxQuantities(newMaxQuantities);
            }

        })



    }

    //* EVENTO CAMBIAR LA CANTIDAD PEDIDA
    const handleCounterChange = (value: number, idInput: number) => {
        materialInputs[idInput].quantityCounter = value;
    }


    

    return (
        <IonModal ref={modal} trigger={props.trigger} onWillDismiss={(ev) => onWillDismiss(ev)}>
            <Header title="Añadir Materiales" back></Header>
            <IonContent className="ion-padding">
                {/*Para hacer el tema de la cantidad, material ..etc he hecho un grid en donde cada fila sea pues los 3 inputs, y dentro de cada fila 2 filas para ir poniendo las cosas, en los select he hecho que en cuanto se haga un cambio
            se cambien automaticamente en el array con todas las cosas, para la visualización hago que se añada una fila por cada elemento del array, con el .map*/}
                <IonGrid class="grid-with-button width-90 scroll">
                    {materialInputs.map(input => (
                        <MaterialInputs id={input.id.toString()} materials={materials} colors={colorOptions[input.id]} maxQuantity={maxQuantities[input.id]} handleCounterChange={handleCounterChange} handleDeleteClick={handleDeleteClick} handleMaterialSelect={handleMaterialSelect} handleColorSelect={handleColorSelect}></MaterialInputs>
                    ))}
                    <IonRow class="center-content">
                        <IonFabButton class="center" color="success" size='small' onClick={handleAddClick}>
                            <IonIcon icon={add}></IonIcon>
                        </IonFabButton>
                    </IonRow>
                </IonGrid>

                <StyledButton icon={checkmarkCircleOutline} label="Hecho" onClick={() => {
                    props.handleDoneClick(materialInputs);
                    confirm();
                }}/>

            </IonContent>
        </IonModal>
    );
}

export default ModalMaterialTask;