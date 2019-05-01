# [Blob Band](https://blobband.com) Final Report
### Project Description 
##### Abstract
Computer science education, especially for young children, is important because it teaches valuable life skills and engages everyone, no matter their background, preventing stereotypes from forming. The Hour of Code is a global computer science education movement that Code.org started in 2013. Since then, it has engaged over 100 million students around the world in 45 different languages. During Hour of Code activities, females make up 50% of all participants. Our project  engages students in computer science through music. It allows them to express themselves creatively by creating new songs with conditionals, loops, and more basic computer science concepts.
##### Computer Science Background
One of our members, Tessa, had the opportunity to do one of her co-ops on the Curriculum team at Code.org where she got to work on K-5 curriculum. She had experience with creating activities meant for a younger audience and learned a lot about computer science education. 

// TODO: MORGAN add computer science facts from Code.org
##### Music Background
// TODO: MORGAN add music background
##### Technical Background
Our project is a single page web application built using React. We integrated Scratch's drag and drop code block interface with our custom-built layout. We used Lottie, an open-source library developed by AirBnb, to transform After Effects animations into animated SVGs.

### User Interface Specification 
Because our Hour of Code was created for 2nd and 3rd graders, there were several things we had to keep in mind when creating the UI. For example, 2nd and 3rd graders don't always have great motor skills. Because of this, we tried to keep the UI from being overwhelming, using big easy-to-click buttons, and drag and drop block based coding. We also had to take into account the relative reading level of 2nd and 3rd graders. For each level, we created simple instructions that corresponded to the reading levels. Mainly, we tried to keep the UI clean, simple, and intuitive.

Curriculum wise, when designing computer science activities, it's really important to not only introduce new concepts, but also explain *why* these new concepts are useful. One of the concepts our activity introduces is loops. In level 3, students are asked to make Freddie play the note D six times. This is intentionally frustrating, especially for someone who might not have fine motor skills yet. When they reach level 4, they are asked to recreate the same output, but now with fewer blocks- this is where loops come in. Now they understand why loops are useful! The curriculum continues through level 10, where students can create anything they like and their code needs no validation to complete the activity.

##### Landing Page:
![Landing Page](https://github.com/ebruesewitz/senior-design-final/blob/master/assignments/Screenshots/title.png?raw=true)
##### Level 3:
![Landing Page](https://github.com/ebruesewitz/senior-design-final/blob/master/assignments/Screenshots/level3.png?raw=true)
##### Level 4:
![Landing Page](https://github.com/ebruesewitz/senior-design-final/blob/master/assignments/Screenshots/level4.png?raw=true)

### Test Plan and Results 
We wrote unit tests for all of our components using Jest and Enzyme with snapshot testing. Jest allows us to make simple assertions so we know whether or not our tests failed. Enzyme creates a shallow rendering of our components in a virtual DOM so we can see how our components will respond to different changes in state or props. We mount our component in the virtual DOM, take a snapshot of what the DOM looks like, and then store that in a snapshot file. Our unit tests will pass if the snapshots stay the same each run. 

We also wrote a few integration tests to ensure everything worked when the user navigates between pages and levels. We have 219 total unit tests, 5 snapshots, and 3 integration tests. All of them passed.

### [User Manual](https://github.com/ebruesewitz/senior-design-final/blob/master/assignments/Spring%202%20User%20Guide.md) 
// TODO: SOMEONE
### [Spring Final PPT Presentation](https://github.com/ebruesewitz/senior-design-final/blob/master/assignments/Spring%203%20Slides)
### [Final Expo Poster](https://github.com/ebruesewitz/senior-design-final/blob/master/assignments/Spring%204%205%20Final%20Poster.pdf)
### Assessments
##### [Initial Self-Assessments (fall)](https://github.com/ebruesewitz/senior-design-final/tree/master/assignments/Fall3SelfAssessments)
// TODO: MORGAN
##### [Final Self-Assessments (spring)](https://github.com/ebruesewitz/senior-design-final/tree/master/assignments/Spring6SelfAssessments)
// TODO: MORGAN

### Summary of Hours:
#### Tessa
##### Fall

Fall assignments: 10 Hours

Weekly meetings: 25 Hours

Planning UI/UX with Elisabeth: 6 Hours

##### Spring

Weekly meetings: 25 Hours

Designing curriculum: 3 Hours

Designing and editing poster: 5 Hours

Incorporating custom animations and sounds: 5 Hours

UI work with Katey: 10 Hours

Creating custom blocks: 5 Hours

Navigation: 3 Hours

Final report: 3 Hours

##### Total

Fall: 41 Hours

Spring: 59 Hours

Year: 100 Hours

#### Katey
##### Fall

Fall assignments: 15 Hours

Weekly meetings: 30 Hours

##### Spring

Weekly meetings: 25 Hours

Incorporating custom animations and sounds: 15 Hours

UI work with Tessa: 10 Hours

Final report: 3 Hours

Utility code: 7 hours

##### Total

Fall: 45 Hours

Spring: 60 Hours

Year: 105 Hours

#### Elisabeth
// TODO: ELISABETH
#### Morgan
// TODO: MORGAN

// TODO: ADD TOTALS

### Other 
[Link to old repository](https://github.com/kpittman23/senior-design) with Fall final report as the README

[Link to forked Scratch Blocks repo](https://github.com/tessawiedmann/scratch-blocks) with the custom blocks that Tessa made
