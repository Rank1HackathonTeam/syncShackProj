import { format } from 'date-fns'

interface Data {
    upper: String[],
    lower: String[],
    outfits: OutfitSet[],
    plan: Plan[]
}

interface OutfitSet {
    name?: String,
    upper: String,
    lower: String
}

interface Plan {
    date: String,
    outfit: OutfitSet
}

const data : Data = {
    upper: [],
    lower: [],
    outfits: [],
    plan: []
}

// type determines whether it should be a shirt or pants
function addClothing(imgUrl: String, type: String) {
    if (type === 'upper') {
        data.upper.push(imgUrl);
    } else if (type === 'lower') {
        data.lower.push(imgUrl);
    }
}

// change to only pick from stuff inside the data
function saveOutfit(name: String, upperImg: String, lowerImg: String) {
    const newOutfit = {
        name: name,
        upper: upperImg,
        lower: lowerImg
    }
    data.outfits.push(newOutfit);
}

// 'same'
function planFitDate(day: number, month: number, year: number, outfit: OutfitSet) {
    const newDate = {
        date: format(new Date(day, month, year), 'dd/MM/yyyy'),
        outfit: outfit
    };
    data.plan.push(newDate);
}
