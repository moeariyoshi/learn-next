import React from 'react';
import App from '../App';

const HomePage = ({ data }) => {
  return (
    <div>
        <h1>Hello Next.js!</h1>
        <p>Data: {data}</p>
        {/* Client-side navigation using Link */}
        <Link href="/about">
            <a>About Page</a>
        </Link>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data from an API
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default HomePage;
