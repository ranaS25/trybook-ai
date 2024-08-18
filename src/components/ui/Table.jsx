import React from 'react'

const Table = ({ tableData }) => {
  console.log("table Data: ");
  console.log(tableData);
  return (
    <table border="1" className='rounded-lg overflow-clip border-collapse w-full mt-4'>
      <thead className="text-textColor">
        <tr className='text-left bg-primaryColor'>
          <th className="p-4 ">{ tableData.table_heading[0]}</th>
          <th className="p-4" >{tableData.table_heading[1]}</th>
          <th className='p-4'>{ tableData.table_heading[2]}</th>
        </tr>
      </thead>
      <tbody>
        {tableData.table_details.map((row, index) => (
          <tr key={index} className='border border-borderColor'>
            <td className='text-accentColor p-4'>{row[0]}</td>
            <td className='p-4 text-textColor'>{row[1]}</td>
            <td className='p-4 text-textColor'>{row[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Table