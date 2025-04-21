
import { use } from "react";
import { Bar, BarChart,XAxis, YAxis } from "recharts";


const MC = ({marksPromise}) => {
  const  marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;
 

const marksChart = marksData.map(studentData =>{
    
const student = {
    id: studentData.id,
    name: studentData.name,
    bangla: studentData.marks.bangla,
    english: studentData.marks.english,
    math: studentData.marks.math,
  
};
console.log(student);

const avg = student.bangla + student.english + student.math;
student.avg = avg 
return student;



})

  
    return (
        <div>
            <BarChart width={500} height={300} data={marksChart} >
           <XAxis dataKey="" />
         <YAxis></YAxis>
         <Bar dataKey="bangla" fill="orange"></Bar>
         <Bar dataKey="english" fill="blue"></Bar>
         <Bar dataKey="math" fill="yellow"></Bar>
          </BarChart>
        </div>
    );
};

export default MC;