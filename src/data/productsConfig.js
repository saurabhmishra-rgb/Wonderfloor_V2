// src/data/productsConfig.js

// ── 1. NAV TABS (mirrors website top nav) ────────────────────────────────────
export const NAV_CATEGORIES = [
  { id: 'flooring-products',  label: 'Flooring Products' },
  { id: 'luxury-vinyl-tile',  label: 'Luxury Vinyl Tile' },
];

// ── 2. WHICH ACCORDIONS APPEAR UNDER EACH NAV TAB ────────────────────────────
export const ACCORDION_CATEGORIES = {
  'flooring-products': [
    'Braavo', 'Krayons', 'Durofloor', 'Siggma',
    'Orbit', 'Stoneland Monza', 'Meteor', 'Aventus',
  ],
  'luxury-vinyl-tile': [
    'Timberworld 1.5mm', 'Timberland Exotica 2mm', 'Timberland Maestro 3mm',
    'Timberland Widex', 'Stoneland Monza','Timberland Herringbone', 'Grandeure Supreme',
  ],
};

// ── 3. MOVE ALL YOUR ASSET IMPORTS HERE ──────────────────────────────────────
// 1. IMPORT YOUR LOCAL ASSETS HERE
import floorActon from '../assets/image1.jpeg';
import floorHolmes from '../assets/image2.jpeg';
import floorCedar from '../assets/image3.jpeg';
import floorCalla from '../assets/image4.jpeg';
import floorTansy from '../assets/image5.jpeg';
import floorPoppy from '../assets/image6.jpeg';
import floorPoppy1 from '../assets/image7.jpeg';
import floorPoppy2 from '../assets/image8.jpeg';
import floorPoppy3 from '../assets/image9.jpeg';
import floorPoppy4 from '../assets/image10.jpeg';
import floorPoppy5 from '../assets/image11.jpeg';
import floorpoppy6 from '../assets/image3.1.jpeg';
//Krayons
import Krayons1 from '../assets/krayon-fluorescent.jpg';
import Krayons2 from '../assets/krayons-frosty-n-beige.jpg';
import Krayons4 from '../assets/krayons-frosty-n-grey.jpg';
import Krayons5 from '../assets/krayons-frosty-n-orange.jpg';
import Krayons6 from '../assets/krayons-frosty-n-red.jpg';
import Krayons7 from '../assets/krayons-frosty-n-yellow.jpg';
import Krayons8 from '../assets/krayons-frosty-n-sea-blue.jpg';
import Krayons9 from '../assets/krayons-frosty-n-blue.jpg';
import Krayons10 from '../assets/krayons-pastel-blue.jpg';
import Krayons11 from '../assets/krayons-pastel-green.png';
import Krayons12 from '../assets/krayons-pastel-lemon.jpg';
import Krayons13 from '../assets/krayons-frosty-n-orange.jpg';
import Krayons14 from '../assets/krayons-pastel-purple.jpg';
import Krayons15 from '../assets/krayons-pastel-cherry.jpg';
import Krayons16 from '../assets/krayons-pastel-pink.jpg';

//Bravo Tiles
import Bravo1 from '../assets/braavo-ace-091-cherry-red.jpg';
import Bravo2 from '../assets/braavo-ace-092-blue.jpg';
import Bravo3 from '../assets/braavo-ace-093-orange.jpg';
import Bravo4 from '../assets/braavo-ace-094-green.jpg';
import Bravo5 from '../assets/braavo-ace-095-neo-silver.jpg';
import Bravo6 from '../assets/braavo-ace-096-yellow.jpg';
import Bravo7 from '../assets/braavo-ace-097-iron-grey.jpg';

import Bravo8 from '../assets/braavo-ar-051.jpg';
import Bravo9 from '../assets/braavo-ar-053.jpg';
import Bravo10 from '../assets/braavo-ar-054.jpg';
import Bravo11 from '../assets/braavo-ar-055.jpg';
import Bravo12 from '../assets/braavo-ar-056.jpg';
import Bravo13 from '../assets/braavo-ar-057.jpg';

import Bravo14 from '../assets/braavo-elite-blue--082.jpg';
import Bravo15 from '../assets/braavo-elite-elite-red-081.jpg';
import Bravo16 from '../assets/braavo-elite-gray--087.jpg';
import Bravo17 from '../assets/braavo-elite-orange-083.jpg';

import Bravo18 from '../assets/braavo-lite-lite-bood-085a.jpg';
import Bravo19 from '../assets/braavo-lite-lite-green-084.jpg';
import Bravo20 from '../assets/braavo-lite-lite-wood--086.jpg';

