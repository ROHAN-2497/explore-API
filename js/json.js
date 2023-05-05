const user = { id: 1 , name: 'gorib amir', job: 'actor'};
/* JavaScript Object Notation */
const stringified = JSON.stringify(user);
/* console.log(stringified)
console.log(user); */

const shop = {
      owner : 'Alia Bhat', 
      address : {
        street : 'kochukhet voot er goli',
        city : 'ranbir',
        country : 'Dhaka'
    },
        products : ['laptop', 'mobile', 'mic', 'monitor','keyboard'] ,
        revenue : 450000,
        isOpen : true,
        isNew : false
}
const stringifie = JSON.stringify(shop);
console.log(stringifie);
console.log(shop);

const shopObj = JSON.parse(stringifie);
console.log(shopObj); 