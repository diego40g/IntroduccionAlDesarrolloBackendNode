type Level='basic'|'intermedial'|'advance';
type CoursePrice=0|4.99|9.99

type Course = {
    name:string;
    price:CoursePrice,
    level:Level
}

const createCourse=(name:string,level:string,price:CoursePrice):Course=>{
    const newCourse:Course={
        name,
        price,
        level:level as Level,
    }
    return newCourse;
}
console.log(createCourse("React",'advance',4.99));

const createCourseByPrice=(name:string,level:string,price:CoursePrice):CoursePrice=>{
    const newCourse:Course={
        name,
        price,
        level:level as Level,
    }
    return newCourse.price;
}
console.log(createCourseByPrice("Docker",'advance',9.99));

const nodeJsCourse:Course={
    name:"NodeJs",
    price:0,
    level:'basic',
}

console.log(nodeJsCourse);
