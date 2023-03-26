import { ref } from 'firebase/storage';
import { storage } from '../../firebase/firebase';

const imagek = ref(storage, "gs://karlawyer-3efd3.appspot.com/AboutMe/aboutMe.jpeg");
const imageUx = ref(storage, "gs://karlawyer-3efd3.appspot.com/AboutMe/aboutMeUx.jpeg");


export { imageUx, imagek };
