import React,{useState,useEffect} from 'react';
import { Table,Label } from 'semantic-ui-react';
import { useLocation } from "react-router-dom";

const axios = require('axios');

const TransactionPage=(props)=>{
  const location = useLocation();
  console.log(location);
  const [allTransactionData,setAllTransactionData] = useState([]);
  const [slectedTableData,setSelectedTableData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/api/accounts/transdetail/')
    .then(function (response) {
      // handle success
      console.log(response);
      setAllTransactionData(response.data);
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  },[]);

  useEffect(()=>{
    selectData(location.state.id);
  },[allTransactionData])

  const selectData=(id)=>{
    let _data = [];
    allTransactionData.map((o,index)=>{

      if(o.balId == id){
        _data.push(o);
      }
    });
    console.log('changeTab',_data);
    setSelectedTableData(_data);
  }
  return (
    <div style={{height:'100vh'}}>
      <div style={{height:50,width:'100%',backgroundColor:'#1B8257',display:'flex'}}>
        <span style={{fontSize:24,fontWeight:'bold',alignSelf:'center',marginLeft:10}}>Transaction</span>
      </div>
      <div style={{marginLeft:20,marginRight:30,marginTop:10}}>
      <Table celled>
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell>PAYMENT REFERANCE AND FILE NAME</Table.HeaderCell>
        <Table.HeaderCell>PAY FROM</Table.HeaderCell>
        <Table.HeaderCell>PAY TO</Table.HeaderCell>
        <Table.HeaderCell>AMOUNT</Table.HeaderCell>
        <Table.HeaderCell>PAYMENT DATE</Table.HeaderCell>
        <Table.HeaderCell>PAYMENT TYPE</Table.HeaderCell>
        <Table.HeaderCell>STATUS</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {slectedTableData.map((o,index)=>(
        <Table.Row style={{cursor:'pointer'}} onClick={()=>alert(o.id)}>
        <Table.Cell>
          {o.payRefFileName}
        </Table.Cell>
        <Table.Cell>{o.payFrom}</Table.Cell>
        <Table.Cell>{o.payTo}</Table.Cell>
        <Table.Cell>{o.amount}</Table.Cell>
        <Table.Cell>{o.payDate}</Table.Cell>
        <Table.Cell>{o.payType}</Table.Cell>
        <Table.Cell>{o.status}</Table.Cell>
      </Table.Row>
      ))}
    </Table.Body>
    </Table>
      </div>
      
    </div>
  );
}

export default TransactionPage;