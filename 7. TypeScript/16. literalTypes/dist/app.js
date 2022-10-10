"use strict";
const createCourse = (name, level, price) => {
    const newCourse = {
        name,
        price,
        level: level,
    };
    return newCourse;
};
console.log(createCourse("React", 'advance', 4.99));
const createCourseByPrice = (name, level, price) => {
    const newCourse = {
        name,
        price,
        level: level,
    };
    return newCourse.price;
};
console.log(createCourseByPrice("Docker", 'advance', 9.99));
const nodeJsCourse = {
    name: "NodeJs",
    price: 0,
    level: 'basic',
};
console.log(nodeJsCourse);
