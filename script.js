// Menu Data extracted strictly and exhaustively from PDF Menu JC'S 2025 with attractive food imagery
const menuData = [
    // Plats Débutants / Happy / Combo / Carnivore
    { 
        id: 1, 
        name: "Plat Débutant", 
        category: "Plats Débutants", 
        price: "8.000 FCFA", 
        numericPrice: 8000, 
        desc: "Pilon de poulet, Ailes de poulet, Brochette de filet de bœuf, Côte d'agneau + Accompagnement (Koliko, Aloko ou Frite)",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 2, 
        name: "Plat Happy", 
        category: "Plats Happy", 
        price: "10.000 FCFA", 
        numericPrice: 10000, 
        desc: "Pilons de poulet, Ailes de poulet, Brochettes de filet de bœuf, Côtelettes d'agneau + Accompagnement (Koliko, Aloko ou Frite)",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 3, 
        name: "Plat Combo", 
        category: "Plats Combo", 
        price: "20.000 FCFA", 
        numericPrice: 20000, 
        desc: "Ailes de poulet, Pilons de poulet, Côte d'agneau, Brochettes de filet de bœuf, Gambas + 2 Accompagnements au choix (Koliko / Aloko / Frite)",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 4, 
        name: "Plat Carnivore", 
        category: "Plats Carnivores", 
        price: "25.000 FCFA", 
        numericPrice: 25000, 
        desc: "Pilons de poulet, Ailes de poulet, Côtelettes d'agneau, Brochettes de filet de bœuf, Gambas, paquet Saucisse fumée de Frankfort + 2 Accompagnements",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
    },

    // Grillades et viandes premium
    { 
        id: 5, 
        name: "Plat de Côtelettes d'agneau", 
        category: "Grillades et viandes premium", 
        price: "11.000 FCFA", 
        numericPrice: 11000, 
        desc: "Côtelettes d'agneau grillées à la braise. Accompagnement Koliko ou Aloko inclus",
        image: "https://i.pinimg.com/1200x/4d/98/18/4d9818b819dfc73cba7d2d020d778150.jpg"
    },
    { 
        id: 6, 
        name: "Plat de filet au grill / à la poêle", 
        category: "Grillades et viandes premium", 
        price: "11.000 FCFA", 
        numericPrice: 11000, 
        desc: "Filet tender d'une tendreté extrême. Accompagnement Koliko ou Aloko inclus",
        image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 7, 
        name: "Plat de gambas", 
        category: "Grillades et viandes premium", 
        price: "14.000 FCFA", 
        numericPrice: 14000, 
        desc: "Gambas royales cuites à la braise. Accompagnement Koliko ou Aloko inclus",
        image: "https://i.pinimg.com/1200x/65/5a/cb/655acb40c4be0d3b6ecfba6c2da1a106.jpg"
    },
    { 
        id: 8, 
        name: "Plat de saucisse de Frankfort", 
        category: "Grillades et viandes premium", 
        price: "5.000 FCFA", 
        numericPrice: 5000, 
        desc: "Saucisses fumées grillées à cœur. Sans accompagnement",
        image: "https://i.pinimg.com/1200x/f7/ca/42/f7ca42b853b914836dae6f1538425972.jpg"
    },
    { 
        id: 9, 
        name: "Plat de merguez", 
        category: "Grillades et viandes premium", 
        price: "9.000 FCFA", 
        numericPrice: 9000, 
        desc: "Merguez artisanales épicées et grillées au feu de bois",
        image: "https://i.pinimg.com/236x/2e/da/eb/2edaeb014cdf4f5336c45c485760e39e.jpg"
    },
    { 
        id: 10, 
        name: "Choukouya poulet", 
        category: "Grillades et viandes premium", 
        price: "9.000 FCFA", 
        numericPrice: 9000, 
        desc: "Poulet grillé sauté aux épices traditionnelles Choukouya + Koliko ou Aloko",
        image: "https://i.pinimg.com/736x/5e/0a/ad/5e0aadbd2d24d79cd582fce4406240aa.jpg"
    },
    { 
        id: 11, 
        name: "Gigot d'agneau flambé", 
        category: "Grillades et viandes premium", 
        price: "25.000 FCFA", 
        numericPrice: 25000, 
        desc: "Gigot d'agneau rôti et flambé en table. (Dispo: 25.000 / 35.000 / 45.000 / 50.000 FCFA)",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 12, 
        name: "Steak filet / Entrecôte", 
        category: "Grillades et viandes premium", 
        price: "11.000 FCFA", 
        numericPrice: 11000, 
        desc: "Steak juteux cuit selon votre préférence + Accompagnement Koliko, Frites ou Aloko",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 13, 
        name: "Sauce crème", 
        category: "Grillades et viandes premium", 
        price: "3.000 FCFA", 
        numericPrice: 3000, 
        desc: "Sauce onctueuse maison pour accompagner vos pièces de viande",
        image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 14, 
        name: "Poissons braisés", 
        category: "Grillades et viandes premium", 
        price: "8.000 FCFA", 
        numericPrice: 8000, 
        desc: "Poisson entier mariné et braisé + Koliko / Aloko ou Atchièkè (8.000 / 10.000 / 15.000 FCFA)",
        image: "https://i.pinimg.com/1200x/b3/06/c0/b306c062cd66e4cc0d702b1fb6a4044d.jpg"
    },
    { 
        id: 15, 
        name: "Plat de pilon", 
        category: "Grillades et viandes premium", 
        price: "8.000 FCFA", 
        numericPrice: 8000, 
        desc: "Pilons de poulet généreusement assaisonnés + Koliko ou Aloko",
        image: "https://i.pinimg.com/1200x/06/5e/3a/065e3a4402e29375ebeb6f2a7fcd23e0.jpg"
    },
    { 
        id: 16, 
        name: "Calamar sauté", 
        category: "Grillades et viandes premium", 
        price: "11.000 FCFA", 
        numericPrice: 11000, 
        desc: "Calamars sautés à l'ail, persil et épices de la maison",
        image: "https://i.pinimg.com/736x/da/99/6c/da996c4fbeb99c85ee21c11d64012a95.jpg"
    },
    { 
        id: 17, 
        name: "Emballé de mouton", 
        category: "Grillades et viandes premium", 
        price: "12.000 FCFA", 
        numericPrice: 12000, 
        desc: "Morceaux de mouton tendres mijotés et cuits en papillote aux aromates",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 18, 
        name: "Plat d'aile de poulet", 
        category: "Grillades et viandes premium", 
        price: "8.000 FCFA", 
        numericPrice: 8000, 
        desc: "Ailes de poulet croustillantes et braisées + Koliko ou Aloko",
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 19, 
        name: "Brochettes de filet de bœuf", 
        category: "Grillades et viandes premium", 
        price: "5.000 FCFA", 
        numericPrice: 5000, 
        desc: "Brochettes de bœuf tendres grillées au feu de bois. Sans accompagnement",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 20, 
        name: "Supplément Frite / Koliko / Aloko", 
        category: "Grillades et viandes premium", 
        price: "1.000 FCFA", 
        numericPrice: 1000, 
        desc: "Portion généreuse d'accompagnement au choix",
        image: "https://i.pinimg.com/736x/39/4a/d2/394ad2a2272554ec8326219f552890f9.jpg"
    },
    { 
        id: 21, 
        name: "Supplément Riz", 
        category: "Grillades et viandes premium", 
        price: "1.500 FCFA", 
        numericPrice: 1500, 
        desc: "Portion de riz parfumé",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=80"
    },

    // Black Angus USA
    { 
        id: 22, 
        name: "Black Angus - Tomahawk", 
        category: "Black Angus", 
        price: "40.000 FCFA", 
        numericPrice: 40000, 
        desc: "Pièce d'exception importée des USA. Persillage intense + Accompagnement",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 23, 
        name: "Black Angus - Entrecôte / Ribeye", 
        category: "Black Angus", 
        price: "35.000 FCFA", 
        numericPrice: 35000, 
        desc: "Entrecôte Black Angus persillée et tendre + Accompagnement",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 24, 
        name: "Black Angus - Côtelettes / Lamb", 
        category: "Black Angus", 
        price: "25.000 FCFA", 
        numericPrice: 25000, 
        desc: "Côtelettes d'agneau d'importation premium + Accompagnement",
        image: "https://i.pinimg.com/1200x/4f/30/e8/4f30e848fba3c497b79321949f8fd47b.jpg"
    },

    // Wagyu Premium Meat
    { 
        id: 25, 
        name: "Wagyu Premium - Filet", 
        category: "Wagyu Premium Meat", 
        price: "65.000 FCFA", 
        numericPrice: 65000, 
        desc: "Le sommet de la gastronomie carnivore. Tendreté légendaire + Accompagnement",
        image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 26, 
        name: "Wagyu Premium - Entrecôte / Ribeye", 
        category: "Wagyu Premium Meat", 
        price: "60.000 FCFA", 
        numericPrice: 60000, 
        desc: "Ribeye Wagyu marbré fondant en bouche + Accompagnement",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 27, 
        name: "Wagyu Premium - Tomahawk", 
        category: "Wagyu Premium Meat", 
        price: "60.000 FCFA", 
        numericPrice: 60000, 
        desc: "Pièce géante Wagyu cuite au feu de bois + Accompagnement",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
    },

    // Cocktails sans alcool
    { 
        id: 28, 
        name: "Virgin Mojito", 
        category: "Cocktails sans alcool", 
        price: "3.000 FCFA", 
        numericPrice: 3000, 
        desc: "Citron vert, sucre de canne, sucre roux, menthe fraîche et eau gazeuse",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 29, 
        name: "Virgin Bazooka", 
        category: "Cocktails sans alcool", 
        price: "3.000 FCFA", 
        numericPrice: 3000, 
        desc: "Jus multi fruits, sirop de canne à sucre et grenadine",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 30, 
        name: "Virgin Sprint", 
        category: "Cocktails sans alcool", 
        price: "3.000 FCFA", 
        numericPrice: 3000, 
        desc: "Red Bull, citron vert, sucre de canne et sirop de menthe",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 31, 
        name: "Nature Océan", 
        category: "Cocktails sans alcool", 
        price: "3.000 FCFA", 
        numericPrice: 3000, 
        desc: "Curaçao blue sans alcool, Sprite et eau gazeuse",
        image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 32, 
        name: "Virgin Piña Colada", 
        category: "Cocktails sans alcool", 
        price: "3.000 FCFA", 
        numericPrice: 3000, 
        desc: "Jus d'ananas frais, crème de coco et sucre de canne",
        image: "https://i.pinimg.com/236x/ae/1a/58/ae1a589813342d3745ecf92a9b6ec180.jpg"
    },

    // Cocktails avec alcool
    { 
        id: 33, 
        name: "Mojito (Classique / Ananas / Passion)", 
        category: "Cocktails avec alcool", 
        price: "4.000 FCFA", 
        numericPrice: 4000, 
        desc: "Rhum blanc, menthe, citron vert, sucre et déclinaison de fruits",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 34, 
        name: "Caïpirinha", 
        category: "Cocktails avec alcool", 
        price: "4.500 FCFA", 
        numericPrice: 4500, 
        desc: "Cachaça brésilienne, citron vert pillé et sucre roux",
        image: "https://images.unsplash.com/photo-1587223962930-cb7f31384c19?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 35, 
        name: "Piña Colada", 
        category: "Cocktails avec alcool", 
        price: "4.500 FCFA", 
        numericPrice: 4500, 
        desc: "Rhum ambré, crème de coco, jus d'ananas et sirop de canne",
        image: "https://i.pinimg.com/236x/90/85/cc/9085cce265901e20d961792afce07fd3.jpg"
    },
    { 
        id: 36, 
        name: "Blue Ocean", 
        category: "Cocktails avec alcool", 
        price: "4.000 FCFA", 
        numericPrice: 4000, 
        desc: "Vodka, Curaçao blue, Sprite et citron vert",
        image: "https://i.pinimg.com/736x/3b/e6/cf/3be6cf6af39b4a3e44c9f6c8a008d8f2.jpg"
    },
    { 
        id: 37, 
        name: "Cocktail Maison Bazooka", 
        category: "Cocktails avec alcool", 
        price: "4.500 FCFA", 
        numericPrice: 4500, 
        desc: "Rhum blanc, jus multi fruits, sirop de canne et grenadine",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 38, 
        name: "Sprint", 
        category: "Cocktails avec alcool", 
        price: "4.500 FCFA", 
        numericPrice: 4500, 
        desc: "Vodka, Red Bull, citron vert, sucre de canne et menthe",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 39, 
        name: "Cuba Libre", 
        category: "Cocktails avec alcool", 
        price: "4.000 FCFA", 
        numericPrice: 4000, 
        desc: "Rhum blanc, jus de citron vert et Coca-Cola glacé",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 40, 
        name: "Monaco", 
        category: "Cocktails avec alcool", 
        price: "4.000 FCFA", 
        numericPrice: 4000, 
        desc: "Bière blonde, grenadine et limonade gazeuse",
        image: "https://i.pinimg.com/1200x/44/26/3e/44263e769f95a8767c1d4ca1328becbe.jpg"
    },
    { 
        id: 41, 
        name: "Tequila Sunrise", 
        category: "Cocktails avec alcool", 
        price: "4.500 FCFA", 
        numericPrice: 4500, 
        desc: "Tequila, jus d'orange pressé et sirop de grenadine",
        image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 42, 
        name: "Zombie", 
        category: "Cocktails avec alcool", 
        price: "5.000 FCFA", 
        numericPrice: 5000, 
        desc: "Rhum blanc, rhum ambré, liqueur d'abricot, lime cordial et grenadine",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
    },

    // Soft drinks
    { 
        id: 43, 
        name: "Coca / Fanta / Sprite", 
        category: "Soft drinks", 
        price: "1.000 FCFA", 
        numericPrice: 1000, 
        desc: "Sodas frais 33cl",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 44, 
        name: "Eau minérale", 
        category: "Soft drinks", 
        price: "500 FCFA", 
        numericPrice: 500, 
        desc: "Bouteille d'eau minérale fraîche",
        image: "https://i.pinimg.com/736x/7e/7c/94/7e7c947754445bd85074466e3bfeebdd.jpg"
    },
    { 
        id: 45, 
        name: "Eau gazeuse / Red Bull / Tonic", 
        category: "Soft drinks", 
        price: "1.500 FCFA", 
        numericPrice: 1500, 
        desc: "Boissons rafraîchissantes et énergisantes",
        image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 46, 
        name: "Jus de fruits (Cocktail / Pomme / Raisin)", 
        category: "Soft drinks", 
        price: "2.000 FCFA", 
        numericPrice: 2000, 
        desc: "Jus de fruits pur (Dispo: 2.000 / 3.000 FCFA)",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 47, 
        name: "Big Joe", 
        category: "Soft drinks", 
        price: "5.000 FCFA", 
        numericPrice: 5000, 
        desc: "Boisson grand format",
        image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 48, 
        name: "Leffe Blonde (Bière Importée)", 
        category: "Soft drinks", 
        price: "2.000 FCFA", 
        numericPrice: 2000, 
        desc: "Bière d'abbaye belge d'exception",
        image: "https://i.pinimg.com/1200x/dd/d4/5d/ddd45daf079bf276c03304b8a6c30ac9.jpg"
    },
    { 
        id: 49, 
        name: "Beaufort / Heineken", 
        category: "Soft drinks", 
        price: "1.000 FCFA", 
        numericPrice: 1000, 
        desc: "Bières blondes rafraîchissantes",
        image: "https://i.pinimg.com/736x/94/a0/25/94a025ae10b9da209f870c2a1c4c9d0f.jpg"
    },
    { 
        id: 50, 
        name: "Desperados", 
        category: "Soft drinks", 
        price: "2.500 FCFA", 
        numericPrice: 2500, 
        desc: "Bière blonde aromatisée Tequila",
        image: "https://i.pinimg.com/736x/73/e0/e0/73e0e0a13ca5c16ed86ece144b71f646.jpg"
    },
    { 
        id: 51, 
        name: "Awooyo / Guinness (Bière locale)", 
        category: "Soft drinks", 
        price: "1.500 FCFA", 
        numericPrice: 1500, 
        desc: "Bière brune et blonde locale",
        image: "https://i.pinimg.com/1200x/1e/2c/2e/1e2c2ed85f0b3b20757b1a2b0f19106e.jpg"
    },

    // Vins
    { 
        id: 52, 
        name: "Vin Rouge Sélection", 
        category: "Vins", 
        price: "12.000 FCFA", 
        numericPrice: 12000, 
        desc: "Bouteille de vin rouge pour accompagner vos viandes (12.000 / 15.000 / 18.000 FCFA)",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 53, 
        name: "Vin Blanc Sélection", 
        category: "Vins", 
        price: "12.000 FCFA", 
        numericPrice: 12000, 
        desc: "Bouteille de vin blanc sec (12.000 / 15.000 / 18.000 FCFA)",
        image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 54, 
        name: "Vin Moelleux Sélection", 
        category: "Vins", 
        price: "12.000 FCFA", 
        numericPrice: 12000, 
        desc: "Vin fruité et doux (12.000 / 15.000 / 18.000 FCFA)",
        image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 55, 
        name: "Vin Mousseux Freixenet", 
        category: "Vins", 
        price: "15.000 FCFA", 
        numericPrice: 15000, 
        desc: "Bouteille de Cava mousseux espagnol réputé",
        image: "https://i.pinimg.com/1200x/c3/69/d4/c369d4f41d891fecffa01a9cef11b55a.jpg"
    },

    // Champagnes
    { 
        id: 56, 
        name: "Champagne Belaire", 
        category: "Champagnes", 
        price: "35.000 FCFA", 
        numericPrice: 35000, 
        desc: "Luc Belaire d'exception 75cl",
        image: "https://i.pinimg.com/1200x/f5/d3/9e/f5d39e6d3f493be81de896c53ab43f68.jpg"
    },
    { 
        id: 57, 
        name: "Nicolas Feuillatte Brut", 
        category: "Champagnes", 
        price: "55.000 FCFA", 
        numericPrice: 55000, 
        desc: "Champagne Français Brut raffiné",
        image: "https://i.pinimg.com/1200x/f3/32/bc/f332bc58974e3e43591626f9540073b6.jpg"
    },
    { 
        id: 58, 
        name: "Nicolas Feuillatte Rosé", 
        category: "Champagnes", 
        price: "65.000 FCFA", 
        numericPrice: 65000, 
        desc: "Champagne Rosé élégant et fruité",
        image: "https://i.pinimg.com/736x/a7/29/0a/a7290a049cc645cfae120a85d0bf7759.jpg"
    },
    { 
        id: 59, 
        name: "Champagne Trouillard Brut", 
        category: "Champagnes", 
        price: "55.000 FCFA", 
        numericPrice: 55000, 
        desc: "Cuvée Brut 75cl",
        image: "https://i.pinimg.com/736x/9e/5c/38/9e5c38eb772cf653894371ca3026e7e2.jpg"
    },
    { 
        id: 60, 
        name: "Champagne Trouillard Rosé", 
        category: "Champagnes", 
        price: "65.000 FCFA", 
        numericPrice: 65000, 
        desc: "Cuvée Rosé d'exception 75cl",
        image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 61, 
        name: "Laurent Perrier Brut", 
        category: "Champagnes", 
        price: "55.000 FCFA", 
        numericPrice: 55000, 
        desc: "Maison Laurent Perrier Brut prestige",
        image: "https://i.pinimg.com/1200x/a5/6e/bb/a56ebb1190823bb349eb1b11e1958890.jpg"
    },
    { 
        id: 62, 
        name: "Laurent Perrier Demi-Sec", 
        category: "Champagnes", 
        price: "60.000 FCFA", 
        numericPrice: 60000, 
        desc: "Champagne délicatement sucré",
        image: "https://i.pinimg.com/736x/f7/df/95/f7df955704acb8e5ba76629626ed8fa4.jpg"
    },
    { 
        id: 63, 
        name: "Moët & Chandon Brut", 
        category: "Champagnes", 
        price: "60.000 FCFA", 
        numericPrice: 60000, 
        desc: "Iconique Champagne Moët & Chandon Brut",
        image: "https://i.pinimg.com/1200x/e3/c2/87/e3c287fe7d5a95729fec070d7b8f8676.jpg"
    },
    { 
        id: 64, 
        name: "Moët & Chandon Brut Impérial", 
        category: "Champagnes", 
        price: "65.000 FCFA", 
        numericPrice: 65000, 
        desc: "Cuvée mythique Impériale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmh9aYL_8vWPU5qNRO7l4Hr2NXjMN-K8GAN1-99FWmvqGw5HUvOs-Hbfw&s=10"
    },
    { 
        id: 65, 
        name: "Moët & Chandon Rosé", 
        category: "Champagnes", 
        price: "75.000 FCFA", 
        numericPrice: 75000, 
        desc: "Champagne Rosé haut de gamme",
        image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 66, 
        name: "Veuve Clicquot Brut", 
        category: "Champagnes", 
        price: "65.000 FCFA", 
        numericPrice: 65000, 
        desc: "Bouteille Carte Jaune Brut 75cl",
        image: "https://i.pinimg.com/1200x/85/ac/d3/85acd316392b17a195e9deef6365b3a0.jpg"
    },
    { 
        id: 67, 
        name: "Veuve Clicquot Rosé", 
        category: "Champagnes", 
        price: "80.000 FCFA", 
        numericPrice: 80000, 
        desc: "Rosé de prestige Veuve Clicquot",
        image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=600&q=80"
    },

    // Spiritueux & Whisky
    { 
        id: 68, 
        name: "Apéro Suze", 
        category: "Spiritueux", 
        price: "16.000 FCFA", 
        numericPrice: 16000, 
        desc: "Bouteille d'apéritif à la gentiane",
        image: "https://i.pinimg.com/736x/79/a0/15/79a0159f0e8bdb4d81e7714c45321bd2.jpg"
    },
    { 
        id: 69, 
        name: "Grant's Whisky", 
        category: "Spiritueux", 
        price: "15.000 FCFA", 
        numericPrice: 15000, 
        desc: "Bouteille de Scotch Whisky",
        image: "https://i.pinimg.com/1200x/15/16/6e/15166e856821d89d0fe5d18fe74eda01.jpg"
    },
    { 
        id: 70, 
        name: "Black Label", 
        category: "Spiritueux", 
        price: "30.000 FCFA", 
        numericPrice: 30000, 
        desc: "Johnnie Walker Black Label (75cl: 30.000 FCFA / 1L: 45.000 FCFA)",
        image: "https://i.pinimg.com/736x/3d/cc/cc/3dccccf74e222b00d64dac3191ac0039.jpg"
    },
    { 
        id: 71, 
        name: "Jack Daniel's", 
        category: "Spiritueux", 
        price: "25.000 FCFA", 
        numericPrice: 25000, 
        desc: "Tennessee Whiskey Old No. 7 (Dispo: 25.000 / 35.000 FCFA)",
        image: "https://i.pinimg.com/1200x/6b/0b/b0/6b0bb060b282812db0ac11697d94e6b3.jpg"
    },
    { 
        id: 72, 
        name: "Chivas 12 ans", 
        category: "Spiritueux", 
        price: "35.000 FCFA", 
        numericPrice: 35000, 
        desc: "Chivas Regal 12 Years Old 75cl",
        image: "https://i.pinimg.com/736x/60/7a/26/607a26dc6ba247257f21c1ff2c2610d3.jpg"
    },
    { 
        id: 73, 
        name: "Double Black", 
        category: "Spiritueux", 
        price: "40.000 FCFA", 
        numericPrice: 40000, 
        desc: "Johnnie Walker Double Black (75cl: 40.000 FCFA / 1L: 60.000 FCFA)",
        image: "https://i.pinimg.com/736x/ef/e1/ea/efe1ea180ca15348d9964e50101f21cf.jpg"
        
    },
    { 
        id: 74, 
        name: "Hennessy VS", 
        category: "Spiritueux", 
        price: "55.000 FCFA", 
        numericPrice: 55000, 
        desc: "Cognac Hennessy Very Special (75cl: 55.000 FCFA / 1L: 60.000 FCFA)",
        image: "https://i.pinimg.com/736x/22/1e/46/221e463cd4b9a851d5649e80840c2d8b.jpg"
    },
    { 
        id: 75, 
        name: "Hennessy VSOP", 
        category: "Spiritueux", 
        price: "75.000 FCFA", 
        numericPrice: 75000, 
        desc: "Cognac de très grande réserve",
        image: "https://i.pinimg.com/1200x/60/2e/e1/602ee1ed8dd8e487680e7b7aec0ab5ca.jpg"
    },
    { 
        id: 76, 
        name: "Whisky Glenfiddich (1L)", 
        category: "Spiritueux", 
        price: "65.000 FCFA", 
        numericPrice: 65000, 
        desc: "Single Malt Scotch Whisky premium 1 Liter",
        image: "https://i.pinimg.com/736x/79/4b/c0/794bc09884c810c4f672c542470d825a.jpg"
    },
    { 
        id: 77, 
        name: "Tequila Don Julio", 
        category: "Spiritueux", 
        price: "60.000 FCFA", 
        numericPrice: 60000, 
        desc: "Tequila 100% Agave bleue de Mexico",
        image: "https://i.pinimg.com/736x/d9/5b/56/d95b567555c7555321837b63d4fc5b7e.jpg"
    },
    { 
        id: 78, 
        name: "Don Papa Rhum", 
        category: "Spiritueux", 
        price: "55.000 FCFA", 
        numericPrice: 55000, 
        desc: "Rhum ambré gourmand aux notes de vanille",
        image: "https://i.pinimg.com/1200x/c4/d3/dc/c4d3dc8a80268a79e255dc15f9bc23bb.jpg"
    },
    { 
        id: 79, 
        name: "Shot Martini / Campari / Rhum", 
        category: "Spiritueux", 
        price: "2.500 FCFA", 
        numericPrice: 2500, 
        desc: "Dose individuelle au verre",
        image: "https://i.pinimg.com/736x/b6/a2/d5/b6a2d5a7d508b155d46db99e55a33f30.jpg"
    },
    { 
        id: 80, 
        name: "Shot Baileys / Black Label", 
        category: "Spiritueux", 
        price: "3.500 FCFA", 
        numericPrice: 3500, 
        desc: "Dose individuelle au verre",
        image: "https://i.pinimg.com/736x/3d/5a/ff/3d5aff7a10c36587b1500252ba0e4cda.jpg"
    },
    { 
        id: 81, 
        name: "Shot Tequila Premium", 
        category: "Spiritueux", 
        price: "4.000 FCFA", 
        numericPrice: 4000, 
        desc: "Shot de tequila glacée",
        image: "https://i.pinimg.com/736x/84/58/56/845856e002c91898b8fd588b12e4a896.jpg"
    },
    { 
        id: 82, 
        name: "Shot Double Black", 
        category: "Spiritueux", 
        price: "6.000 FCFA", 
        numericPrice: 6000, 
        desc: "Shot intense Double Black",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 83, 
        name: "Shot Glenfiddich", 
        category: "Spiritueux", 
        price: "6.500 FCFA", 
        numericPrice: 6500, 
        desc: "Shot de Single Malt d'exception",
        image: "https://i.pinimg.com/1200x/d1/03/2a/d1032a6963e7198f1c141ef21b5ebf4a.jpg"
    },

    // Thés et cafés
    { 
        id: 84, 
        name: "Thé vert / Infusion menthe / Lipton", 
        category: "Thés et cafés", 
        price: "1.000 FCFA", 
        numericPrice: 1000, 
        desc: "Tasse de thé chaud réconfortant",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
    },
    { 
        id: 85, 
        name: "Thé vert menthe & citron", 
        category: "Thés et cafés", 
        price: "1.000 FCFA", 
        numericPrice: 1000, 
        desc: "Infusion de thé vert aux zestes de citron",
        image: "https://i.pinimg.com/736x/5e/5e/bf/5e5ebf8379f47f64f5cedcca5591ecc7.jpg"
    },
    { 
        id: 86, 
        name: "Thé vert au gingembre", 
        category: "Thés et cafés", 
        price: "1.500 FCFA", 
        numericPrice: 1500, 
        desc: "Thé vert tonique infusé aux racines de gingembre",
        image: "https://i.pinimg.com/736x/69/2f/d6/692fd6f17920a93cc08257c16fe7590c.jpg"
    },
    { 
        id: 87, 
        name: "Expresso", 
        category: "Thés et cafés", 
        price: "2.000 FCFA", 
        numericPrice: 2000, 
        desc: "Café expresso pur et serré",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80"
    }
];

