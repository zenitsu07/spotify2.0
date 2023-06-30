// 1-> useeffect() is for side-effects - 
// Example - 
// fetch requests,
// manipulating DOM directly, 
// using timer functions like setTimeout(),
//?2-> How to decouple rendering from the side-effect?
//Ans- Welcome useEffect() — the hook that runs side-effects independently of rendering.
//Because The component rendering and side-effect logic are independent.
// It would be a mistake to perform side-effects directly in the body of the component, which is primarily used to compute the output.
// syntax-and-explain-brief->
//? useEffect() hook accepts 2 arguments:
//*useEffect(callback, [dependencies]);
//*callback is the function containing the side-effect logic. callback is executed right after changes were being pushed to DOM.
//*dependencies is an optional array of dependencies. 
//*useEffect() executes callback only if the dependencies have changed between renderings.
//!Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect().