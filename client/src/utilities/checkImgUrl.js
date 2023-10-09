import { useEffect, useState } from 'react'
import imageDefault from "../assets/weLostImg.jpg"

export const CheckImageUrl = (image) => {
const [imageUrl, setImageUrl] = useState(image);
   useEffect(() => {
      const checkImage = async () => {
        try {
          const response = await fetch(image);
          if (response.ok) {
            setImageUrl(image);
          } else {
            setImageUrl(imageDefault);
          }
        } catch (error) {
          setImageUrl(imageDefault);
        }
      };
      checkImage();
    }, [image]);
    return imageUrl
}
