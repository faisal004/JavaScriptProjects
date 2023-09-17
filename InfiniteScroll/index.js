const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let apiKey = "Your-api-key";

let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=10`;


const showLoading=()=>{
    loader.hidden = false;
}
const hideLoading=()=>{
    loader.hidden = true;
}


const getPhotos = async () => {
  try {
    showLoading();
    const response = await fetch(apiUrl);
    const data = await response.json();

    data.forEach((photo) => {
      const img = document.createElement("img");
      img.src = photo.urls.regular;
      imageContainer.appendChild(img);
    });
    hideLoading(); 
  } catch (error) {
    console.log(error);
  }
};

const isBottom= ()=>{
    const windowHeight=window.innerHeight;
    const scrollTop=document.documentElement.scrollTop;
    const scrollHeight=document.documentElement.scrollHeight;
    
    return windowHeight+scrollTop>=scrollHeight
}
window.addEventListener("scroll", () => {
    if (isBottom()) {
        
        getPhotos()
      console.log("hello")
    }
  });
getPhotos();
