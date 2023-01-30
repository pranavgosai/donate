import abi from "./contracts/chai.json"
import {useState,useEffect} from 'react'
import { ethers } from 'ethers';
import Buy from "./components/Buy";
import Memos from "./components/Memos";

import './App.css';
function App() {
  const [state,setState] = useState({
    provider:null,
    signer:null,
    contract:null,
  })

  const [account,setAccount]=useState("none")
  
  useEffect(()=>{
    const connectwallet = async()=>{
      const contractaddress = "0x3aed06b23f50ca14bcdf220a0fe71e708b4f8e2e";
      const contractABI=abi.abi;
      try{
        const {ethereum}=window;
        if(ethereum){
          const account= await ethereum.request({method:"eth_requestAccounts",})

          window.ethereum.on("chainChanged",()=>{
            window.location.reload();
          })
          window.ethereum.on("accountsChanged",()=>{
            window.location.reload();
          })
       
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractaddress,contractABI,signer);
        setAccount(account)
        setState({provider,signer,contract})
      }else{
        alert("please install metamask")
      }
      }catch(error){
        console.log(error);
      }
    }
    connectwallet();
  },[])
  // console.log(state);
  return (
    <div className="App">
    
      <Buy state={state}></Buy>
      <p>Connected Account-{account}</p>
      <Memos state={state}></Memos>
    </div>
  );
}

export default App;
