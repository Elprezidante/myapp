
// Create a fourth component having two variables ie weight and height and bind them on the user interface then render the component on app.js

const Fourthcomponent = () => {
    let weight = 70;
    let height = 1.75;

    let weight2=35;
    let height2=2.5;



    return (
        <div className="Fourthcomponent">
            <h1>Welcome to my fourth component</h1>
            <h5>My weight is {weight} kg</h5>
            <h5>My height is {height} m</h5>
            <h5>My friends weight is{weight2}</h5>
            <h5>My friend also has a height of {height2} </h5>
        </div>
    )
}
export default Fourthcomponent;

