import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>TaxiGo</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
