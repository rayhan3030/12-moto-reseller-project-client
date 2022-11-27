import React from 'react';

const Blog = () => {
    return (
        <section className="bg-base-200 text-white">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-yellow-300">
                            <h3 className="text-3xl font-semibold">Moto Reseller </h3>
                            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Education Section</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-yellow-300">
                                <h3 className="text-2xl font-semibold tracking-wide">What are the different ways to manage a state in a React application?
                                </h3>
                                {/* <time className="text-xs tracking-wide uppercase dark:text-gray-400">Dec 2020</time> */}
                                <p className="mt-5">
                                    {/* this is blog */}
                                    <span className='text-xl'>Managing state in your React apps isn’t as simple as using useState or useReducer.</span>
                                    <br />
                                    <small>Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?   In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.</small>
                                    <br /> <br />
                                    <span className='text-xl'>The Four Kinds of React State to Manage</span>
                                    <small>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:</small>
                                    <br />
                                    <br /> 1  Local state
                                    <br /> 2 Global state
                                    <br /> 3 Server state
                                    <br /> 4  URL state
                                </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-yellow-300">
                                <h3 className="text-2xl font-bold tracking-wide">How does prototypical inheritance work?
                                </h3>
                                {/* <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jul 2019</time> */}
                                <p className="mt-3">

                                    <span>
                                        JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                                        <br /> <br />  Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                                        <br /><br />  JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                                        <br />   <br />  Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.
                                    </span> <br /> <br /> <br />
                                    <span> <small>
                                        Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</small></span>
                                    <br /> <br />  <span>
                                        Let’s walk through an example of prototypical inheritance you’re likely familiar with from grade school: all squares are rectangles, but not all rectangles are squares. If we think of this as a JS program, we could say that the rectangle is a prototype to the square: the square inherits all properties of a rectangle (i.e. four-sides and closed), while also adding a new feature (i.e. all sides are the same length).

                                        We could not, however, construct this same concept using the square as a prototype, because there are properties of a square that do not apply to rectangles (i.e. all sides are the same length).

                                        We can see how prototypal inheritance works on the basis of specifying categories within a group from least specific to most – from rectangle to square. In code, this concept can sometimes be lost in the syntax. If you find this happens, speak the relations between objects and listen to where you draw distinctions. If you hear, “all ___ are , but…not all ___ are”, that is where a new prototypical relationship should be added.
                                    </span>
                                </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-yellow-300">
                                <h3 className="text-2xl font-bold tracking-wide">What is a unit test? Why should we write unit tests?
                                </h3>
                                {/* <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2016</time> */}
                                <p className="mt-5">

                                    <p>Unit testing is a&nbsp;<a href="https://www.techtarget.com/searchapparchitecture/definition/software">software</a>&nbsp;development process in which the smallest testable parts of an&nbsp;<a href="https://www.techtarget.com/searchsoftwarequality/definition/application">application</a>, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff. &nbsp;The main objective of unit testing is to isolate written code to test and determine if it works as intended.</p> <br /> <br />
                                    <span className=' text-xl font-bold'>How unit tests work</span> <br />
                                    <span><small>A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

                                        Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed.

                                        Unit testing involves only those characteristics that are vital to the performance of the unit under test. This encourages developers to modify the source code without immediate concerns about how such changes might affect the functioning of other units or the program as a whole. Once all of the units in a program have been found to be working in the most efficient and error-free manner possible, larger components of the program can be evaluated by means of integration testing. Unit tests should be performed frequently, and can be done manually or can be automated.</small></span>
                                </p> <br />
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-yellow-300">

                                <h3 className="text-2xl font-bold tracking-wide">React vs. Angular vs. Vue?

                                </h3>
                                {/* <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2016</time> */}
                                <p className="mt-5">
                                    <span>
                                        Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.

                                        If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.
                                    </span> <br /> <br />
                                    <div className="divider"></div>
                                    <span className='text-xl font-bold'>Angular vs React</span> <br />
                                    <span>
                                        <br />  If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                                        <br />   <br /> React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                                        <br />   <br />  React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
                                    </span>
                                    <div className="divider"></div>
                                    <span className='text-xl font-bold'>React vs Vue</span> <br />
                                    <span>

                                        <br /> The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                                        <br /> <br />Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                                        <br /> <br /> Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
                                    </span>
                                    <div className="divider"></div> <br />

                                    <span className='text-xl font-bold'>Angular vs Vue</span> <br />

                                    <span>

                                        <br />    In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                                        <br /> <br />       A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

                                        <br /> <br />             It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.
                                    </span>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;