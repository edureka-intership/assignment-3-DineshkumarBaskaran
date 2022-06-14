class restaurantManager {
    restaurantList = [{
        name: "KFC",
        address: "Near Ghanta Ghar",
        city: "Dehradun"
    },
    {
        name: "McDonald's",
        address: "South - X",
        city: "Delhi"
    },
    {
        name: "Starbucks",
        address: "C-Block",
        city: "Chennai"
    },
    {
        name: "Burger king",
        address: "ABCDE-sector",
        city: "Chandigarh"
    },
    {
        name: "The Bikaner",
        address: "Near Bada-Junction",
        city: "Delhi"
    },
    {
        name: "Dominoes",
        address: "Near New Highway",
        city: "Delhi"
    }];

    printAllRestaurantNames() {
        console.log("Names of all restaurants:");
        for (var i = 0; i < this.restaurantList.length; i++) {
            console.log(this.restaurantList[i].name);
        }
    }
    filterRestaurantByCity(city) {
        console.log("Name of restaurants in " + city + " are:");
        console.log(this.restaurantList.filter(item => item.city == city));

    }

    orderData = {
        'Below 500': 20,
        '500-1000': 29,
        '1000-1500': 30,
        '1500-2000': 44,
        'Above 2000': 76
    };
    totalNoOfOrdersPlaced() {
        var total = (Object.values(this.orderData).reduce((a, b) => a + b));
        console.log("Total number of orders Placed:", total);

        var numberOfProportions = Object.values(this.orderData).length;
        console.log("Total number of order proportions:", numberOfProportions);

        var result = Object.keys(this.orderData).map((key, index) => ({
            id: index + 1, order: key,
            order_percentage: (100 * this.orderData[key] / total).toFixed(2),
            restaurant: "Punjabi Tadka"
        }));
        console.log("Array of Object", result);
    }
}
var obj = new restaurantManager();
obj.printAllRestaurantNames();
obj.filterRestaurantByCity("Delhi");
obj.totalNoOfOrdersPlaced();