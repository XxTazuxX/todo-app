// import React, { createContext, useState, useEffect } from "react";
// import { collection, onSnapshot } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { firestore, auth } from "../firebase/firebase";
// import { collectIdsAndDocs } from "../utilities";

// export const TasksContext = createContext();

// const TasksProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//     });

//     return unsubscribe;
//   }, []);
//   // Firebase Mount
//   useEffect(() => {
//     if (!user) return;
//     const unsubscribeTask = onSnapshot(
//       collection(firestore, `users/${user.uid}/tasks`),
//       (snapshot) => {
//         const tasks = snapshot.docs.map(collectIdsAndDocs);
//         setTasks(tasks);
//       }
//     );

//     return unsubscribeTask;
//   }, [user]);

//   return (
//     <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
//   );
// };

// export default TasksProvider;
