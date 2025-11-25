<!-- # Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions. -->



# 📬 Mini Postman – React Native (Expo)

A lightweight **Postman-like API testing tool** built with **React Native + Expo**, allowing you to send **GET, POST, PUT, DELETE** requests directly from your phone.

This app lets you test APIs on the go — simple, clean, and mobile-friendly.

---

## 🚀 Features

- 🔹 Send **GET, POST, PUT, DELETE** requests  
- 🔹 Clean API response viewer  
- 🔹 JSON body support (for POST/PUT)  
- 🔹 Beautiful dropdown for selecting HTTP method  
- 🔹 Axios-based request handling  
- 🔹 Fully powered by **Expo**, so no build issues  

---

## 📱 Built With

- **React Native**
- **Expo**
- **Axios**
- **react-native-element-dropdown**

---

## 🛠️ Installation & Setup (Expo)

Follow these steps to run the project on your phone or PC:

### 1️⃣ Install Node.js  
Install Node.js ≥ 18  
Check version:

```sh
node -v
npm -v
```

### 2️⃣ Install Expo CLI
```sh
npm install -g expo-cli
```
### 3️⃣ Install dependencies

Inside your project folder:
```sh
npm install
```
### 4️⃣ Run the project
npx expo start


This will open the Expo Dev Tools in your browser.

📱 How to Run on Your Phone
### ✔ Install Expo Go

Android: Play Store

iOS: App Store

### ✔ Scan QR Code

After running:

```cmd
npx expo start
```

A QR code will appear.
Scan it using Expo Go → App opens instantly.

No USB, no Android Studio required. 🚀

### ▶️ Usage Guide
### 👉 1. Select HTTP Method

```
Use the dropdown to choose GET/POST/PUT/DELETE.
```

### 👉 2. Enter API URL

Example:
```url
https://jsonplaceholder.typicode.com/posts
```
### 👉 3. (Optional) Add JSON body

Visible only for POST / PUT.

Example:

```JSON
{
  "title": "foo",
  "body": "bar",
  "userId": 1
}
```

### 👉 4. Tap Send Request

Response appears below in a clean scrollable box.

# 🌐 Test with Sample API (JSON Placeholder)

A free fake API used for testing:

GET Example
```url
https://jsonplaceholder.typicode.com/posts
```

POST Example
```url
https://jsonplaceholder.typicode.com/posts
```

Body:

```JSON
{
  "name": "Tushar",
  "role": "Tester"
}
```

## 🧠 Code Explanation (Short)

method → Selected HTTP method

url → API URL

body → JSON body for POST/PUT
```js
axios({...}) → Sends request
```
Response formatted using:

```js
JSON.stringify(res.data, null, 2)
```

This makes output clean and readable.