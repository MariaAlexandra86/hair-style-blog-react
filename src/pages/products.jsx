import React from "react";

const Products = () => {
  const poze = ["produse.jpg", "produse1.jpg", "produse2.png", "produse5.jpg", "produse4.jpg", "produse6.jpg" , "wella.jpg",  "wella1.jpg","wella5.jpg", "wella6.jpg", "wella3.jpg","wella4.jpg", "wella7.jpg", "wella2.jpg", "wella9.jpg", "wella10.jpg", "produse3.jpg"  ];

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center gap-2 products-responsive">
        {poze.map((poza) => (
          <img src={`/images/${poza}`} alt="product"/>
        ))}
      </div>
    </div>
  );
};

export default Products;
