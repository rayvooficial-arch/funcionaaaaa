const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'src', 'assets', 'images');
const srcDir = path.join(__dirname, 'src');

// 1. Rename bad file
try {
  const badName = path.join(imagesDir, 'Pagamento 100% seguro.jpg');
  const goodName = path.join(imagesDir, 'pagamento_seguro.jpg');
  if (fs.existsSync(badName)) {
    fs.renameSync(badName, goodName);
    console.log('Renamed bad image file');
  }
} catch (e) {
  console.error('Error renaming:', e);
}

// 2. Find used images
const getAllFiles = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath));
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      results.push(filePath);
    }
  });
  return results;
};

const sourceFiles = getAllFiles(srcDir);
let allContent = '';
sourceFiles.forEach(file => {
  allContent += fs.readFileSync(file, 'utf8') + '\n';
});

// 3. Delete unused images
const imageFiles = fs.readdirSync(imagesDir);
let deletedCount = 0;
imageFiles.forEach(img => {
  // If the filename is not anywhere in our source code (and it's not our newly renamed image)
  if (!allContent.includes(img) && img !== 'pagamento_seguro.jpg') {
    try {
      fs.unlinkSync(path.join(imagesDir, img));
      console.log('Deleted unused image: ' + img);
      deletedCount++;
    } catch(err) {
      console.error('Failed to delete ' + img, err);
    }
  }
});
console.log('Finished. Deleted ' + deletedCount + ' unused images.');
