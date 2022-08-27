import fs from 'fs';

const filename = 'src/database.json';

// Use get() to access the data
function getData() {
  let data = {
    clothing: [],
    outfits: [],
  };

  try {
    data = JSON.parse(fs.readFileSync(filename, { encoding: 'utf8' }));
  } catch (error) {
    console.error(error);
  }
  return data;
}

// Use set(newData) to pass in the entire data object, with modifications made
function setData(newData) {
  let data = {
    clothing: [],
    outfits: [],
  };

  try {
    data = JSON.parse(fs.readFileSync(filename, { encoding: 'utf8' }));
  } catch (error) {
    console.error(error);
  }

  data = newData;

  try {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(error);
  }
}

export { getData, setData };
