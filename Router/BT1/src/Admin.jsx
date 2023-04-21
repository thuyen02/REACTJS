import React from "react";

import { useNavigate } from "react-router-dom";

export default function Admin() {
    const isAdmin = true;

    const navigate = useNavigate();
    
    if (!isAdmin) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
  
      return <div>Bạn không có quyền truy cập vào trang Admin!</div>;
    }
  
    return (
      <div>
      Đây là trang admin
      </div>
    );
}