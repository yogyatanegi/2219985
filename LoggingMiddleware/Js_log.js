
const axios = require('axios');

const AUTH_TOKEN = "eyJhbGci0...";

async function log(stack, level, package, message) {
    try {
        const response = await axios.post(
            'http://20.244.56.144/evaluation-service/logs',
            { stack, level, package, message },
            {
                headers: {
                    'Authorization': `Bearer ${AUTH_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log("Log sent:", response.data);
    } catch (error) {
        console.error("Log failed:", error.message);
    }
}


log("backend", "error", "handler", "Test log from VS Code");