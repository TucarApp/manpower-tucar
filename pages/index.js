import React from 'react'
import LeadForm from '../components/LeadForm'
import Layout from '../layouts/Layout'

function index() {
  return (
    <div className='mt-[25px]'>
      <Layout title='Manpower'>
      <LeadForm />
      </Layout>
    </div>
  )
}

export default index