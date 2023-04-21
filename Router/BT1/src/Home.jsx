import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();

    const handleGoToProductDetailPage = (productId) => {
      navigate(`/product/${productId}`);
    };
  return (
    <div>
    <button onClick={() => handleGoToProductDetailPage(1)}>Xem chi tiết sản phẩm 1</button>
    <button onClick={() => handleGoToProductDetailPage(2)}>Xem chi tiết sản phẩm 2</button>
  </div>
  );
}
