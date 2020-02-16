const menu = {
    _courses : {
      _appetizers : [],
      _mains : [],
      _desserts : []
    },
    
    get appetizers () {
      return this._courses._appetizers;
    },
    
  
    set appetizers (appetizerIn) {
        return this._courses._appetizers.push(appetizerIn);
    },
    
    get mains () {
      return this._courses._mains;
    },
    
    set mains (mainsIn) {
        return this._courses._mains.push(mainsIn);
    },
    
    get desserts () {
      return this._courses._desserts;
    },
    
    set desserts (dessertsIn) {
        this._courses._desserts.push(dessertsIn)
    },
    
    get courses () {
      return {
      appetizers : this._courses._appetizers,
      mains : this._courses._mains,
      desserts : this._courses._desserts,
    }
    },
    
  addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name : dishName,
        price : dishPrice
      };
     //console.log(dish.name);

      if ((courseName === 'appetizers') && (typeof courseName === 'string')){
        //console.log('This is an appetizers food item');
         return this.appetizers = dish;
      } else if ((courseName === 'mains') && (typeof courseName === 'string')) {
          //console.log('This is a mains food item');
          return this.mains = dish; 
      } else if ((courseName === 'desserts') && (typeof courseName === 'string')) {
        //console.log('This is a desserts food item');
        return this.desserts = dish; 
      }
      //return this.courseName = dish; //PROBLEM HERE 
   
    },
    
    getRandomDishFromCourse(courseName) {
      
      const dishes = [this.courses.courseName];
      //console.log(dishes, this.courses.courseName);
      const dishIndex = Math.floor(Math.random() * (dishes.length)); 
      //console.log(dishIndex);  
      return dishes[dishIndex];  
    },
     
    generateRandomMeal () {
      const appetizers = this.getRandomDishFromCourse(this.appetizers);
      //console.log(appetizers);
      const mains = this.getRandomDishFromCourse(this.mains);
      const desserts = this.getRandomDishFromCourse(this.desserts);
      
       /*return `The three course meal is {appetizer[dishName]}, {mains[dishName]}, {desserts[dishName]}, and the total price of the meal is {appetizer[dishPrice]}, {mains[dishPrice]}, {desserts[dishPrice]}`;
        },*/
        
    
  }
  }
  
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Potato Salad', 3.6);
  menu.addDishToCourse('appetizers', 'Chicken Wings', 10.6);
  menu.addDishToCourse('mains', 'Steak with mashed potatoes', 23);
  menu.addDishToCourse('mains', 'Pasta Carbonara', 18);
  menu.addDishToCourse('mains', 'Duck Soup', 32);
  menu.addDishToCourse('desserts', 'Ice cream variety', 14.5);
  menu.addDishToCourse('desserts', 'New York Cheese Cake', 18.4);
  menu.addDishToCourse('desserts', 'Fruit plate', 10.2);
 

  
  //console.log(`The appetizers are ${menu.courses.appetizers}`);
  //console.log(`The mains are ${menu.courses.mains}`);
  //console.log(`The desserts are ${menu.courses.desserts}`);
  console.log(menu.courses.appetizers);
  console.log(menu.courses.mains);
  console.log(menu.courses.desserts);


    // meal = menu.generateRandomMeal();
  
  //console.log(meal);