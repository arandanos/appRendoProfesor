import { IonLoading, IonList, IonGrid, IonIcon, IonItem, IonInput, IonLabel, IonButton} from '@ionic/react';
import Header from '../components/Header';
import './DishTypes.css';
import { useState, useEffect } from "react";
import { checkmark } from 'ionicons/icons';
import { sendGetAllRequest } from '../ApiMethods';
import TabSwitch from '../components/TabSwitch';
import ListItem from '../components/ListItem';
import StyledButton from '../components/StyledButton';
import { useParams } from 'react-router';

const SuperviseKitchenOrder: React.FC = () =>{

  const [kitchenOrders, setKitchenOrders] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  type params = {
    class_name: string;
  }
  
  const {class_name} = useParams<params>();

  useEffect(() => {
    sendGetAllRequest("kitchen_order_detail").then(data => {
      setKitchenOrders(findKitchenOrders(data));
      setIsLoading(false)
      setShowLoading(false)
    });
    /* sendGetAllRequest("dish").then(data => {
      setDishes(data)
      setIsLoading(false)
      setShowLoading(false)
    }) */
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

  var dishTypes: Array<string> = [];
  var arrayElementos: Array<JSX.Element> = [];

  function findKitchenOrders(orders: []) {
    let classOrders = orders.filter(order => order['_classroom']['_name'] === class_name);
    return classOrders;
  }

  dishTypes = ["Menús", "Postres"];
  arrayElementos = [
    <>
      <IonGrid class='list-container-dishes'>
        { 
          dishes.map(menu => {
            if (menu['_type'] === "MENU") {
              return (
                <>
                  <IonLabel></IonLabel>
                  <ListItem key={menu['_id']} href="dish_types" text={menu['_name']['_text']} pictogram={menu['_name']['_pictogram']} id={menu['_id']}></ListItem>
                </>
              )
            } else {
              return null
            }
          })
        }
      </IonGrid>
      <IonLabel>Total Menús: {}</IonLabel>
      <StyledButton icon={checkmark} label='Correcto'></StyledButton>
    </>,
    <>
      <IonGrid class='list-container-dishes'>
        {
          dishes.map(postre => {
            if (postre['_type'] === "POSTRE") {
              return (
                <ListItem key={postre['_id']} href="dish_types" text={postre['_name']['_text']} pictogram={postre['_name']['_pictogram']} id={postre['_id']}></ListItem>
              )
            } else {
              return null
            }
          })
        }
      </IonGrid>
      <IonLabel>Total Postres: {kitchenOrders}</IonLabel>
      <StyledButton icon={checkmark} label='Correcto'></StyledButton>
    </>
  ]


  return(
    <>
      <Header title={"Comanda " + class_name} settings back={false}></Header>

      <TabSwitch tabsNames={dishTypes} tabsComponents={arrayElementos}></TabSwitch>
    </>
  )
};

export default SuperviseKitchenOrder;