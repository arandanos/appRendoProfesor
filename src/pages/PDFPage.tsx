import '@progress/kendo-react-pdf';
import { cloudDownloadOutline } from 'ionicons/icons';
import StyledButton from '../components/StyledButton';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { useEffect, useRef, useState } from 'react';
import './PDFPage.css';
import Header from '../components/Header';
import { RouteComponentProps } from 'react-router';
import { sendGetAllRequest, sendGetByIDRequest } from '../ApiMethods';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { IonLoading } from '@ionic/react';


interface PDFPageProps extends RouteComponentProps<{
  id_task: string;
}>{}

const PDFPage: React.FC<PDFPageProps> = ({match}) => {

  const [data, setData] = useState([]);
  const [taskType, setTaskType] = useState();
  const [task_name, setTaskName] = useState();
  const [task_date, setTaskDate] = useState();
  const [student_name, setStudentName] = useState();
  const [classes, setTaskClasses] = useState([]);
  const [kitchenOrders, setKitchenOrders] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [total_dishes, setTotalDishes] = useState(0);
  const contentArea = useRef(null);

  var content: Array<contentProps> = [];

  useEffect(() => {
    console.log("TAREA: ");
    sendGetByIDRequest("task", match.params.id_task).then(data => {
      //Busco la tarea por su id
      setData(data);
      setTaskDate(data['_due_date']);
      setTaskName(data['_name']['_text']);
      setStudentName(data['_student']['_name']['_text']);
      //Establezco el tipo de la misma
      setTaskType(data['_type']);
      console.log("Tipo de tarea: " + data['_type']);
    })
    //Establezco las clases
    sendGetAllRequest("classroom").then(data => {
      setTaskClasses(data);
      //Cuando se establezcan las clases, hago set de las tareas
    })
    sendGetAllRequest("kitchen_order_detail").then(data => {
      setKitchenOrders(data);
      setTotalDishes(data["_quantity"]);
      //Cuando kitchenOrders tenga un valor, hace el setContent
      setIsLoading(false)
      setShowLoading(false)
    })
  }, [setContent()])

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

  const handleExportPDF = () => {
    console.log(contentArea.current);
    if(contentArea.current)
      savePDF(contentArea.current, {paperSize: 'A4', fileName: `Resumen Comanda ${task_date}`});
  };

  interface contentProps{
    quantity: number,
    name: string,
    type: string,
    classroom: string
  }

  var totalDishes: any = 0;
  function setContent(){
    if (kitchenOrders) {
      kitchenOrders.map(order => {
        totalDishes += order['_quantity'];
        console.log(order['_quantity'] + " Total: " + totalDishes);
        content.push({
          quantity: order['_quantity'],
          name: order['_dish']['_name']['_text'],
          type: order['_dish']['_type'],
          classroom: order['_classroom']['_name']
        });
      })
    } else {
      content.push({
        quantity: 0,
        name: "",
        type: "",
        classroom: ""
      });
    }
  }

  return (
    <>
      <Header title='Preview' settings={false} back={false}></Header>
      <div className="app-content">
        <PDFExport paperSize='A4'>
          <div ref={contentArea}>
            <h1>Resumen Comanda {task_date}</h1>
            <Grid data={content} className='grid-pdf'>
              <Column field='quantity' title='Cantidad' width='70px' />
              <Column field='name' title='Nombre del Plato' width='200px' />
              <Column field='classroom' title='Clase' width='80px' />
              <Column field='type' title='Tipo' width='40px'/>
            </Grid>
            <h6>Total platos: {totalDishes}</h6>
          </div>
        </PDFExport>
      
        <div className="button-area">
          <StyledButton icon={cloudDownloadOutline} label='Descargar PDF' onClick={handleExportPDF}></StyledButton>
        </div>
      </div>

    </>
  );
};

export default PDFPage;
