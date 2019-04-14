__Part I__: Description of Overall Test Plan
We plan on writing unit tests for each react component in our app. We will use a third party testing framework such as [mocha](https://www.npmjs.com/package/mocha) or [chai](https://www.npmjs.com/package/chai) to aid in the testing. We may additionally write browser tests (BDD) to test component placement and onClick events if time permits. 

We plan to use some snapshot method to test the components in the browser and validate that each component is rendering correctly. The snapshot method of testing will validate the component based on a given state or set of props. An example of a library that does this testing is [jest](https://www.npmjs.com/package/jest-image-snapshot).

We will also write a few high level integration tests to test the interaction of our webapp and the react-sound API we chose to use. _Add more info here pls_

__Part II__: Test Case Descriptions
    
    Test 1:
    1. TestButtonComponent
    2. Tests the button component
    3. Tests that the button component renders correctly and performs correct onClick actions.
    4. Button component, props, styling.
    5. Rendered button component with proper styling, onClick event
    6. _normal/abnormal/boundary case indication_ 
    7. Blackbox
    8. Functional
    9. Unit
    
    Test 2:
    1. TestProgressBarComponent
    2. Tests the progress bar component
    3. Tests that the progress bar component renders correctly and performs correct onClick actions.
    4. progress bar component, props, styling.
    5. Rendered progress bar component with proper styling, onClick event
    6. _normal/abnormal/boundary case indication_ 
    7. Blackbox
    8. Functional
    9. Unit
    
    Test 3:
    1. ReactSoundTest
    2. Tests the react-sound API
    3. Tests that the API returns the proper sounds.
    4. Route, parameters.
    5. 204 OK status, sounds are played.
    6. _normal/abnormal/boundary case indication_ 
    7. Blackbox
    8. Functional
    9. Unit

__Part III__: Test Case Matrix

| Test Name  | Normal/Abnormal  | Unit/Integration  |
|------------|------------------|-------------------|
| TestButtonComponent  | ???  | Unit  |
| TestProgressBarComponent  | ???  | Unit  |
|  ReactSoundTest | ???  | Unit  |
