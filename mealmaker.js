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
     
      if ((courseName === 'appetizers') && (typeof courseName === 'string')){
            return this.appetizers = dish;
      } else if ((courseName === 'mains') && (typeof courseName === 'string')) {
            return this.mains = dish; 
      } else if ((courseName === 'desserts') && (typeof courseName === 'string')) {
            return this.desserts = dish; 
      }
     },
    
    getRandomDishFromCourse(courseName) {
        let dishes = [];

       if ((courseName === 'appetizers') && (typeof courseName === 'string')) {        
            dishes = this.appetizers.slice();

      } else if ((courseName === 'mains') && (typeof courseName === 'string')) {  
            dishes = this.mains.slice();

      } else if ((courseName === 'desserts') && (typeof courseName === 'string')) { 
            dishes = this.desserts.slice();
      } else {
          return `enter a valid course name: 'desserts', 'mains' or 'appetizers' !`;
      }
 
      dishIndex = Math.floor(Math.random() * dishes.length);
      return dishes[dishIndex]; 
    },
     
    generateRandomMeal () {
      const appetizers = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizers.price + mains.price + desserts.price;
      return `Your three course meal is ${appetizers.name}, ${mains.name} and ${desserts.name}. You will be ${totalPrice} dollars out of pocket!`;
    },      
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Potato Salad', 3.6);
  menu.addDishToCourse('appetizers', 'Chicken Wings', 10.6);
  menu.addDishToCourse('appetizers', 'Garlic bread', 6.54);
  menu.addDishToCourse('mains', 'Steak with mashed potatoes', 23);
  menu.addDishToCourse('mains', 'Pasta Carbonara', 18);
  menu.addDishToCourse('mains', 'Duck Soup', 32);
  menu.addDishToCourse('mains', 'Sauerkraut and oven pork roast', 28.6);
  menu.addDishToCourse('desserts', 'Ice cream variety', 14.5);
  menu.addDishToCourse('desserts', 'New York Cheese Cake', 18.4);
  menu.addDishToCourse('desserts', 'Fruit plate', 10.2);
  menu.addDishToCourse('desserts', 'Mountain of cookies', 10.2);
 
meal = menu.generateRandomMeal();
  
console.log(meal);