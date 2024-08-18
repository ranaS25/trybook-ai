import React from 'react'

const Table = ({ tableData }) => {
  console.log("table Data: ");
  console.log(tableData);
  return (
    <div className="w-full h-fit overflow-x-auto  ">
    <table border="1" className=' rounded-lg  overflow-clip border-collapse  w-full mt-4 '   >
      <thead className="dark:text-text text-text-light ">
        <tr className='text-left bg-primary dark:bg-primary border-border-light dark:border-border'>
          <th className="p-4 ">{ tableData.table_heading[0]}</th>
          <th className="p-4" >{tableData.table_heading[1]}</th>
          <th className='p-4'>{ tableData.table_heading[2]}</th>
        </tr>
      </thead>
      <tbody >
        {tableData.table_details.map((row, index) => (
          <tr key={index} className='border border-border-light dark:border-border '>
            <td className='dark:text-accent text-accent-light font-bold p-4 '>{row[0]}</td>
            <td className='p-4 text-text-light dark:text-text '>{row[1]}</td>
            <td className='p-4 text-text-light dark:text-text'>{row[2]}</td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
  );
};


export default Table