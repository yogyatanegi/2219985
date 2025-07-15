const axios = require('axios');

const auth = async () => {
  try {
    const response = await axios.post('http://20.244.56.144/evaluation-service/auth', {
      email: 'yogyatanegi@gmail.com',
      name: 'Yogyata Negi',
      rollNo: '2219985',
      accessCode: 'QAhDUr',
      clientID: '22462e84-da5d-40a7-ad10-5f3be9014192',           // 💡 Try from memory or guess if you noted it down earlier
      clientSecret: 'FVyAEmwjkFyanFnm'    // 💡 Same
    });

    console.log("✅ Access Token:", response.data.access_token);
  } catch (error) {
    console.error("❌ Auth Failed:", error.message);
  }
};

auth();
