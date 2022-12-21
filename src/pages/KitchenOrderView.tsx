import { IonContent, IonItem, IonPage, IonList, IonLabel, IonInput, IonIcon, IonTextarea, IonFabButton, IonGrid } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import CalendarPicker from '../components/CalendarPicker';
import { cameraOutline, chatbubbleOutline, checkmarkOutline, clipboardOutline, createOutline, personOutline } from 'ionicons/icons';
import './KitchenOrderView.css'

import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { sendGetByIDRequest } from '../ApiMethods';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';

interface KitchenOrderViewProps extends RouteComponentProps<{
	id_task: string;
}> {}

const KitchenOrderView: React.FC<KitchenOrderViewProps> = ({match}) => {

	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		sendGetByIDRequest("task", match.params.id_task).then( data => {
			setData(data);
			setIsLoading(false);
		})
	}, []);


	if(isLoading){
		// * AQUI IRA EL SPLASH DE CARGA
		return (
			<div>
				<h1>Cargando...</h1>
			</div>
		);
	}

	var estado = "No completada"

	if(data!['_status'])
		estado = "Completada"

	return (
		<IonPage>
			<Header title="Comanda" settings back />
			<IonContent fullscreen>
				<IonList class="width-90">

					<StyledInput label='Alumno Asignado' iconStart={personOutline} iconEnd={createOutline} disabled value={data!['_student']['_name']['_text']}></StyledInput>

					<CalendarPicker label='Fecha límite de realización' disabled editButton value={data!['_due_date']}/>

					<StyledInput label='Estado' iconStart={clipboardOutline} disabled value={estado}></StyledInput>

					<StyledButton label='Ir a Supervisar Comanda'></StyledButton>

					<IonLabel>Dar feedback</IonLabel>
					<IonItem shape='round' fill='outline'>
						<IonTextarea placeholder='Escribir feedback...'></IonTextarea>
						<IonIcon slot='end' icon={cameraOutline} />
					</IonItem>

					<div className='wrap-kitchen-order-buttons'>
						{/* <div className='wrap-kitchen-order-button'>
							<IonFabButton>
								<IonIcon icon={chatbubbleOutline} />
							</IonFabButton>
						</div> */}
						<StyledButton label='Tarea Correcta' icon={checkmarkOutline}></StyledButton>
						{/* <div className='wrap-kitchen-order-button'>
							<IonFabButton>
								<IonIcon icon={checkmarkOutline} />
							</IonFabButton>
						</div> */}
					</div>
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default KitchenOrderView;