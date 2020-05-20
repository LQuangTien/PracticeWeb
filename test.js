var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  function getObjectKey(obj, keys) {
    // Write code here...
    var result = []
    for( var item in obj){
        if(typeof(item)  === "object"){
            getObjectKey(item);
        }
        result.push(item)
    }
    return result;
  }
  console.log(getObjectKey(apartment));