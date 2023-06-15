import { useState } from 'react';

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast is to go well.'
    ];
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(index);
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
    const [max, setMax] = useState(0);

    const nextBtnHandler = () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length);
        setIndex(randomIndex);
        console.log("Current index:", randomIndex);
        setSelected(randomIndex);
    };

    const voteBtnHandler = () => {
        const copy = [...points];
        copy[index]++;
        setPoints(copy);
        console.log("Points array:", copy);

        const maxVotes = Math.max(...copy);
        const maxIndex = copy.indexOf(maxVotes);
        setMax(maxIndex);
        console.log("Maximum number of votes:", maxVotes);
        console.log("Index of maximum element:", maxIndex);
    };

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>This anecdote has {points[index]} vote</p>
            <button onClick={nextBtnHandler}>Next Anecdote</button>
            <button onClick={voteBtnHandler}>Vote</button>

            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[max]}</p>
        </div>
    );
};

export default App;
