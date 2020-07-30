import { useState, useEffect } from "react";
import { projectFirestore, projectFireStore } from "../firebase/config";

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return docs;
};
