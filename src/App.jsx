import { useState, useEffect } from "react";

import { collection, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { collectIdsAndDocs } from "./utilities";
import { auth, firestore } from "./firebase/firebase";

import Navbar from "./components/Navbar";
import Home from "./components/homepage/Home";
import AddTask from "./components/AddTask";
import AuthPage from "./components/UserAuth/AuthPage";

const App = () => {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]); // firestore data
  const [user, setUser] = useState(null); // user data
  const { uid, displayName, photoURL } = user || {};

  // User Data catch
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  // Firebase Data Catch
  useEffect(() => {
    if (!user) return;
    const unsubscribeTask = onSnapshot(
      collection(firestore, `users/${user.uid}/tasks`),
      (snapshot) => {
        const tasks = snapshot.docs.map(collectIdsAndDocs);
        setTasks(tasks);
      }
    );

    return unsubscribeTask;
  }, [user]);

  const addTaskHandler = () => {
    setOpen(!open);
  };

  const clearState = () => {
    setTasks([]);
  };

  return (
    <div>
      {open && <AddTask user={user} addTaskHandler={addTaskHandler} />}
      {user ? (
        <>
          <Navbar
            clearState={clearState}
            displayName={displayName}
            photoURL={photoURL}
          />
          <Home tasks={tasks} uid={uid} addTaskHandler={addTaskHandler} />
        </>
      ) : (
        <AuthPage />
      )}
    </div>
  );
};

export default App;
