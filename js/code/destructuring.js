const user = {
  name: 'mario',
  country: 'br'
};
let text= `Hi ${user.name} is from ${user.country}`;
console.log(text);


const { name, country } = user;
text= `Hi ${name} is from ${country}`;
console.log(text);
