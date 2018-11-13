import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {TabView,TabPanel} from 'primereact/tabview';
import {Chart} from 'primereact/chart';

export default class Stage extends Component {
 constructor(){

   super();

 }

render(){
  const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

  return (


    <TabView>
    <TabPanel header="Bar Chart">
      <Chart type="bar" data={data} />
    </TabPanel>
    <TabPanel header="Line Chart">
         <Chart type="line" data={data} />
    </TabPanel>
    <TabPanel header="Pie Chart">
      <Chart type="doughnut" data={data} />
    </TabPanel>
</TabView>
  );

}




}
