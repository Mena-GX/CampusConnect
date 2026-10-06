# CampusConnect 🎓

CampusConnect is a React Native mobile application designed to help college students discover and share campus events in one convenient place.

The app provides students with an easy way to browse upcoming campus activities, search for events, filter events by category, view detailed event information, and create new events.

> 🚧 **Project Status:** In Development

---

## 📱 Features

### 🏠 Browse Events

View a list of campus events directly from the home screen.

Each event displays important information such as:

* Event name
* Category
* Organizer
* Description
* Date
* Time
* Location

### 🔎 Search Events

Search for events by name using the search bar on the home screen.

### 🏷️ Filter Events

Filter events by category to quickly find activities that match your interests.

Current categories include:

* 🎨 Art
* 💻 STEM
* ⚽ Sports
* 🏛️ Leadership
* 📋 All Events

### 📄 Event Details

Select an event to view a dedicated event details page with additional information about the event.

Events can also include locally stored images from the project's assets.

### ➕ Create Events

Users can create new campus events through a dedicated form.

The create-event form currently supports:

* Event name
* Category
* Date
* Time
* Location
* Organizer
* Description

Basic form validation helps prevent users from submitting incomplete events.

### 🧭 Navigation

CampusConnect uses React Navigation to provide navigation between:

* Home
* Event Details
* Create Event

---

## 🛠️ Technologies

CampusConnect was built using:

* **React Native**
* **JavaScript**
* **Expo**
* **React Navigation**
* **React Native Components**
* **JavaScript State Management**

### Dependencies

Some of the primary packages used in the project include:

* `@react-navigation/native`
* `@react-navigation/native-stack`
* `react-native-safe-area-context`
* `react-native-screens`

---

## 📂 Project Structure

```text
CampusConnect/
│
├── assets/
│   └── event images
│
├── App.js
├── HomeScreen.js
├── EventDetailsScreen.js
├── CreateEventScreen.js
├── index.js
├── app.json
├── package.json
├── package-lock.json
└── README.md
```

### Main Screens

#### `App.js`

The main entry point for the application.

It is responsible for:

* Setting up navigation
* Managing the shared event state
* Connecting the different screens

#### `HomeScreen.js`

The main event discovery screen.

Responsibilities include:

* Displaying events
* Searching events
* Filtering events
* Navigating to event details
* Navigating to the create-event form

#### `EventDetailsScreen.js`

Displays detailed information about a selected event.

The selected event is passed to this screen through React Navigation.

#### `CreateEventScreen.js`

Provides a form for creating new events.

The screen collects event information, validates the form, creates a new event object, and updates the shared event list.

---

## 🚀 Getting Started

### Prerequisites

Before running the project, make sure you have:

* [Node.js](https://nodejs.org/) installed
* npm installed
* Expo available through the project
* A code editor such as VS Code
* Expo Go on a physical mobile device **or** an Android/iOS emulator

### 1. Clone the Repository

```bash
git clone https://github.com/Mena-GX/CampusConnect.git
```

### 2. Navigate to the Project

```bash
cd CampusConnect
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Expo Development Server

```bash
npm start
```

You can also use:

```bash
npm run android
```

to launch the Android version,

```bash
npm run ios
```

to launch the iOS version, or

```bash
npm run web
```

to run the project in a web browser.

### 5. Open the Application

If using Expo Go, scan the QR code displayed in the terminal or Expo development server.

---

## 🧑‍💻 How It Works

CampusConnect currently uses React state to manage the application's event data.

The event data is maintained at the application level and passed to the screens that need access to it.

```text
                    App.js
                      │
                 Event State
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
    HomeScreen            CreateEventScreen
          │                       │
          │                       │
     Displays Events        Creates Event
          │                       │
          └───────────┬───────────┘
                      │
                      ▼
                 Updated Events
```

When a user creates an event:

1. The user opens the Create Event screen.
2. The user enters the event information.
3. The form is validated.
4. A new event object is created.
5. The event is added to the shared event state.
6. The user is returned to the Home screen.
7. The new event appears in the event list.

---

## 🎯 Project Goals

CampusConnect was created as a React Native learning project to explore building a multi-screen mobile application.

The project focuses on learning and applying:

* React Native fundamentals
* Component-based development
* State management
* Props
* Forms and controlled inputs
* Form validation
* React Navigation
* Passing data between screens
* Dynamic lists
* Search and filtering
* Local image assets
* Mobile UI design

---

## 🔮 Future Improvements

Planned improvements include:

* [ ] Persist events using AsyncStorage
* [ ] Add event editing
* [ ] Add event deletion
* [ ] Add favorite events
* [ ] Add a dedicated Favorites screen
* [ ] Add date and time pickers
* [ ] Replace category text input with category selection
* [ ] Improve form validation and error messages
* [ ] Add image selection for newly created events
* [ ] Add event sorting
* [ ] Add more advanced search functionality
* [ ] Add user profiles
* [ ] Add authentication
* [ ] Connect the application to a backend/database
* [ ] Allow users to share events
* [ ] Improve overall UI/UX

---

## 📸 Screenshots

Screenshots can be added here as the application develops.

### Home Screen

*Add screenshot here*

### Event Details

*Add screenshot here*

### Create Event

*Add screenshot here*

---

## 📚 What I Learned

Through building CampusConnect, I have gained experience with building a React Native application from the ground up and connecting multiple screens through navigation.

Some of the main concepts explored include:

* Creating reusable React Native components
* Managing application state with `useState`
* Passing data between components using props
* Passing information between screens with React Navigation
* Creating controlled form inputs
* Validating user input
* Dynamically rendering lists with `FlatList`
* Filtering and searching data
* Working with local image assets
* Structuring a multi-screen mobile application

---

## 👩‍💻 Author

**Ximena**

Computer Science Student
Virginia Tech

---

## 📄 License

This project is licensed under the MIT License.
