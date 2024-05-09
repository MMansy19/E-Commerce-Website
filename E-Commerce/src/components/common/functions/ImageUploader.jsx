import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../firebase";
import i18n from "../components/LangConfig";

const ImageUploader = () => {
  const { uploadImageAndSaveUrl } = useContext(AuthContext);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls = [];
      for (let i = 0; i < ITEMS.length; i++) {
        const imageUrl = await uploadImageAndSaveUrl(
          `../assets/${ITEMS[i].imageSrc}`
        );
        urls.push(imageUrl);
      }
      setImageUrls(urls);
    };

    fetchImageUrls();
  }, [uploadImageAndSaveUrl]);
};

export default ImageUploader;
