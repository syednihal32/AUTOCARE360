const dummyParts = [
  {
    vehicleType: 'Car',
    brand: 'Hyundai',
    category: 'Engine',
    name: 'Hyundai Kappa Engine',
    price: '₹25,000',
    description: '1.2L petrol engine for Hyundai cars'
  },
  {
    vehicleType: 'Bike',
    brand: 'Yamaha',
    category: 'Brakes',
    name: 'Yamaha Disc Brake Kit',
    price: '₹3,200',
    description: 'Disc brake replacement kit for Yamaha FZ'
  },
  {
    vehicleType: 'Car',
    brand: 'Tata',
    category: 'Battery',
    name: 'Tata Amaron Battery',
    price: '₹6,500',
    description: 'Long-life battery for Tata vehicles'
  },
  {
    vehicleType: 'Bike',
    brand: 'Honda',
    category: 'Tires',
    name: 'Honda Tubeless Tyres',
    price: '₹2,000',
    description: 'High grip tires for Honda Shine'
  }
];

function filterParts() {
  const type = document.getElementById('vehicleType').value;
  const brand = document.getElementById('brand').value;
  const category = document.getElementById('partCategory').value;

  const resultContainer = document.getElementById('partsList');
  resultContainer.innerHTML = '';

  const filtered = dummyParts.filter(part =>
    (!type || part.vehicleType === type) &&
    (!brand || part.brand === brand) &&
    (!category || part.category === category)
  );

  if (filtered.length === 0) {
    resultContainer.innerHTML = '<p>No parts found.</p>';
    return;
  }

  filtered.forEach(part => {
    const card = document.createElement('div');
    card.className = 'part-card';
    card.innerHTML = `
      <h3>${part.name}</h3>
      <p><strong>Brand:</strong> ${part.brand}</p>
      <p><strong>Type:</strong> ${part.vehicleType}</p>
      <p><strong>Category:</strong> ${part.category}</p>
      <p><strong>Price:</strong> ${part.price}</p>
      <p>${part.description}</p>
      <button>View Details</button>
    `;
    resultContainer.appendChild(card);
  });
}
