export const Total = ({ course }) => {
    console.log("Values passed into Total are", course);
    const parts = course.parts;
    const total = parts.reduce((s, p) => {
        console.log('s object is', s);
        console.log('p object is', p);

        console.log('what is happening', s, p.exercises);

        return s + p.exercises;
    }, 0);
    return (
        <p>Number of exercises {total}</p>
    );
};
