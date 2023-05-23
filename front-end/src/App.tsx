import { useRef, useEffect, useState } from 'react';
import type { CartItem as CartType, Product } from './types';
import CartItem from './CartItem';
import ProductItem from './ProductItem';

function App() {
  const domRef = useRef<HTMLDivElement>(null);

  // 사용자 이름과 비밀번호
  const username = 'user@example.com';
  const password = 'password1234';

  // Base64로 인코딩
  const base64 = btoa(username + ':' + password);

  const [data, setData] = useState<Product[]>([]);

  async function access() {
    try {
      const response = await fetch('http://localhost:3000/cart-items', {
        headers: {
          Authorization: `Basic ${base64}`,
        },
      });

      const cartItems = await response.json();
      setData(cartItems);
    } catch (error) {
      if (domRef.current) domRef.current.innerHTML = String(error);
      console.error(error);
    }
  }

  useEffect(() => {
    access();
  }, []);

  return (
    <div className="App">
      <div ref={domRef}>
        {data?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
