import { useRef } from 'react';

function App() {
  const domRef = useRef<HTMLDivElement>(null);

  // 사용자 이름과 비밀번호
  const username = 'user@example.com';
  const password = 'password1234';

  // Base64로 인코딩
  const base64 = btoa(username + ':' + password);

  async function access() {
    if (domRef.current) {
      try {
        const response = await fetch('http://localhost:3000', {
          headers: {
            Authorization: `Basic ${base64}`,
          },
        });

        const result = await response.text();

        domRef.current.innerText = result;
      } catch (error) {
        domRef.current.innerHTML = String(error);
        console.error(error);
      }
    }
  }

  access();
  return (
    <div className="App">
      <button onClick={access}>눌러보세욧</button>
      <div ref={domRef}></div>
    </div>
  );
}

export default App;
