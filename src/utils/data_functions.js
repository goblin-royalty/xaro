export default function getData(objects) {

  
  let arr = [];
  Object.keys(objects).forEach(property_key => {
       arr.push(objects[property_key]);
  });
 return arr;

}











