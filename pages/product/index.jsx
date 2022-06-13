import React from "react";
import Head from "next/head";
// import Axios from "axios";

function Product(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>index page</title>
      </Head>
      <h3 className="h3">hello world</h3>
      <style jsx>{`
                .h3{
                    color:skyblue;
                }​

            `}</style>
    </div>
  );
}
export async function getStaticProps(context) {
  console.log("------");
  return {
    props: { name: "lisi" }, // will be passed to the page component as props
  };
}
export default Product;
