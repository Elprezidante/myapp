const Thirdcomponent = () => {
   // Variable enables us to create dynamic websites. (It means the contents of the website will be changing over time.)
    // Below we declare some varibles. Note: variables are usually declared just before the return statement in Reactjs.
    let name = "Isaac";
    let age = 18;
    let message = "I love programming";

    return (
        <div className="Thirdcomponent">
            <h1>Welcome to my third component</h1>
            {/* Below we bind our variables.We use the variables names */}
            <h5>My name is {name}</h5>
            <h5>My age is {age}</h5>
            <h5>And I love {message}</h5>
          
        </div>
    )
}
export default Thirdcomponent;



// Create a fourth component having two variables ie weight and height and bind them on the user interface then render the component on app.js