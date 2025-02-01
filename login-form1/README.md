# **Animated Login Page with Dark Mode & Interactive Effects**  

This project is a **modern, animated login page** built with HTML, CSS, and JavaScript. It includes:  
✅ **Dark & Light Theme Toggle**  
✅ **Animated Background**  
✅ **Interactive Login Form**  
✅ **Header & Footer Loaded Dynamically via JavaScript**  

## 🚀 **Live Preview**  
To see the login page in action, **run a local server** (see setup instructions below).  

---

## 📂 **Project Structure**  
```
/project-folder  
│── index.html          # Main login page  
│── script.js           # JavaScript for animations & theme toggle  
│── styles.css          # Main stylesheet
│── bootstrap.min.css   # Bootstrap stylesheet
│── header.html         # Header with theme toggle  
│── footer.html         # Footer with additional info  
│── README.md           # Project documentation  
```

---

## 🛠 **Setup & Run Locally**  

Since `fetch()` is used to load the header and footer, opening `index.html` directly **(file://)** won't work. Instead, run a local server:  

### **Option 1: Use VS Code Live Server Extension**  
1. Install **Live Server** extension.  
2. Open `index.html` in VS Code.  
3. Right-click and select **"Open with Live Server"**.  

### **Option 2: Use Python Local Server**  
If you have Python installed:  
```sh
# Python 3
python -m http.server 5500
# Python 2
python -m SimpleHTTPServer 5500
```  
Then open **http://localhost:5500/** in your browser.  

### **Option 3: Use Node.js `http-server`**  
If you have Node.js installed:  
```sh
npm install -g http-server
http-server -p 5500
```  
Then open **http://localhost:5500/** in your browser.  

---

## 🎨 **Features**  

### 🌙 **Dark & Light Mode Toggle**  
- Switch themes dynamically using the **theme toggle button in the header**.  
- **Dark mode:** Animated **moving dots** in the background.  
- **Light mode:** **Floating dot waves** for a smooth aesthetic.  

### ✨ **Interactive Login Form**  
- **Clicking input fields:**  
- **Smooth animations for buttons (hover, click, release effects).**  
  

### 🎮 **Mouse Interaction Effects**  
- **Background moves dynamically** when the mouse moves.  
- **Stars slightly shift position in dark mode** for a parallax effect.  

---

## 💻 **Technologies Used**  
- **HTML5** - Structure  
- **CSS3** - Styling & Animations  
- **JavaScript (ES6)** - Theme toggle, animations, event handling  

---

## 📌 **To-Do / Future Improvements**  
- [ ] Add more form validation.  
- [ ] Improve mobile responsiveness.  
- [ ] Add password visibility toggle.  

---

## 📝 **Author**  
💡 **Developed by:** Jithu S  
📧 **Contact:** jithusmusic@gmail.com  

---
