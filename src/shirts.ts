var clothes = [{
    'type': 'shirt',
    'name': 'green_shirt',
    'url': 'https://i.imgur.com/Xo7Wa2Y.png',
    'tag': 'informal',
}]


const getShirtByName = (name: string) => {
    
    clothes.forEach(clothing => {
        if (clothing.name === name) {
            return clothing;
        }
    });
    
}

getShirtByName('green_shirt');