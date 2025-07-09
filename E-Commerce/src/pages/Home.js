import React from 'react';

function Home() {
  return (
    <main className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded shadow hover:shadow-lg">🧢 Cap - $10</div>
        <div className="p-4 border rounded shadow hover:shadow-lg">👕 T-Shirt - $20</div>
        <div className="p-4 border rounded shadow hover:shadow-lg">👟 Sneakers - $50</div>
      </div>
    </main>
  );
}

export default Home;
