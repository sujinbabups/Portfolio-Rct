import React from 'react'

const Education = () => {
  return (
    <>
     <div className="h-[300px] w-[530px] bg-blue-200 mx-auto p-[30px] rounded-3xl mt-[35px]" id="edu" >
        <h3 className="text-2xl">Education</h3>
        <table  className="text-center">
            <tr>
                <th>Year</th>
                <th>Course</th>
                <th>Board/University</th>
                <th>Mark/Percentage</th>
            </tr>
            <tr>
                <td>2022-2023</td>
                <td>PGDCA</td>
                <td>Kerala Rutronics</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2018-2021</td>
                <td>BCA</td>
                <td>University Of Calicut</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2016-2018</td>
                <td>Plus Two</td>
                <td>DHSE Kerala</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2015-2016</td>
                <td>SSLC</td>
                <td>Kerala Board of Public Education</td>
                <td>0</td>
            </tr>
        </table>

    </div>
    
    </>
  )
}

export default Education