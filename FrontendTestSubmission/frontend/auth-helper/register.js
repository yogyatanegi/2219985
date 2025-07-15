// auth-helper/register.js
const axios = require('axios');

const register = async () => {
  try {
    const response = await axios.post('http://20.244.56.144/evaluation-service/register', {
      email: 'yogyatanegi@gmail.com',     
      name: 'Yogyata Negi',              
      mobileNo: '9528737813',              
      githubUsername: 'yogyatanegi',       
      rollNo: '2219985',                   
      accessCode: 'QAhDUr'                
    });

    console.log('✅ Registration Success:');
    console.log(response.data);
  } catch (error) {
    console.error('❌ Registration Failed:', error.message);
  }
};

register();
