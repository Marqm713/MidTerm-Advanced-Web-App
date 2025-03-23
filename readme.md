# 📖 Ebook Landing Page with Dynamic Reviews (AngularJS + Node.js REST API)

## ✅ Project Overview
This project is a responsive **ebook landing page** that dynamically displays reviews using a custom-built **REST API** served by **Node.js** and consumed via **AngularJS**.

---

## ✅ Technologies Used
- **HTML / CSS / Bootstrap 5**
- **JavaScript / AngularJS 1.8**
- **Node.js (Express)**
- **REST API**

---

## ✅ Project Structure
```
📁 templatemo_588_ebook_landing
│
├─📁 css/
├─📁 images/
├─📁 js/
├─📁 my-api/               # Contains the Node.js REST API
│   ├─ server.js
│   └─ package.json
├─ index.html              # Main landing page
└─ README.md
```

---

## ✅ How to Run This Project Locally

### 1️⃣ **Clone or Download the Project**
Place the project in your desired directory.

### 2️⃣ **Set Up the REST API**
- Open a terminal.
- Navigate to the `my-api` folder:
```bash
cd path-to-project/my-api
```
- Initialize the project (if not done):
```bash
npm init -y
```
- Install required packages:
```bash
npm install express cors
```
- Start the API server:
```bash
node server.js
```
- ✅ The API should now be running at: `http://localhost:3000/api/reviews`

### 3️⃣ **Preview the Landing Page**
- Open `index.html` in your browser.
- The Reviews section will dynamically load from your running REST API.

---

## ✅ REST API Endpoint
- `GET /api/reviews`  
  Returns a JSON array of review objects, each containing:
```json
{
  "name": "Reviewer Name",
  "role": "Their Role",
  "rating": 4.5,
  "comment": "Their review comment.",
  "avatar": "path-to-avatar-image.jpg"
}
```

---

## ✅ AngularJS Setup in This Project
- The landing page uses AngularJS to:
  - Fetch reviews from `http://localhost:3000/api/reviews`
  - Dynamically display the reviews in the Reviews section.

> Make sure your API is running before opening `index.html`.

---

## ✅ Deployment Tips
- You can deploy your REST API using **Render**, **Railway**, or **Heroku**.
- Update the AngularJS API URL in the HTML file to match your deployed API URL.

---

## ✅ Troubleshooting
- If reviews are not showing:
  - Make sure the API server is running.
  - Check the browser console for any errors.
  - Confirm that the endpoint `http://localhost:3000/api/reviews` returns JSON.

---

## ✅ Credits
- Template design by [TemplateMo](https://templatemo.com)
- AngularJS documentation: [https://angularjs.org](https://angularjs.org)

---

## ✅ Need Help?
If you'd like assistance deploying or modifying this project, feel free to reach out!

