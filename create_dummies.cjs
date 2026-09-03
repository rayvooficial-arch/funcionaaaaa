const fs = require('fs');
const path = require('path');
const tinyJpeg = Buffer.from('/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=', 'base64');
for(let i=11; i<=16; i++) {
    fs.writeFileSync(path.join(__dirname, 'src', 'assets', 'images', `${i}.jpg`), tinyJpeg);
}
console.log('Dummy images created');
