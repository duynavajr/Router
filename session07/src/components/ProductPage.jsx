import React from "react";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const navigate = useNavigate();
  // useNavidate la 1 hool trong react-router-dom
  return (
    <div>
      {/* su dung cho viec chuyen trang */}
      <button onClick={() => navigate("contact")}>Go to Contact</button>
      <button onClick={() => navigate(-2)}>Go to Bach bach</button>
      <button onClick={() => navigate(-1)}>Go to bach</button>
      <button onClick={() => navigate(1)}>Go to tien</button>
      {/* useNavigate voi replace */}
      {/* khi su dung useNavigate voi replace se giong voi khi dieu huong trang 
      nhu neu replace = true thi se ko luu lai history */}
      <button onClick={(() => navigate("contact"), { replace: true })}>
        Go to Contact
      </button>
      {/* useNavigate de chuyen du lieu  */}
      <button
        onClick={(() => navigate("contact",{state: {count: 10} }) )}
      >
        Go to Contact with data
      </button>
    </div>
  );
}

export default ProductPage;
