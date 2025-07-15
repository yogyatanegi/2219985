#  Shortly – A Modern URL Shortener (MERN Stack)

**Shortly** is a sleek and responsive URL shortening web application built using the **MERN stack** with **Material UI** and **custom CSS styling**. It allows users to convert long, messy URLs into short and manageable links with optional expiry and aliasing features.

This project is divided into two main parts:
- **Frontend**: `url-shortener-client` (React.js + MUI)
- **Backend**: `url-shortener-server` (Node.js + Express + MongoDB)


##  Tech Stack

| Layer      | Technology                               |
|------------|------------------------------------------|
| Frontend   | React.js, Material UI (MUI), Custom CSS  |
| Backend    | Node.js, Express.js                      |
| Database   | MongoDB (Mongoose)                       |
| Hosting    | Netlify (Frontend), Localhost            |

---

##  Project Structure

```

URL-Shortener/
├── url-shortener-client/     # React frontend using Material UI
└── url-shortener-server/     # Node.js backend API with MongoDB

````

---

##  How to Clone and Run Locally

###  Clone the repository

```bash
git clone https://github.com/BhanuPrakashPandey0843/URL-Shortener.git
cd URL-Shortener
````

---

###  Setup the Backend

```bash
cd url-shortener-server
npm install
```

Create a `.env` file inside `url-shortener-server/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
BASE_URL=http://localhost:5000
```

Run the backend server:

```bash
npm run dev
```

It will be available at: `http://localhost:5000`

---

###  Setup the Frontend

```bash
cd ../url-shortener-client
npm install
npm start
```

Your app will run at: `http://localhost:3000`

---

## ✨ Key Features

*  Shorten any URL with just a click
*  Set expiration time for temporary links
*  Custom aliases for branded links (like `mysite.xyz/offer`)
*  Mobile responsive design with animations
*  Styled using Material UI components & custom CSS
*  Designed for both **local use** and **network deployment**

---

##  Future Roadmap

*  Link analytics (clicks, device, location)
*  User login & link dashboard
*  QR code generation
*  Admin panel for managing short links

---

##  Conclusion

**Shortly** is a production-ready, well-structured URL shortening solution that works both on **local devices** and over **network setups**. Built with the MERN stack and customized UI, it's perfect for developers, small teams, or organizations looking for a private link shortener.

Feel free to contribute, suggest improvements, or fork the project to make it your own!

---

** Developed by:** yogyatanegi 


