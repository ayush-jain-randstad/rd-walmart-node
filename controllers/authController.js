import instance from "../helpers/axiosInstance.js"

const authController = {

    login: async (req, res) => {
        const {username, password} = req.body
        try {
            const response = await instance.post('https://dummyjson.com/auth/login', {          
                username,
                password,              
            })
            res.status(200).send({'message':'User Details','data':response.data})
        } catch (error) {      
           res.status(401).send({'error':error}) 
        }    
    },


}

export default authController