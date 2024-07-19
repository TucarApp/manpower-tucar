import React from "react";
import LeadForm from "../components/LeadForm";
import Layout from "../layouts/Layout";
import Form from "../components/Formnew";
import FormnewMobile from "../components/FormnewMobile";

function index() {
  return (
    <div className="mt-[25px]">
      <Layout title="Viguez">
       
        <div className="hidden lg:inline 2xl:inline">
          <Form />
        </div>
        <div className="inline lg:hidden 2xl:hidden">
          <FormnewMobile />
        </div>
       
      </Layout>
    </div>
  );
}

export default index;
