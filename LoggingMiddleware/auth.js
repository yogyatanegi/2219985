// LoggingMiddleware/auth.js
const axios = require('axios'); // Install axios using: npm install axios

const authData = {
    email: 'yogyatanegi@gmail.com',
    name: 'yogyata negi',
    rollNo: '2219985',
    accessCode: 'QAhDUr',
    clientID: '22462e84-da5d-40a7-ad10-5f3be9014192',
    clientSecret: 'FVyAEmwjkFyanFnm'
};

async function getAuthToken() {
    try {
        const response = await axios.post(
            'http://20.244.56.144/evaluation-service/auth',
            authData
        );
        
        console.log("Auth Token:", response.data.access_token);
        return response.data.access_token; // Save this token!
    } catch (error) {
        console.error("Auth Failed:", error.response?.data || error.message);
        return null;
    }
}

getAuthToken();