import { ref } from 'firebase/storage';
import { storage } from '../../firebase/firebase';

const imageInstagram = ref(storage, "gs://karlawyer-3efd3.appspot.com/utils/Instagram.svg");
const imageFacebook = ref(storage, "gs://karlawyer-3efd3.appspot.com/utils/Facebook.svg");
const imageLinkedin = ref(storage, "gs://karlawyer-3efd3.appspot.com/utils/Linkedin.svg");
const imageLupita = ref(storage, "gs://karlawyer-3efd3.appspot.com/utils/Lupita.svg");

export { imageInstagram, imageFacebook, imageLinkedin, imageLupita };
