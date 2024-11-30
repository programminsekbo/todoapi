
import UserModel from './../model/UserModel.js';







export const LoginService=async (req)=>{
    try {
        let {email} = req.body;
        let code = Math.floor(100000 + Math.random() * 900000);
        let EmailText = `Your code is= ${code}`;
        let EmailSubject = `Email Verification `
       // await SendEmail(EmailTO, EmailText, EmailSubject)
       await  UserModel.updateOne({email: email}, {otp: code},{upsert:true})
    
 
      
        
        return {status: "success", message:"6 digit code send successfully"};
 } catch (error) {
    return {status:"fail", data:error.toString()}   
}


}














export const Login=async(req,res)=>{
    try {
       
            return res.json({status:"susscess","Message":"User not found"})
        } 
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}