let cart = [];
let activeCategory = "Tous";

document.addEventListener("DOMContentLoaded", () => {
    renderFilters();
    renderMenu();
    setupEventListeners();
});

function renderFilters() {
    const categories = ["Tous", ...new Set(menuData.map(item => item.category))];
    const container = document.getElementById("menu-filters");
    
    container.innerHTML = categories.map(cat => `
        <button onclick="filterCategory('${cat}')" 
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border ${activeCategory === cat ? 'bg-brandFlame text-white border-brandFlame shadow-lg shadow-brandFlame/20' : 'bg-brandSurface text-brandMuted border-white/10 hover:border-white/30 hover:text-white'}">
            ${cat}
        </button>
    `).join('');
}

function filterCategory(cat) {
    activeCategory = cat;
    renderFilters();
    renderMenu();
}

function renderMenu() {
    const container = document.getElementById("menu-items-grid");
    const filtered = activeCategory === "Tous" 
        ? menuData 
        : menuData.filter(item => item.category === activeCategory);

    container.innerHTML = filtered.map(item => `
        <div class="bg-brandSurface rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between hover:border-brandFlame/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brandFlame/10 group">
            <div>
                <!-- Image attractive du plat / boisson -->
                <div class="h-48 overflow-hidden relative bg-brandDark">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100">
                    <span class="absolute top-3 left-3 text-[10px] font-bold text-brandAmber uppercase tracking-widest px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-md border border-brandAmber/30">${item.category}</span>
                    <span class="absolute bottom-3 right-3 text-sm font-black text-white bg-gradient-to-r from-brandFlame to-brandAmber px-3 py-1 rounded-lg shadow-lg border border-white/20">${item.price}</span>
                </div>
                
                <div class="p-5">
                    <h3 class="text-lg font-extrabold text-white group-hover:text-brandFlame transition-colors">${item.name}</h3>
                    <p class="text-xs text-brandMuted mt-2 leading-relaxed">${item.desc}</p>
                </div>
            </div>
            
            <div class="px-5 pb-5 pt-2 flex items-center justify-between border-t border-white/5">
                <span class="text-xs font-semibold text-brandMuted">Prix : <strong class="text-white text-sm font-black">${item.price}</strong></span>
                <button onclick="addToCart(${item.id})" class="px-4 py-2 bg-gradient-to-r from-brandFlame to-brandAmber hover:brightness-110 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2">
                    <i class="fa-solid fa-plus"></i> Ajouter
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    const existing = cart.find(i => i.id === id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCartUI();
    toggleCart(true);
}

function updateCartUI() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.numericPrice * item.qty), 0);

    const badge = document.getElementById("cart-badge");
    const badgeMobile = document.getElementById("cart-badge-mobile");
    
    if (totalQty > 0) {
        badge.innerText = totalQty;
        badge.classList.remove("hidden");
        badgeMobile.innerText = totalQty;
        badgeMobile.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
        badgeMobile.classList.add("hidden");
    }

    const container = document.getElementById("cart-items-container");
    if (cart.length === 0) {
        container.innerHTML = `<p class="text-brandMuted text-center py-8">Votre panier est vide.</p>`;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="flex items-center justify-between bg-brandDark p-3 rounded-xl border border-white/5">
                <div class="flex items-center gap-3">
                    <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover border border-white/10">
                    <div>
                        <h4 class="font-bold text-white text-xs sm:text-sm line-clamp-1">${item.name}</h4>
                        <p class="text-xs text-brandFlame font-semibold">${item.price}</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="changeQty(${item.id}, -1)" class="w-6 h-6 rounded-lg bg-brandSurface text-white font-bold flex items-center justify-center border border-white/10 hover:bg-brandCard">-</button>
                    <span class="text-xs font-bold text-white px-1">${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)" class="w-6 h-6 rounded-lg bg-brandSurface text-white font-bold flex items-center justify-center border border-white/10 hover:bg-brandCard">+</button>
                </div>
            </div>
        `).join('');
    }

    document.getElementById("cart-total").innerText = totalPrice.toLocaleString('fr-FR') + " FCFA";
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
}

function toggleCart(forceOpen = false) {
    const drawer = document.getElementById("cart-drawer");
    if (forceOpen) {
        drawer.classList.remove("hidden");
    } else {
        drawer.classList.toggle("hidden");
    }
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }

    let message = "Bonjour JC'S BBQ Lomé, je souhaite passer une commande :\n\n";
    cart.forEach(item => {
        message += `• ${item.name} x${item.qty} - ${(item.numericPrice * item.qty).toLocaleString('fr-FR')} FCFA\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.numericPrice * item.qty), 0);
    message += `\n*Total : ${total.toLocaleString('fr-FR')} FCFA*`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/22891475020?text=${encoded}`, '_blank');
}

function setupEventListeners() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    
    if (btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });

        document.querySelectorAll(".mobile-link").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.add("hidden");
            });
        });
    }
}
