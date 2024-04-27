class animal{
    constructor(name){
        console.log('constructor is called');
        console.log(`this is a ${name}`);
        this.name=name
    }

   eats() {
    console.log('eating');
    
   }
   runs(){
    console.log('running');
    
   }
}

let tiger=new animal("tiger");

tiger.eats()

// lion is a child class where properties of animal are inherited
class lion extends animal{

    constructor(){
    
        // a derived class constructor must call the base class constructor first
        super("lion")
        console.log('lion is created');
        
    }

    eats(){
        console.log('eating flesh');
        
        super.eats();
    }
}

const l=new lion();

l.eats();

// console.log(l instanceof lion);

console.log(l instanceof animal);

console.log(l);
