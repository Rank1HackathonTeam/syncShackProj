const upper = ['http://clipart-library.com/free/t-shirt-transparent.html',
'https://purepng.com/photo/2988/black-t-shirt',
'https://graphicdesign.stackexchange.com/a/21424']

for (let i = 0; i < upper.length; ++i){
    const image = document.createElement('img');
    image.setAttribute('src', upper[i]);
    image.setAttribute('width', 500);
    image.setAttribute('height', 300);
}