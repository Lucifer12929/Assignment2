# Assignment Brief

-Created a new React application using create-react-app.

-Imported the required packages (react, react-bootstrap).

-Created a functional component App and declared its state using the useState hook.

-Defined an async function fetchUsers that fetches user data from the https://reqres.in/api/users API based on a page number passed as an argument, sets the fetched data to the component's state using the setUsers function, and toggles a loading flag using the setIsLoading function.
-Rendered the component's layout using JSX, with conditional rendering based on the loading flag.

-When the "Get User" button is clicked, the fetchUsers function is called with a page number of 1.

-When the API response is returned, the user data is mapped to individual card components using the map function and rendered in a container with a class of cards.

-If the length of the users array is greater than 0, a pagination component is rendered using the react-bootstrap Pagination component.

-Added some CSS styles to the component for layout and presentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

