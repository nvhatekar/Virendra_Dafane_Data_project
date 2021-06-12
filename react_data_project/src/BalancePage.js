import React,{useState,useEffect} from 'react';
import { Table,Label } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

const axios = require('axios');

const BalancePage=()=>{

    const history = useHistory();
    const [selectedTab,setSelectedTab] = useState('AMERICAS');
  const [allBalanceData,setAllBalanceData] = useState([]);
  const [slectedTableData,setSelectedTableData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/api/accounts/balanceinfo/')
    .then(function (response) {
      // handle success
      console.log(response);
      setAllBalanceData(response.data);
      
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
    changeTab('AMERICAS');
  },[allBalanceData])

  const changeTab=(tab)=>{
    let _data = [];
    console.log('changeTab3',allBalanceData)
    allBalanceData.map((o,index)=>{
      console.log('changeTab2',o.region,tab)
      if(o.region == tab){
        _data.push(o);
      }
    });
    console.log('changeTab',_data);
    setSelectedTab(tab)
    setSelectedTableData(_data);
  }
  console.log('changeTab glob',allBalanceData)
  return (
    <div style={{height:'100vh'}}>
      <div style={{height:50,width:'100%',backgroundColor:'#1B8257',display:'flex'}}>
        <span style={{fontSize:24,fontWeight:'bold',alignSelf:'center',marginLeft:10}}>ACCOUNT POSITION-GLOBAL</span>
      </div>

      <div  style={{height:50,backgroundColor:'#F2F2F2',display:'flex',flexDirection:'row',marginTop:20,marginLeft:20,width:392,borderStyle:'solid',borderWidth:1,borderColor:'#F2F2F2'  }}>
        <div onClick={()=>changeTab("AMERICAS")} style={selectedTab == "AMERICAS" ? {cursor:'pointer',backgroundColor:'#ffffff',display:'flex',padding:20,borderBottomWidth:4,borderBottomStyle:'solid',borderBottomColor:'#1B8257'} : {cursor:'pointer',backgroundColor:'#F2F2F2',display:'flex',padding:20,color:'grey'}}><span style={{alignSelf:'center',fontSize:18,fontWeight:'bold'}}>AMERICAS</span></div>
        <div onClick={()=>changeTab("MIDDLEEAST")} style={selectedTab == "MIDDLEEAST" ? {cursor:'pointer',backgroundColor:'#ffffff',display:'flex',padding:20,borderBottomWidth:4,borderBottomStyle:'solid',borderBottomColor:'#1B8257'} : {cursor:'pointer',backgroundColor:'#F2F2F2',display:'flex',padding:20,color:'grey'}}><span style={{alignSelf:'center',fontSize:18,fontWeight:'bold'}}>MIDDLEEAST</span></div>
        <div onClick={()=>changeTab("AFRICA")} style={selectedTab == "AFRICA" ? {cursor:'pointer',backgroundColor:'#ffffff',display:'flex',padding:20,borderBottomWidth:4,borderBottomStyle:'solid',borderBottomColor:'#1B8257'} : {cursor:'pointer',backgroundColor:'#F2F2F2',display:'flex',padding:20,color:'grey'}}><span style={{alignSelf:'center',fontSize:18,fontWeight:'bold'}}>AFRICA</span></div>
      </div>
      <div style={{marginLeft:20,marginRight:30,marginTop:10}}>
      <Table celled>
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell>CURRENCY</Table.HeaderCell>
        <Table.HeaderCell>BASE CURRENCY EQUIVALENT(BCE)</Table.HeaderCell>
        <Table.HeaderCell>ACCOUNT CURRENCY EQUIVALENT(ACE)</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {slectedTableData.map((o,index)=>(
        <Table.Row style={{cursor:'pointer'}} onClick={()=>history.push({
            pathname: '/transaction',
            state: { id:o.id}
          })}>
        <Table.Cell>
          {o.currency}
        </Table.Cell>
        <Table.Cell>{o.bce}</Table.Cell>
        <Table.Cell>{o.ace}</Table.Cell>
      </Table.Row>
      ))}
    </Table.Body>
    </Table>
      </div>
      
    </div>
  );
}

export default BalancePage;