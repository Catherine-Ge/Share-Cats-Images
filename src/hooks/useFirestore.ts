import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";

type Image = {
  createdAt: Date;
  userEmail: string;
  imageUrl: string;
};
const useFIrestore = (collectionName: string) => {
  const [docs, setDocs] = useState<Image[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(true);

  useEffect(() => {
    let unsubscribe: () => void;
    const getData = async () => {
      try {
        const q = query(
          collection(db, collectionName),
          orderBy("createdAt", "desc")
        );
        unsubscribe = onSnapshot(q, (querySnapshot) => {
          const images: Image[] = [];
          querySnapshot.forEach((doc) => {
            const imageUrl = doc.data().imageUrl;
            const createdAt = doc.data().createdAt.toDate();
            const userEmail = doc.data().userEmail;
            images.push({ imageUrl, createdAt, userEmail });
          });
          setDocs(images);
          setisLoading(false);
        });
      } catch (error) {
        console.error(error);
        setisLoading(false);
      }
    };
    getData();
    return () => unsubscribe && unsubscribe();
  }, [collectionName]);

  return {
    docs,
    isLoading,
  };
};

export default useFIrestore;
