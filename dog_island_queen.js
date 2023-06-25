// Create Floral Design Service Constructor
function FloralDesignService() {
	this.serviceName = 'Floral Design Service';
	this.arrangements = [];
}

// Create 'addArrangement' Method
FloralDesignService.prototype.addArrangement = function(arrangement) {
	this.arrangements.push(arrangement);
}

// Create Arrangement Constructor
function Arrangement(name, occasion, style, flowers, price) {
	this.name = name;
	this.occasion = occasion;
	this.style = style;
	this.flowers = flowers;
	this.price = price;
}

// Create Arrangement Instances
let arrangement1 = new Arrangement('Romantic Rose Bouquet', 'Weddings', 'Classic', 'Roses', '$50');
let arrangement2 = new Arrangement('Vibrant Garden Arrangement', 'Events', 'Modern', 'Tulips, Snapdragons, Lilies', '$75');
let arrangement3 = new Arrangement('Airy Lavender Arrangement', 'Everyday Occasions', 'Rustic', 'Lavender', '$35');

// Create FloralDesignService Instance
let floralDesignService = new FloralDesignService();

// Add Arrangements to FloralDesignService
floralDesignService.addArrangement(arrangement1);
floralDesignService.addArrangement(arrangement2);
floralDesignService.addArrangement(arrangement3);

// Create 'displayArrangements' Method
FloralDesignService.prototype.displayArrangements = function() {
	for (let i = 0; i < this.arrangements.length; i++) {
		console.log(`Name: ${this.arrangements[i].name}`);
		console.log(`Occasion: ${this.arrangements[i].occasion}`);
		console.log(`Style: ${this.arrangements[i].style}`);
		console.log(`Flowers: ${this.arrangements[i].flowers}`);
		console.log(`Price: ${this.arrangements[i].price}\n`);
	}
}

// Display All Arrangements
floralDesignService.displayArrangements();