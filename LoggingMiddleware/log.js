import axios from 'axios';

const API_URL = "http://20.244.56.144/evaluation-service/logs";
const TOKEN = "<QAhDUr>"; // Replace with real token

const Log = async (stack, level, pkg, message) => {
  try {
    const res = await axios.post(API_URL, {
      stack,
      level,
      package: pkg,
      message
    }, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });
    console.log("Log created:", res.data);
  } catch (error) {
    console.error("Logging failed", error.message);
  }
};

export default Log;
