import { getFirestore, doc, updateDoc } from "firebase/firestore";

export const updateSearchTerms = async (id, searchTerms) => {
  const db = getFirestore();
  const blogRef = doc(db, "blogs", id);
  await updateDoc(blogRef, {
    searchTerms: searchTerms
  });
};
