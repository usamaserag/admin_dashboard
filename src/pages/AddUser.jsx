import React, { useState, useEffect } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, auth, storage } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddUser = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [imageDisplay, setImageDisplay] = useState("");
  const [completeUpload, setCompleteUpload] = useState(false)

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
            const objectURL = URL.createObjectURL(file);
            setCompleteUpload(true)
            setImageDisplay(objectURL);
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleAddNewUser = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });

      setData({});

      setFile("");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleAddNewUser}>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-4 col-span-2">
            <input
              name="displayName"
              type="text"
              placeholder="User name ..."
              className="input input-bordered w-full "
              value={data.displayName}
              onChange={handleInput}
            />
            <input
              name="email"
              type="email"
              placeholder="Enter user e-mail ..."
              className="input input-bordered w-full "
              value={data.email}
              onChange={handleInput}
            />
            <input
              name="password"
              type="password"
              placeholder="Enter user password ..."
              className="input input-bordered w-full "
              value={data.password}
              onChange={handleInput}
            />
            <input
              name="phone"
              type="text"
              placeholder="Enter user phone number ..."
              className="input input-bordered w-full "
              value={data.phone}
              onChange={handleInput}
            />
            <input
              name="country"
              type="text"
              placeholder="Enter user country ..."
              className="input input-bordered w-full "
              value={data.country}
              onChange={handleInput}
            />
            <input
              name="address"
              type="text"
              placeholder="Enter user address ..."
              className="input input-bordered w-full "
              value={data.address}
              onChange={handleInput}
            />
            <input
              type="file"
              className="file-input file-input-bordered w-full "
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="w-full h-full rounded col-span-1 flex justify-center">
            <img
              className="w-20 h-20 rounded"
              src={
                !completeUpload
                  ? "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                  : imageDisplay
              }
              alt="userImage"
            />
          </div>
        </div>
        <input type="submit" value="Add New User" className="btn" />
      </form>
    </div>
  );
};

export default AddUser;
