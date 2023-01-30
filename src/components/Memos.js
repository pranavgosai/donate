import {useState,useEffect} from 'react';


const Memos=({state})=>{
    const [memos,setMemos] = useState([]);
    const {contract} = state;


    useEffect(()=>{
        const memosMessage=async()=>{
           
         const memos = await contract.getMemos();
         setMemos(memos)
        }
        contract && memosMessage();
    },[contract])



return<>
  <p style={{marginTop:35 , backgroundColor:"black",padding:10, width:200,color:"white",borderRadius:20 , marginLeft:570}}>Message</p>
  {memos.map((memo)=>{return(
 <table className="table table-dark table-hover"  key={memo.timestamp}>
 <tbody >
 <tr >
     <td >{memo.name}</td>
     <td >{memo.massage}</td>
     <td >{new Date(memo.timestamp*1000).toLocaleString()}</td>
     <td >{memo.from}</td>
 </tr>
 </tbody>
</table>
  )})}
</>
}
export default Memos;