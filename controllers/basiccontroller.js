import { createService } from "../services/basicservice.js"

export const basicCreate=async (res,req,next)=>{
try {
    const response=await createService(req)
    res.status(200).json(response)
} catch (error) {
    res.status(500).json({
        status:error.status,
        message:error.message
    })
}
}