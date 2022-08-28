const upper = ['https://purepng.com/public/uploads/large/purepng.com-black-t-shirtclothingblack-t-shirtfashion-dress-shirt-black-cloth-tshirt-631522326884bzr0p.png',
'https://purepng.com/public/uploads/large/white-tshirt-n0j.png',
'https://cdn.shopify.com/s/files/1/0601/9275/1854/products/image_900x900.jpg'];

for (let i = 0; i < upper.length; i++){
    const image = document.createElement('img');
    image.setAttribute('src', upper[i]);
    image.setAttribute('width', '500');
    image.setAttribute('height', '300');
    image.setAttribute('class', 'slide');
    const box = document.getElementById('shirt-container');
    box.appendChild(image);
}
