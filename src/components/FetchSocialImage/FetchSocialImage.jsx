import { getDownloadURL } from 'firebase/storage';
import { imageInstagram, imageFacebook, imageLinkedin, imageLupita } from '../../firebase/CallToRedesLogos/CallToRedesLogos';
import {imagek, imageUx} from '../../firebase/CallToImgAboutMe/CallToImgAboutMe'

export function fetchSocialImages() {
  return new Promise((resolve, reject) => {
    const imageRefs = [imageInstagram, imageFacebook, imageLinkedin, imageLupita, imagek, imageUx ];
    const images = {};

    imageRefs.forEach((ref, index) => {
      getDownloadURL(ref)
        .then((url) => {
          switch (index) {
            case 0:
              images.instagram = url;
              break;
            case 1:
              images.facebook = url;
              break;
            case 2:
              images.linkedin = url;
              break;
            case 3:
              images.lupa = url;
              break;
            case 4:
              images.imagek = url;
              break;
            case 5:
              images.imageUx = url;
              break;
            default:
              break;
          }

          if (Object.keys(images).length === imageRefs.length) {
            resolve(images);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
