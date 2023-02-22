const shop = {
    owner:'Alia',
    address:{
        streat: 'kochukhet voot er goli',
        city:'ranbir',
        country:"BD"
    },
    products:['laptop', 'mic', 'monitor', 'keyboard'],
    revenue:45000,
    isOpen:true,
    isNew:false
};
console.log(shop.address.city);
console.log(shop.products);
const strinJson = JSON.stringify(shop);
console.log(strinJson)
const parseJson = JSON.parse(strinJson);
console.log(parseJson);