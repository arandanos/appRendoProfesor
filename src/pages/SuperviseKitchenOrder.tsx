import { IonLoading, IonGrid, IonLabel} from '@ionic/react';
import Header from '../components/Header';
import './DishTypes.css';
import './SuperviseKitchenOrder.css';
import { useState, useEffect } from "react";
import { checkmarkOutline } from 'ionicons/icons';
import { sendGetAllRequest } from '../ApiMethods';
import TabSwitch from '../components/TabSwitch';
import ListItem from '../components/ListItem';
import StyledButton from '../components/StyledButton';
import { useParams } from 'react-router';

const SuperviseKitchenOrder: React.FC = () =>{

  const [kitchenOrders, setKitchenOrders] = useState([]);
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
  var numMenus: number = 0;
  var numPostres: number = 0;

  function findKitchenOrders(orders: []) {
    let classOrders = orders.filter(order => order['_classroom']['_name']['_text'] === class_name);
    return classOrders;
  }

  dishTypes = ["Menús", "Postres"];
  arrayElementos = [
    <>
      <IonGrid class='list-container-dishes'>
        { 
          kitchenOrders.map(menu => {
            if (menu['_dish']['_type'] === "MENU") {
              numMenus+=menu['_quantity'];
              return (
                  <ListItem key={menu['_id']} number={menu['_quantity']} text={menu['_dish']['_name']['_text']} pictogram={menu['_dish']['_name']['_pictogram']} id={menu['_id']}></ListItem>
              )
            } else {
              return null
            }
          })
        }
      </IonGrid>
      <IonLabel class="total-label">Total Menús: {numMenus}</IonLabel>
      <StyledButton icon={checkmarkOutline} label='Correcto'></StyledButton>
    </>,
    <>
      <IonGrid class='list-container-dishes'>
        {
          kitchenOrders.map(postre => {
            if (postre['_dish']['_type'] === "POSTRE") {
              numPostres+=postre['_quantity'];
              return (
                <ListItem key={postre['_id']} number={postre['_quantity']} text={postre['_dish']['_name']['_text']} pictogram={postre['_dish']['_name']['_pictogram']} id={postre['_id']}></ListItem>
              )
            } else {
              return null
            }
          })
        }
      </IonGrid>
      <IonLabel class="total-label">Total Postres: {numPostres}</IonLabel>
      <StyledButton icon={checkmarkOutline} label='Correcto'></StyledButton>
    </>
  ]


  return(
    <>
      <Header title={"Comanda " + class_name} settings back={false}></Header>

      <TabSwitch tabsNames={dishTypes} tabsComponents={arrayElementos}></TabSwitch>
    </>
  );
};

export default SuperviseKitchenOrder;