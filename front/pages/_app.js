import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Planner = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Algorithm Planner</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default Planner;
