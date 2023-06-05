import React from 'react';

const Blog = () => {
    return (
        <div className='px-10 lg:px-52 lg:pr-96 mt-10 font-serif '>
            <h1 className='text-2xl font-bold mb-4'>1. When should you use context api?</h1>
            <p>Answer: Context API helps with managing the state of modern applications and can solve issues like having to pass props multiple times (props drilling). Using a lot of solutions to manage the state of your app and avoid "props drilling" can make your app slower and take up more space. Context API is a part of React that's already there, so we don't need to waste time thinking about making it work well or installing any extra tools.

                The props drilling issue happens when you give a prop to a lower part of the tree. When a project gets bigger, passing information through props can become confusing and make the code more difficult to understand and use. To solve this problem, we use something called Context API.
            </p>


            <div className='mt-10 font-serif'>
                <h2 className='text-2xl font-bold mb-4'>2.What is Custom hook in react?</h2>
                <p>A custom hook is a function in React that uses pre-built hooks, like useState or useEffect, along with other functions. It helps do specific things. Custom hooks are a method in React applications where you can reuse code for managing state without repeating the same code or using complex components. You can use them to wrap up difficult rules and use them in different parts.

                    You can make your own special tools to do different things like getting information from a website, making sure forms are filled out correctly, keeping track of time, and other things. Hooks should have the word "use" in the beginning of their names so that other developers can quickly recognize them.
                </p>
            </div>

            <div className='mt-10 font-serif'>
                <h1 className='text-2xl font-bold mb-4'>3. What is React useRef?</h1>

                <p>useRef is a built-in hook in React that provides a way to create a mutable variable that persists across re-renders of a component. It allows you to reference a DOM element or any other value, and access it directly without triggering a re-render of the component when the value changes.

                    The useRef hook returns an object with a current property, which can be assigned any value, and will persist across re-renders. When you update the current property, it doesn't trigger a re-render of the component. You can also use useRef to store other mutable values, such as callbacks or timers.</p>
            </div>

            <div className='mt-10 font-serif'>
                <h1 className='text-2xl font-bold mb-4'>4.What is useMemo in React?</h1>
                <p >React has a tool called useMemo that helps you save time by remembering complex functions. This helps you avoid running them repeatedly every time you update your page. You give a function and a list of things to useMemo. It only recalculates the result when one of the things on the list has changed. We have an example where there's a function called computeLetterCount that's very costly. For demonstration, we've made it slow by adding a big and unnecessary loop. If you choose a new word, there may be a slight pause as the computer has to remember how many letters it has. We have another counter that goes up when you click the button to add. When you increase that number, you'll see that there is no delay between the images. This happens because the function computeLetterCount is not used again. The word you put in is the same, so the computer uses the old result it already had.
</p>
            </div>
        </div>

    );
};

export default Blog;