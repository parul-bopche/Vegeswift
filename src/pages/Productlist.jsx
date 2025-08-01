import React from 'react';
import ProductCard from '../components/ProductCard';

const dummyProducts = [
  { id: 1, name: 'Fresh Carrots', price: 2.50, image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBjYXJyb3RzJTIwcGh0b3R8ZW58MHx8MHx8fDA%3D' },
  { id: 2, name: 'Organic Apples', price: 3.75, image: 'https://images.unsplash.com/photo-1654120754228-d5c93a7bd5a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9yZ2FuaWMlMjBhcHBsZXN8ZW58MHx8MHx8fDA%3D' },
  { id: 3, name: 'Spinach Bunch', price: 1.99, image: 'https://media.istockphoto.com/id/1159979911/photo/spinach-bunch-and-cutting-board-on-dark-grey-blackboard.webp?a=1&b=1&s=612x612&w=0&k=20&c=mIods9-z2LE8_d8S5EVALSzba9qV5DY3ewqFac0vT-o=' },
  { id: 4, name: 'Bell Peppers', price: 4.25, image: 'https://images.unsplash.com/photo-1621953723422-6023013f659d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsbCUyMHBlcHBlcnN8ZW58MHx8MHx8fDA%3D' },
   { id: 5, name: 'Cherry Tomatoes', price: 3.20, image: 'https://images.unsplash.com/photo-1570543375343-63fe3d67761b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5JTIwdG9tYXRvfGVufDB8fDB8fHww' },
  { id: 6, name: 'Cucumbers', price: 1.50, image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN1Y3VtYmVyc3xlbnwwfHwwfHx8MA%3D%3D' },
  { id: 7, name: 'Broccoli', price: 2.75, image: 'https://media.istockphoto.com/id/518951178/photo/fresh-raw-green-broccoli-in-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=bKY-ggS9Dt0GjenJTH8p4dKAx8e8BG3CBrq4Ji36ccw=' },
  { id: 8, name: 'Strawberries', price: 4.99, image: 'https://plus.unsplash.com/premium_photo-1725986663041-63e8202b3bea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXdiZXJyaWVzfGVufDB8fDB8fHww' },
  { id: 9, name: 'Oranges', price: 3.00, image: 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3Jhbmdlc3xlbnwwfHwwfHx8MA%3D%3D' },
  { id: 10, name: 'Bananas', price: 0.79, image: 'https://media.istockphoto.com/id/1343517547/photo/bunch-of-fresh-bananas-hanging-against-a-turquoise-colored-wooden-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=Klc-nOmbFr7tlUU558Cg6CHmE5MoWxtwLuPtvQPsIxU=' },
  { id: 11, name: 'Onions', price: 1.25, image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25pb25zfGVufDB8fDB8fHww' },
  { id: 12, name: 'Potatoes', price: 2.00, image: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvZXN8ZW58MHx8MHx8fDA%3D' },
  { id: 13, name: 'Lemons', price: 1.10, image: 'https://images.unsplash.com/photo-1609639643505-3c158a56de42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVtb25zfGVufDB8fDB8fHww' },
  { id: 14, name: 'Lettuce', price: 1.80, image: 'https://images.unsplash.com/photo-1640958904159-51ae08bd3412?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 15, name: 'Grapes', price: 5.50, image: 'https://images.unsplash.com/photo-1572970726190-394336c53578' },
  { id: 16, name: 'Garlic', price: 0.99, image: 'https://images.unsplash.com/photo-1579546306566-b333671a5c66' },
  { id: 17, name: 'Watermelon', price: 6.00, image: 'https://images.unsplash.com/photo-1583802302302-d9b8e6123447' },
  { id: 18, name: 'Avocado', price: 2.25, image: 'https://images.unsplash.com/photo-1601648053426-5f5022e3e5c9' },
  { id: 19, name: 'Mangoes', price: 3.50, image: 'https://images.unsplash.com/photo-1555543152-32a5a549e5c5' },
  { id: 20, name: 'Pineapple', price: 4.00, image: 'https://images.unsplash.com/photo-1584949514732-75d5e5c7f8e8' },
  { id: 21, name: 'Zucchini', price: 2.10, image: 'https://images.unsplash.com/photo-1582522730303-3635738600a9' },
  { id: 22, name: 'Cauliflower', price: 3.10, image: 'https://images.unsplash.com/photo-1550524458-7c5e2a2253c4' },
  { id: 23, name: 'Eggplant', price: 2.80, image: 'https://images.unsplash.com/photo-1582234057631-7b953d61a2b9' },
  { id: 24, name: 'Green Beans', price: 1.75, image: 'https://images.unsplash.com/photo-1588661661603-5e7c8071859c' },
  { id: 25, name: 'Sweet Potatoes', price: 2.60, image: 'https://images.unsplash.com/photo-1580922891391-4e7c3e5361c4' },
  { id: 26, name: 'Mushrooms', price: 3.99, image: 'https://images.unsplash.com/photo-1572970726190-394336c53578' },
  { id: 27, name: 'Asparagus', price: 4.50, image: 'https://images.unsplash.com/photo-1583802302302-d9b8e6123447' },
  { id: 28, name: 'Pears', price: 3.25, image: 'https://images.unsplash.com/photo-1582234057631-7b953d61a2b9' },
  { id: 29, name: 'Kiwi', price: 2.45, image: 'https://images.unsplash.com/photo-1571771031302-39c4a5c54c30' },
  { id: 30, name: 'Plums', price: 3.30, image: 'https://images.unsplash.com/photo-1588661661603-5e7c8071859c' },
];

const Productlist = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Fresh Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Productlist;