function displayClothList(items) {
    const clothList = document.getElementById('collection__content__items');
    const priceElemnet = document.getElementById('price')
    const priceValue = priceElemnet.textContent

    clothList.innerHTML = '';
  
    items.forEach(item => {

      const clothItem = document.createElement('div');
      clothItem.classList.add('collection__content__item');

      const clothImage = document.createElement('img');
      clothImage.src = item.image; 
      clothImage.alt = `${item.title} image`;
  
      const clothDesc = document.createElement('p');
      clothDesc.textContent = item.description;
      
      const clothPrice = document.createElement('p');
      clothPrice.textContent = priceValue;
      
      const addToCart = document.createElement('a');
      addToCart.href = '#'; 
      addToCart.classList.add('catalog__content__item-btn'); 
      addToCart.textContent = 'Add to Cart'; 
      addToCart.addEventListener('click', (e) => {
          e.preventDefault();
          console.log(`Item added to cart: ${item.title}`);
      });
      
      
  
      clothItem.appendChild(clothImage);
      clothItem.appendChild(clothDesc);
      clothItem.appendChild(clothPrice);
      clothItem.appendChild(addToCart);
      
      
  
      clothList.appendChild(clothItem);
    });
  }
  
  fetch('http://127.0.0.1:8000/api/cloth')
    .then(response => response.json())
    .then(data => displayClothList(data))
    .catch(error => console.error('Error fetching data:', error));
  