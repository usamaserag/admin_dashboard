import React, { useState, useEffect } from "react";
import {
  collection,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import UsersTable from "../components/UsersTable";

const Users = () => {
  const [users, setUsers] = useState([]);

  const handleDeleteField = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //       // console.log(doc.id, " => ", doc.data());
    //     });
    //     console.log(list);
    //     setUsers(list);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    onSnapshot(collection(db, "users"), (snapshot) => {
      let list = [];
      snapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setUsers(list);
    });
    // fetchData();
  }, []);

  return (
    <div>
      <UsersTable rows={users} handleDeleteField={handleDeleteField} />
    </div>
  );
};

export default Users;
