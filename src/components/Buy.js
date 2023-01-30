import { ethers } from "ethers";

const Buy=({state})=>{


    const buychai=async(event)=>{
        event.preventDefault();
        const {contract} = state;
        const name =document.querySelector("#name").value;
        const message =document.querySelector("#message").value;
        console.log(name,message,contract);
       const amount = {value:ethers.utils.parseEther("0.001")};
        const transaction = await contract.buyChai(name,message,amount)
        await transaction.wait();
        console.log("Transaction is done");
    }



   return <>
   
 <img src="https://alfkenya.org/wp-content/uploads/2022/06/gettyimages-1189942849-612x612-3.jpg" style={{width:1350, height:300, borderRadius:30}} alt="" />
 <form onSubmit={buychai} className="mb-3 " style={{width:1000, marginLeft:170}} >
    <label className="form-label " style={{marginTop:35 , backgroundColor:"black",padding:10, width:200,color:"white",borderRadius:20}} >Name</label>
    <input type="text" id="name" placeholder="Enter your name " className="form-control"></input>
    <label className="form-label" style={{marginTop:35 , backgroundColor:"black",padding:10, width:200,color:"white",borderRadius:20}}>message</label>
    <input type="text" id="message" placeholder="Enter your Message " className="form-control"></input>
    <button type="submit" className="btn btn-dark " style={{marginLeft:-920, marginTop:30}}>Donate</button>
 </form>
  

   </>
}

export default Buy;