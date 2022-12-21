import { IonIcon, IonInput, IonItem, IonLabel } from "@ionic/react";
import './StyledInput.css'

interface inputProps{
    label?: string;
    disabled?: boolean;
    value?: string;
    iconStart?: string;
    iconEnd?: string;
    placeholder?: string;
    type?: any;
    onIonChange?: any;
    counter?: boolean;
    maxlength?: number;
}

const StyledInput: React.FC<inputProps> = (props: inputProps) => {
    return <IonItem class="custom-input" shape='round' fill='outline' counter={props.counter}>
        <IonLabel class="fix-disabled" position="floating">{props.label}</IonLabel>
        {props.iconStart? <IonIcon slot='start' icon={props.iconStart} /> : ""}
        <IonInput type={props.type? props.type : "text"} class="fix-alignment" 
                  disabled={props.disabled} value={props.value} 
                  placeholder={props.placeholder}
                  onIonChange={(e) =>  props.onIonChange(e.target.value) } maxlength={props.maxlength}/>
        {props.iconEnd? <IonIcon slot='end' icon={props.iconEnd} /> : ""}
    </IonItem>
}

export default StyledInput;