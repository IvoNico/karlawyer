import { getFirestore, collection, getDocs } from "firebase/firestore";

export const getItemsFromFirestore = async () => {
  const db = getFirestore();
  const productsCollection = collection(db, "blogs");
  const snapshot = await getDocs(productsCollection);
  const itemsArray = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return itemsArray;
};

