Todo Application Overview
This Todo application is a comprehensive tool designed to help users manage their tasks efficiently using a minimalist and intuitive interface. Built using React Native for web and leveraging AsyncStorage for persistent local storage, this app ensures that your todos are saved across sessions, making it reliable for daily usage.

Key Features
Persistent Todo List: Todos are saved locally on the user's device, ensuring that they persist between app sessions thanks to AsyncStorage.
Dynamic Filtering: Users can view all todos or filter them based on their status (All, In Progress, Done), allowing for easy management and review of tasks.
Interactive User Interface: The app features a clean and responsive design with simple interactions for adding, updating, and deleting tasks.
Custom Dialogs for User Inputs: Utilizes custom modal dialogs to prompt users for input when adding or editing tasks, ensuring a seamless user experience.
Live Updates: Changes to todos (add, complete, delete) are immediately reflected in the user interface.
Functionality
Add Todos: Users can add new tasks using the "Add" button which opens a dialog to enter the task's title.
Update Todos: Tapping on a todo allows users to toggle its completion status, visually moving it between the 'In Progress' and 'Done' categories.
Delete Todos: Tasks can be removed from the list through a long press, which prompts the user for confirmation, ensuring accidental deletions are avoided.
Responsive Tab Navigation: A bottom tab menu allows users to quickly switch between viewing all tasks, those in progress, and those that are completed.
Technical Stack
Frontend: Built with React Native for web, utilizing functional components and hooks.
State Management: Uses React's useState for state management and useEffect for side effects such as loading/saving data.
Storage: AsyncStorage from "@react-native-async-storage/async-storage" for local data persistence.
UUID: Utilizes uuid for generating unique identifiers for each todo item.
Setup and Installation
To get started with this app, clone the repository, install dependencies, and run it locally:

bash
Copy code
git clone https://github.com/your-github/todo-app.git
cd todo-app
npm install
npm start
Contributions
Contributions are welcome! If you have suggestions or enhancements, please fork the repository and submit a pull request.

