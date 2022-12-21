import { IonCol, IonContent, IonGrid, IonImg, IonItem, IonLabel, IonPage, IonRow, IonTitle } from '@ionic/react';
import './Login.css';
import Header from '../components/Header';
import { lockClosedOutline } from 'ionicons/icons';
import StyledInput from '../components/StyledInput';
import ButtonLogin from '../components/ButtonLogin';
import { personOutline } from 'ionicons/icons';

const Login: React.FC = () => {

    const getPassword = () =>{

    }


  return (
    <IonPage>
      <Header title="AppRendo" settings={false} back={false}/>
      
      <IonGrid class="grid-with-button width-90">
        <IonRow class="imgRow">
            <IonCol>
                <IonImg class="pequeña" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"></IonImg>
            </IonCol>                    
        </IonRow>                      

        <IonRow class="row shadow">       

            <IonRow>
                <IonCol>
                    <IonLabel class="label">Nombre de usuario</IonLabel>
                    <IonItem>                                                   
                        <StyledInput placeholder="Nombre de usuario" iconStart={personOutline}></StyledInput>                                                    
                    </IonItem>                            
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonLabel class="label">Contraseña</IonLabel>
                    <IonItem>                                                       
                        <StyledInput password placeholder="Contraseña" iconStart={lockClosedOutline}></StyledInput>                                                    
                    </IonItem>                            
                </IonCol>
            </IonRow>
                                
        </IonRow>

        <IonRow class="row">
            <IonCol>
                <ButtonLogin href="/home"></ButtonLogin>
            </IonCol>                    
        </IonRow>
    
      </IonGrid>
      
      
    </IonPage>
  );
};

export default Login;
