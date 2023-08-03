"use client";

// React imports
import { useState, useEffect } from "react";

// Project imports
import { fetchData } from "../services/fetchData";

function About() {
  const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://cdn.contentful.com/spaces/wzh8zqkwvm1v/environments/master/entries/5wXQGH7Of5nYxWqPzLh8SM?access_token=ggKW5t86EQMqBvvLqmrC-vuCZg77_bqdNy-IxsF_lHk`;

    fetchData()
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("An error has interfered somewhere");
      });

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //     setLoading(false);
    //   });
  }, []);

  console.log(data);

  // if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>Client Side API Fetch</h1>
      <h2>{data.fields.title}</h2>
    </div>
  );
}

export default About;
