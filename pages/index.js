import React from 'react'
import LeadForm from '../components/LeadForm'
import Layout from '../layouts/Layout'
import Form from '../components/Formnew'

function index() {
  return (
    <div className='mt-[25px]'>
      <Layout title='Manpower'>
      {/* <LeadForm /> */}
      <Form />
      </Layout>
    </div>
  )
}

export default index