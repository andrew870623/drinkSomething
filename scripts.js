products: {
        products = [
        {
            "name": "Bubble Milk Tea",
            "price": 5.99,
            "active": false,
            "quantity": 1,
            "note":""
        },
        {
            "name": "Milk Tea",
            "price": 4.99,
            "active": false,
            "quantity": 1,
            "note":""
        },
        {
            "name": "Green Tea",
            "price": 2.99,
            "active": false,
            "quantity": 1,
            "note":""
        },
        {
            "name": "Orange Juice",
            "price": 2.49,
            "active": false,
            "quantity": 1,
            "note":""
        },
        {
            "name": "Ice Tea",
            "price": 1.99,
            "active": false,
            "quantity": 1,
            "note":""
        },
        {
            "name": "Water",
            "price": 1.49,
            "active": false,
            "quantity": 1,
            "note":""
        },
];
}

const SelfServiceMachine = {
    data() {
        return {
            products: window.products,
            orderTotal: 0
        }
    },
    methods: {
        toggleActive: function(item){
            item.active = !item.active;
        },
        total: function(){
            var total = 0;
            this.products.forEach(function(item){
                if (item.active){
                    total+= item.price * item.quantity;
                }
            });
           return total.toFixed(2);
        },
        sort: function(){
            this.products.sort((a, b) => (a.price > b.price) ? 1 : -1)
            console.log("sort");
        },
        sortdesc: function(){
            this.products.sort((a, b) => (a.price < b.price) ? 1 : -1)
            console.log("sort");
        }
        
    },
    
};

Vue.createApp(SelfServiceMachine).mount('#app');
