import { IonContent, IonItem, IonPage, IonList, IonLabel, IonInput, IonIcon, IonTextarea, IonFabButton } from '@ionic/react';
import './Pages.css';
import Header from '../components/Header';
import CalendarPicker from '../components/CalendarPicker';
import { cameraOutline, chatbubbleOutline, checkmarkOutline, clipboardOutline, createOutline, personOutline } from 'ionicons/icons';
import './KitchenOrderView.css'

import React from 'react';
import axios from "axios";
const baseURL = "http://localhost:8000/api/task/2";

const KitchenOrderView: React.FC = () => {

	const [data, setData] = React.useState();
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
			setData(response.data);
			setIsLoading(false);
		});
	}, []);


	if(isLoading){
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	var estado = "No completada"

	if(data!['_status'])
		estado = "Completada"

	return (
		<IonPage>
			<Header title="Comanda" settings back={false} />
			<IonContent fullscreen>
				<IonList class="width-90">
					<IonLabel>Alumno asignado</IonLabel>
					<IonItem shape='round' fill='outline'>
						<IonIcon slot='start' icon={personOutline} />
						<IonInput value="Nombre alumno" disabled />
						<IonIcon slot='end' icon={createOutline} />
					</IonItem>

					<CalendarPicker label='Fecha límite de realización' disabled editButton value="2030-12-08"/>

					<IonLabel>Estado</IonLabel>
					<IonItem shape='round' fill='outline'>
						<IonIcon slot='start' icon={clipboardOutline} />
						<IonInput value={estado} disabled />
					</IonItem>

					<IonLabel>Dar feedback</IonLabel>
					<IonItem shape='round' fill='outline'>
						<IonTextarea placeholder='Escribir feedback...'></IonTextarea>
						<IonIcon slot='end' icon={cameraOutline} />
					</IonItem>
					<div className='wrap-kitchen-order-buttons'>
						<div className='wrap-kitchen-order-button'>
							<IonFabButton>
								<IonIcon icon={chatbubbleOutline} />
							</IonFabButton>
						</div>
						<div className='wrap-kitchen-order-button'>
							<IonFabButton>
								<IonIcon icon={checkmarkOutline} />
							</IonFabButton>
						</div>
					</div>
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default KitchenOrderView;