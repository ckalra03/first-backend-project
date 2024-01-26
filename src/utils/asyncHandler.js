// ye ek wrapper function hai jo hum aage use krenge 
// promises wala method
const asyncHandler = (requestHandler)=>{
    (re,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
    }
}

export {asyncHandler}

// try and catch wala method
// const asyncHandler = () =>{}
// const asyncHandler = (func) =>{()=>{}}
// const asyncHandler = (fn) => async(req, res, next) =>{
//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         res.status(err.code|| 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }