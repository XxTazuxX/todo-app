import { useState, useEffect, Suspense, lazy } from "react";

import { collection, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { collectIdsAndDocs } from "./utilities";
import { auth, firestore } from "./firebase/firebase";

import LinearProgress from "@mui/material/LinearProgress";

import AddTask from "./components/AddTask";
const Home = lazy(() => import("./components/homepage/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const AuthPage = lazy(() => import("./components/UserAuth/AuthPage"));

const App = () => {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]); // firestore data
  const [user, setUser] = useState(null); // user data
  const { uid, displayName, photoURL } = user || {};

  // User Data catch
  useEffect(() => {
    let unsubscribe = null;
    unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  // Firebase Data Catch
  useEffect(() => {
    if (!user) return;
    let unsubscribeTask = null;
    unsubscribeTask = onSnapshot(
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
      <Suspense fallback={<LinearProgress />}>
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
      </Suspense>
    </div>
  );
};

export default App;
