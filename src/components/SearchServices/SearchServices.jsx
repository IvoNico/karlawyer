import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const fetchSearchResults = async (searchTerm) => {
  // Convert searchTerm to lowercase and remove any non-alphanumeric characters
  const formattedSearchTerm = searchTerm.toLowerCase().replace(/[^a-z0-9]/gi, "");

  const nameQuery = query(
    collection(db, "blogs"),
    where("name", ">=", formattedSearchTerm),
    where("name", "<=", formattedSearchTerm+"\uF7FF")
  );

  const descriptionQuery = query(
    collection(db, "blogs"),
    where("description", ">=", formattedSearchTerm),
    where("description", "<=", formattedSearchTerm+"\uF7FF")
  );

  const parrafoQuery = query(
    collection(db, "blogs"),
    where("parrafo", ">=", formattedSearchTerm),
    where("parrafo", "<=", formattedSearchTerm+"\uF7FF")
  );

  const [nameResults, descriptionResults, parrafoResults] = await Promise.all([
    getDocs(nameQuery),
    getDocs(descriptionQuery),
    getDocs(parrafoQuery)
  ]);

  const results = [];
  const ids = new Set();

  nameResults.forEach((doc) => {
    if (!ids.has(doc.id)) {
      const data = doc.data();
      if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push({ id: doc.id, ...data, date: data.date.toDate().toDateString() });
        ids.add(doc.id);
      }
    }
  });

  descriptionResults.forEach((doc) => {
    if (!ids.has(doc.id)) {
      const data = doc.data();
      if (data.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push({ id: doc.id, ...data, date: data.date.toDate().toDateString() });
        ids.add(doc.id);
      }
    }
  });

  parrafoResults.forEach((doc) => {
    if (!ids.has(doc.id)) {
      const data = doc.data();
      if (data.parrafo.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push({ id: doc.id, ...data, date: data.date.toDate().toDateString() });
        ids.add(doc.id);
      }
    }
  });

  console.log(results);
  return results;
};
