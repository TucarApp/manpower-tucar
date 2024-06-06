import React from 'react';

const LeadForm = () => {
  return (
    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DKb000000OlrI" method="POST" className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <input type="hidden" name="oid" value="00DKb000000OlrI" />
      <input type="hidden" name="retURL" value="http://tucar.app" />

      <div className="mb-4">
        <label htmlFor="first_name" className="block text-gray-700">Nombre</label>
        <input id="first_name" maxLength="40" name="first_name" size="20" type="text" className="w-full mt-2 p-2 border border-gray-300 rounded text-[#000000]" />
      </div>

      <div className="mb-4">
        <label htmlFor="last_name" className="block text-gray-700">Apellidos</label>
        <input id="last_name" maxLength="80" name="last_name" size="20" type="text" className="w-full mt-2 p-2 border border-gray-300 rounded text-[#000000]" />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input id="email" maxLength="80" name="email" size="20" type="text" className="w-full mt-2 p-2 border border-gray-300 rounded text-[#000000]" />
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="block text-gray-700">Compañía</label>
        <input id="company" maxLength="40" name="company" size="20" type="text" className="w-full mt-2 p-2 border border-gray-300 rounded text-[#000000]" />
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700">Ciudad</label>
        <input id="city" maxLength="40" name="city" size="20" type="text" className="w-full mt-2 p-2 border border-gray-300 rounded text-[#000000]" />
      </div>

      <div className="mb-4">
        <label htmlFor="state" className="block text-gray-700">Comuna</label>
        <input id="state" maxLength="20" name="state" size="20" type="text" className="w-full mt-2 p-2 border border-gray-300 rounded text-white" />
      </div>

      <div className="text-center">
        <input type="submit" name="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer" />
      </div>
    </form>
  );
};

export default LeadForm;