import Bravo21 from '../assets/braavo-spt-082-meadows-green.jpg';
// ... paste all your existing import lines here ...

// LVT assets — add your own files
// import LVT_Timberworld1   from '../assets/timberworld-classic.jpg';
// import LVT_TimberExotica1 from '../assets/timberland-exotica-1.jpg';
import LVT1 from '../assets/a2.jpg';
import LVT2 from '../assets/a4.jpg';
import LVT3 from '../assets/a7.jpg';
import LVT4 from '../assets/b6.jpg';
import LVT5 from '../assets/b8.jpg';
import LVT6 from '../assets/c6.jpg';
import LVT7 from '../assets/na-1.jpg';
import LVT8 from '../assets/nb-2.jpg';
import LVT9 from '../assets/nb-4.jpg';
// ... etc

// ── 4. ALL PRODUCTS — add navCategory: '...' to every product ────────────────
export const ALL_PRODUCTS = [

  // ── FLOORING PRODUCTS ───────────────────────────────────────────────────────

  //Bravo Tiles

  { id: 28, navCategory: 'flooring-products',name: 'Ace-091-cherry-red', size: '2mtr x 15mtr (Roll)', img: Bravo1, colour: 'cherry-red', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0001', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 29, navCategory: 'flooring-products',name: 'Ace-092-blue', size: '2mtr x 15mtr (Roll)', img: Bravo2, colour: 'blue', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0002', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 30,navCategory: 'flooring-products', name: 'Ace-093-orange', size: '2mtr x 15mtr (Roll)', img: Bravo3, colour: 'orange', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0003', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 31,navCategory: 'flooring-products', name: 'Ace-094-green', size: '2mtr x 15mtr (Roll)', img: Bravo4, colour: 'green', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0004', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 32, navCategory: 'flooring-products',name: 'Light-grey', size: '2mtr x 15mtr (Roll)', img: Bravo5, colour: 'neo-silver', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0005', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 33, navCategory: 'flooring-products',name: 'Ace-096-yellow', size: '2mtr x 15mtr (Roll)', img: Bravo6, colour: 'yellow', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0006', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 34, navCategory: 'flooring-products',name: 'Ace-097-iron-grey', size: '2mtr x 15mtr (Roll)', img: Bravo7, colour: 'grey', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0007', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 35, navCategory: 'flooring-products',name: 'Ar-051', size: '2mtr x 15mtr (Roll)', img: Bravo8, colour: 'orange', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0008', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 36, navCategory: 'flooring-products',name: 'Ar-053', size: '2mtr x 15mtr (Roll)', img: Bravo9, colour: 'orange', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0009', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 37, navCategory: 'flooring-products',name: 'Ar-054', size: '2mtr x 15mtr (Roll)', img: Bravo10, colour: 'orange', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0010', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 38, navCategory: 'flooring-products',name: 'Ar-055', size: '2mtr x 15mtr (Roll)', img: Bravo11, colour: 'grey', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0011', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 39, navCategory: 'flooring-products',name: 'Ar-056', size: '2mtr x 15mtr (Roll)', img: Bravo12, colour: 'orange', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0012', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 40,navCategory: 'flooring-products', name: 'Ar-057', size: '2mtr x 15mtr (Roll)', img: Bravo13, colour: 'yellow', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0013', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 41, navCategory: 'flooring-products',name: 'Elite-blue-082', size: '2mtr x 15mtr (Roll)', img: Bravo14, colour: 'blue', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0014', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 42,navCategory: 'flooring-products', name: 'Elite-red-081', size: '2mtr x 15mtr (Roll)', img: Bravo15, colour: 'red', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0015', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 43,navCategory: 'flooring-products', name: 'Elite-grey-087', size: '2mtr x 15mtr (Roll)', img: Bravo16, colour: 'grey', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0016', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 44,navCategory: 'flooring-products', name: 'Elite-orange-083', size: '2mtr x 15mtr (Roll)', img: Bravo17, colour: 'orange', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0017', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 45,navCategory: 'flooring-products', name: 'Elite-Wood-085A', size: '2mtr x 15mtr (Roll)', img: Bravo18, colour: 'yellow', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0018', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 46, navCategory: 'flooring-products',name: 'Elite-green-084', size: '2mtr x 15mtr (Roll)', img: Bravo19, colour: 'green', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0019', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 47, navCategory: 'flooring-products',name: 'Elite-wood-086', size: '2mtr x 15mtr (Roll)', img: Bravo20, colour: 'brown', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0020', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 48, navCategory: 'flooring-products',name: 'Spt-082-meadows-green', size: '2mtr x 15mtr (Roll)', img: Bravo21, colour: 'green', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Non Directional', accordionCategory: 'Braavo', sku: 'WF/BR/0021', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },

  //krayons
  { id: 13,navCategory: 'flooring-products', name: 'Pastel Green', size: '2mtr x 20mtr (Roll)', img: Krayons1, colour: 'Green', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring, Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/0001', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 14,navCategory: 'flooring-products', name: 'Frosty N Beige', size: '2mtr x 20mtr (Roll)', img: Krayons2, colour: 'Beige', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/0002', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 15,navCategory: 'flooring-products', name: 'Frosty N Grey', size: '2mtr x 20mtr (Roll)', img: Krayons4, colour: 'Blue', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/0003', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 16,navCategory: 'flooring-products', name: 'Frosty N Orange', size: '2mtr x 20mtr (Roll)', img: Krayons5, colour: 'Grey', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/0004', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 17,navCategory: 'flooring-products', name: 'Frosty N Red', size: '2mtr x 20mtr (Roll)', img: Krayons6, colour: 'Orange', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/0005', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 18,navCategory: 'flooring-products', name: 'Frosty N Yellow', size: '2mtr x 20mtr (Roll)', img: Krayons7, colour: 'Red', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/0006', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 19,navCategory: 'flooring-products', name: 'Frosty N Sea Blue', size: '2mtr x 20mtr (Roll)', img: Krayons8, colour: 'Yellow', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/0007', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 20,navCategory: 'flooring-products', name: 'Frosty N Blue', size: '2mtr x 20mtr (Roll)', img: Krayons9, colour: 'Blue', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WFKRr/0008', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 21,navCategory: 'flooring-products', name: 'Pastel Blue', size: '2mtr x 20mtr (Roll)', img: Krayons10, colour: 'Blue', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/0009', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 22,navCategory: 'flooring-products', name: 'Fluoresent', size: '2mtr x 20mtr (Roll)', img: Krayons11, colour: 'Green', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/00010', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 23,navCategory: 'flooring-products', name: 'Pastel Lemon', size: '2mtr x 20mtr (Roll)', img: Krayons12, colour: 'Lemon', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/00011', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 24,navCategory: 'flooring-products', name: 'Pastel Orange', size: '2mtr x 20mtr (Roll)', img: Krayons13, colour: 'Orange', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/00012', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 25,navCategory: 'flooring-products', name: 'Pastel Purple', size: '2mtr x 20mtr (Roll)', img: Krayons14, colour: 'Purple', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/00013', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 26,navCategory: 'flooring-products', name: 'Pastel Cherry', size: '2mtr x 20mtr (Roll)', img: Krayons15, colour: 'Cherry', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/KR/00014', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons Non Directional flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 27,navCategory: 'flooring-products', name: 'Pastel Pink', size: '2mtr x 20mtr (Roll)', img: Krayons16, colour: 'Pink', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring'], collection: 'Non Directional', accordionCategory: 'Krayons', sku: 'WF/kr/0015', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons' },
  { id: 1,navCategory: 'flooring-products', name: 'GDP-550406', size: '30cm x 30cm', img: floorActon, colour: 'Grey', shade: 'Dark', category: 'Tiles', userIndustry: ['Industrial Flooring'], collection: 'GDP', accordionCategory: 'Durofloor', sku: 'WF000051' },
  { id: 2,navCategory: 'flooring-products', name: 'GDP-551004', size: '30cm x 30cm', img: floorHolmes, colour: 'Beige', shade: 'Light', category: 'Planks', userIndustry: ['Office Flooring', 'Residential Flooring'], collection: 'Classic', accordionCategory: 'Durofloor', sku: 'WF000052' },
  { id: 3,navCategory: 'flooring-products', name: 'GDP-551007', size: '30cm x 30cm', img: floorCedar, colour: 'Brown', shade: 'Medium', category: 'Tiles', userIndustry: ['Industrial Flooring'], collection: 'GDP', accordionCategory: 'Siggma', sku: 'WF000053' },
  { id: 4,navCategory: 'flooring-products', name: 'GDP-552107', size: '30cm x 30cm', img: floorCalla, colour: 'Grey', shade: 'Light', category: 'Carpet', userIndustry: ['Office Flooring'], collection: 'Premium', accordionCategory: 'Siggma', sku: 'WF000054' },
  { id: 5,navCategory: 'flooring-products', name: 'GDP-553107', size: '30cm x 30cm', img: floorpoppy6, colour: 'Grey', shade: 'Light', category: 'Carpet', userIndustry: ['Office Flooring'], collection: 'Premium', accordionCategory: 'Siggma', sku: 'WF000055' },
  { id: 6,navCategory: 'flooring-products', name: 'GDP-552112', size: '30cm x 30cm', img: floorTansy, colour: 'Black', shade: 'Dark', category: 'Planks', userIndustry: ['Residential Flooring'], collection: 'Classic', accordionCategory: 'Orbit', sku: 'WF000056' },
  { id: 7,navCategory: 'flooring-products', name: 'GDP-554306', size: '30cm x 30cm', img: floorPoppy, colour: 'White', shade: 'Light', category: 'Tiles', userIndustry: ['Residential Flooring'], collection: 'GDP', accordionCategory: 'Orbit', sku: 'WF000057' },
  { id: 8,navCategory: 'flooring-products', name: 'GDP-555902', size: '30cm x 30cm', img: floorPoppy1, colour: 'Grey', shade: 'Medium', category: 'Carpet', userIndustry: ['Industrial Flooring'], collection: 'Premium', accordionCategory: 'Stoneland Monza', sku: 'WF000058' },
  { id: 9,navCategory: 'flooring-products', name: 'GDP-557304', size: '30cm x 30cm', img: floorPoppy2, colour: 'Beige', shade: 'Medium', category: 'Tiles', userIndustry: ['Office Flooring'], collection: 'Classic', accordionCategory: 'Stoneland Monza', sku: 'WF000059' },
  { id: 10,navCategory: 'flooring-products', name: 'GDP-557703', size: '30cm x 30cm', img: floorPoppy3, colour: 'Brown', shade: 'Dark', category: 'Planks', userIndustry: ['Residential Flooring'], collection: 'Premium', accordionCategory: 'Meteor', sku: 'WF000060' },
  { id: 11,navCategory: 'flooring-products', name: 'GDP-559204', size: '30cm x 30cm', img: floorPoppy4, colour: 'Black', shade: 'Dark', category: 'Carpet', userIndustry: ['Sports Flooring'], collection: 'GDP', accordionCategory: 'Meteor', sku: 'WF000061' },
  { id: 12,navCategory: 'flooring-products', name: 'GDP-559404', size: '30cm x 30cm', img: floorPoppy5, colour: 'White', shade: 'Light', category: 'Tiles', userIndustry: ['Residential Flooring'], collection: 'Classic', accordionCategory: 'Aventus', sku: 'WF000062' },


  // ... paste ALL your existing products, each with navCategory: 'flooring-products'

  // ── LUXURY VINYL TILE ────────────────────────────────────────────────────────
  {
    id: 200,
    navCategory: 'luxury-vinyl-tile',
    accordionCategory: 'Timberworld 1.5mm',
    name: 'A2',
    size: '15.24cm x 91.44cm',
    img: LVT1,
    colour: 'Brown', shade: 'Medium', category: 'Planks',
    collection: 'Wood',
    sku: 'WF/TW/0001',
    url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Timberworld',
    description: "Timberworld is the luxury vinyl floor covering available in plank form and provide the richness and warmness of wood at a much affordable price. The planks form gives an opportunity to design the floor in an array of combinations. ",
    userIndustry: ['Residential Flooring', 'Office Flooring'],
  },
 {
    id: 201,
    navCategory: 'luxury-vinyl-tile',
    accordionCategory: 'Timberworld 1.5mm',
    name: 'A4',
    size: '15.24cm x 91.44cm',
    img: LVT2,
    colour: 'Brown', shade: 'Medium', category: 'Planks',
    collection: 'Wood',
    sku: 'WF/TW/0002',
    url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Timberworld',
    description: "Timberworld is the luxury vinyl floor covering available in plank form and provide the richness and warmness of wood at a much affordable price. The planks form gives an opportunity to design the floor in an array of combinations. ",
    userIndustry: ['Residential Flooring', 'Office Flooring'],
  },
   {
    id: 202,
    navCategory: 'luxury-vinyl-tile',
    accordionCategory: 'Timberworld 1.5mm',
    name: 'A7',
    size: '15.24cm x 91.44cm',
    img: LVT3,
    colour: 'Brown', shade: 'Medium', category: 'Planks',
    collection: 'Wood',
    sku: 'WF/TW/0003',
    url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Timberworld',
    description: "Timberworld is the luxury vinyl floor covering available in plank form and provide the richness and warmness of wood at a much affordable price. The planks form gives an opportunity to design the floor in an array of combinations. ",
    userIndustry: ['Residential Flooring', 'Office Flooring'],
  },
   {
    id: 203,
    navCategory: 'luxury-vinyl-tile',
    accordionCategory: 'Timberworld 1.5mm',
    name: 'B6',
    size: '15.24cm x 91.44cm',
    img: LVT4,
    colour: 'Brown', shade: 'Medium', category: 'Planks',
    collection: 'Wood',
    sku: 'WF/TW/0004',
    url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Timberworld',
    description: "Timberworld is the luxury vinyl floor covering available in plank form and provide the richness and warmness of wood at a much affordable price. The planks form gives an opportunity to design the floor in an array of combinations. ",
    userIndustry: ['Residential Flooring', 'Office Flooring'],
  },
   {
    id: 204,
    navCategory: 'luxury-vinyl-tile',
    accordionCategory: 'Timberworld 1.5mm',
    name: 'B8',
    size: '15.24cm x 91.44cm',
    img: LVT5,
    colour: 'Brown', shade: 'Medium', category: 'Planks',
    collection: 'Wood',
    sku: 'WF/TW/0005',
    url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Timberworld',
    description: "Timberworld is the luxury vinyl floor covering available in plank form and provide the richness and warmness of wood at a much affordable price. The planks form gives an opportunity to design the floor in an array of combinations. ",
    userIndustry: ['Residential Flooring', 'Office Flooring'],
  },
   {
    id: 205,
    navCategory: 'luxury-vinyl-tile',
    accordionCategory: 'Timberworld 1.5mm',
    name: 'C6',
    size: '15.24cm x 91.44cm',
    img: LVT6,
    colour: 'Brown', shade: 'Medium', category: 'Planks',
    collection: 'Wood',
    sku: 'WF/TW/0006',
    url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Timberworld',
    description: "Timberworld is the luxury vinyl floor covering available in plank form and provide the richness and warmness of wood at a much affordable price. The planks form gives an opportunity to design the floor in an array of combinations. ",
    userIndustry: ['Residential Flooring', 'Office Flooring'],
  },
   {
    id: 206,
    navCategory: 'luxury-vinyl-tile',
    accordionCategory: 'Timberworld 1.5mm',
    name: 'NA-01',
    size: '15.24cm x 91.44cm',
    img: LVT7,
    colour: 'Brown', shade: 'Medium', category: 'Planks',
    collection: 'Wood',
    sku: 'WF/TW/0007',
    url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Timberworld',
    description: "Timberworld is the luxury vinyl floor covering available in plank form and provide the richness and warmness of wood at a much affordable price. The planks form gives an opportunity to design the floor in an array of combinations. ",
    userIndustry: ['Residential Flooring', 'Office Flooring'],
  },
   {
    id: 207,
    navCategory: 'luxury-vinyl-tile',
    accordionCategory: 'Timberworld 1.5mm',
    name: 'NB-02',
    size: '15.24cm x 91.44cm',
    img: LVT8,
    colour: 'Brown', shade: 'Medium', category: 'Planks',
    collection: 'Wood',
    sku: 'WF/TW/0008',
    url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Timberworld',
    description: "Timberworld is the luxury vinyl floor covering available in plank form and provide the richness and warmness of wood at a much affordable price. The planks form gives an opportunity to design the floor in an array of combinations. ",
    userIndustry: ['Residential Flooring', 'Office Flooring'],
  },
   {
    id: 208,
    navCategory: 'luxury-vinyl-tile',
    accordionCategory: 'Timberworld 1.5mm',
    name: 'NB-03',
    size: '15.24cm x 91.44cm',
    img: LVT9,
    colour: 'Brown', shade: 'Medium', category: 'Planks',
    collection: 'Wood',
    sku: 'WF/TW/0009',
    url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Timberworld',
    description: "Timberworld is the luxury vinyl floor covering available in plank form and provide the richness and warmness of wood at a much affordable price. The planks form gives an opportunity to design the floor in an array of combinations. ",
    userIndustry: ['Residential Flooring', 'Office Flooring'],
  },
  {
    navCategory: 'luxury-vinyl-tile',
     accordionCategory: 'Timberland Exotica 2mm'
  },
   {
    navCategory: 'luxury-vinyl-tile',
     accordionCategory: 'Timberland Maestro 3mm'
  },
   {
    navCategory: 'luxury-vinyl-tile',
     accordionCategory: 'Timberland Widex'
  },
   {
    navCategory: 'luxury-vinyl-tile',
     accordionCategory: 'Stoneland Monza'
  },
   {
    navCategory: 'luxury-vinyl-tile',
     accordionCategory: 'Timberland Herringbone'
  },
   {
    navCategory: 'luxury-vinyl-tile',
     accordionCategory: 'Grandeure Supreme'
  },
  // ... more LVT products (one per Timberland Maestro, Exotica, etc.)
];
