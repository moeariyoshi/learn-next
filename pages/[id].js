import React from 'react';

const DynamicPage = ({ data }) => {
  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Data: {data}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  // Fetch data based on the dynamic parameter (id)
  const res = await fetch(`https://api.example.com/data/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default DynamicPage;
