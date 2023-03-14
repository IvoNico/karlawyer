import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const fetchSearchResults = async (searchTerm) => {
  const nameQuery = query(
    collection(db, "blogs"),
    where("name", ">=", searchTerm),
    where("name", "<=", searchTerm + "\uf8ff")
  );
  const descriptionQuery = query(
    collection(db, "blogs"),
    where("description", ">=", searchTerm),
    where("description", "<=", searchTerm + "\uf8ff")
  );
  const parrafoQuery = query(
    collection(db, "blogs"),
    where("parrafo", ">=", searchTerm),
    where("parrafo", "<=", searchTerm + "\uf8ff")
  );
  const [nameResults, descriptionResults, parrafoResults] = await Promise.all([
    getDocs(nameQuery),
    getDocs(descriptionQuery),
    getDocs(parrafoQuery),
  ]);

  const results = [];
  const ids = new Set(); // Use a Set to ensure unique results
  nameResults.forEach((doc) => {
    if (!ids.has(doc.id)) {
      results.push({ id: doc.id, ...doc.data() });
      ids.add(doc.id);
    }
  });
  descriptionResults.forEach((doc) => {
    if (!ids.has(doc.id)) {
      results.push({ id: doc.id, ...doc.data() });
      ids.add(doc.id);
    }
  });
  parrafoResults.forEach((doc) => {
    if (!ids.has(doc.id)) {
      results.push({ id: doc.id, ...doc.data() });
      ids.add(doc.id);
    }
  });
  return results;
};
