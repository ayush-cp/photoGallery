import React, { useEffect, useState } from "react";
import cars from "../assets/cars.jpg";
import city from "../assets/city.jpg";
import fish from "../assets/fish.jpg";
import flowers from "../assets/flowers.jpg";
import mountains from "../assets/mountains.jpg";
import wallpaper from "../assets/wallpaper.png";
import { IconContext } from "react-icons";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function ImageCollection() {
  // document.addEventListener("scroll", lazyload);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const enlargedImage = document.querySelector(".enlargedimage");
    const enlargedContainer = document.querySelector(".enlarged");
    const selectedImage = document.querySelectorAll(".image");
    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");
    selectedImage.forEach((e)=>{
      const attr = document.createAttribute("load")
      attr.value = "lazy"
      e.setAttributeNode(attr)
    })
    
    const handleClick = (event) => {
      const imageSource = event.target.getAttribute("src");
      enlargedContainer.style.display = "flex";
      enlargedImage.style.backgroundImage = `url(${imageSource})`;
      enlargedImage.style.backgroundSize = "contain";
      enlargedImage.style.backgroundPosition = "center";
      enlargedImage.style.backgroundRepeat = "no-repeat";
      const imagesArray = Array.from(selectedImage);
      const imageNo = imagesArray.indexOf(event.target);
      setCurrentImageIndex(imageNo);
    };

    const handleLeftClick = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const handleRightClick = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) => (prevIndex < selectedImage.length - 1 ? prevIndex + 1 : prevIndex));
      // console.log(rightButton)
    };

    const handleEmptyClick = (e) => {
      const target = e.target;
      if (!target.closest('.left') && !target.closest('.right') && !target.closest('.enlargedimage')) {
        enlargedContainer.style.display = "none";
      }
    };

    selectedImage.forEach((element) => {
      element.addEventListener("click", handleClick);
    });

    leftButton.addEventListener("click", handleLeftClick);
    rightButton.addEventListener("click", handleRightClick);
    enlargedContainer.addEventListener("click", handleEmptyClick);

    return () => {
      selectedImage.forEach((element) => {
        element.removeEventListener("click", handleClick);
      });
      leftButton.removeEventListener("click", handleLeftClick);
      rightButton.removeEventListener("click", handleRightClick);
      enlargedContainer.removeEventListener("click", handleEmptyClick);
    };
  }, []);

  useEffect(() => {
    const enlargedImage = document.querySelector(".enlargedimage");
    const selectedImage = document.querySelectorAll(".image");
    const rightButton = document.querySelector(".right")
    const leftButton = document.querySelector(".left")
    if (currentImageIndex !== null) {
      const imagesArray = Array.from(selectedImage);
      enlargedImage.style.backgroundImage = `url(${imagesArray[currentImageIndex].getAttribute("src")})`;
    }
    if(currentImageIndex===(selectedImage.length - 1)){
      // console.log("right end")
      rightButton.style.backgroundColor = 'gray'
    }
    else{
      rightButton.style.backgroundColor = 'rgba(0, 0, 0,0.6)'
      
    }
    if(currentImageIndex===0){
      // console.log("left end")
      leftButton.style.backgroundColor = 'gray'
    }
    else{
      leftButton.style.backgroundColor = 'rgba(0, 0, 0,0.6)'
      
    }
  }, [currentImageIndex]);

  return (
    <div className="imageCollection">
      <div className="enlarged" >
        <IconContext.Provider
          value={{
            color: "white",
            size: "6em",
            className: "global-class-name",
          }}
        >
          <div className="left" >
            <FaAngleLeft />
          </div>
        </IconContext.Provider>

        <div className="enlargedimage"></div>

        <IconContext.Provider
          value={{
            color: "white",
            size: "6em",
            className: "global-class-name",
          }}
        >
          <div className="right" >
            <FaAngleRight />
          </div>
        </IconContext.Provider>
      </div>

      <div className="images">
        <div className="item">
          <img src={cars} alt="" className="image" />
        </div>
        <div className="item">
          <img src={city} alt="" className="image" />
        </div>
        <div className="item">
          <img src={fish} alt="" className="image" />
        </div>
        <div className="item">
          <img src={flowers} alt="" className="image" />
        </div>
        <div className="item">
          <img src={mountains} alt="" className="image" />
        </div>
        <div className="item">
          <img src={wallpaper} alt="" className="image" />
        </div>
        <div className="item">
          <img src={cars} alt="" className="image" />
        </div>
        <div className="item">
          <img src={city} alt="" className="image" />
        </div>
        <div className="item">
          <img src={fish} alt="" className="image" />
        </div>
        <div className="item">
          <img src={flowers} alt="" className="image" />
        </div>
        <div className="item">
          <img src={mountains} alt="" className="image" />
        </div>
        <div className="item">
          <img src={wallpaper} alt="" className="image" />
        </div>
      </div>
    </div>
  );
}
