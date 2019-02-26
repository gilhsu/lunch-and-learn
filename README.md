[![Codeship Status for sketchbook21/lunch-and-learn](https://app.codeship.com/projects/e11e4210-0951-0137-fc98-06b77dea8d40/status?branch=master)](https://app.codeship.com/projects/326128)

# weLunch&Learn
A scheduler app that helps initate and coordinate lunch-and-learn events with intuitive 2-party forms, automated mailers and appointment scheduling functionality.

## Heroku Link
https://welunchandlearn.herokuapp.com

*Due to secret key dependencies, please use the Heroku link to access the app's full functionality.*


## About
Thanks for checkout out weLunch&Learn. This is my first capstone project as a programmer and it was built during my time at Launch Academy, a Boston-area web development bootcamp focused on React and Ruby on Rails. I really enjoyed creating this application and tackling an existing and persistant business problem. The development of this project has been an incredible learning experience and look forward to continuing my eduction in programming through future releases. 

*Please note that weLunch&Learn is still very much a work in progress!* :wink:

## The Business Problem
A lunch-and-learn is an aptly named catered lunch event where an external or internal presenter shares his or her wisdom to a group of presentees. Despite sounding trivial, note the slew of important information needed to coordinate such an event:
- Availability of Presenter
- Availability of Presentee Group
- Number of Attendees
- Food Preferences
  - General Likes/Dislikes
  - Allergies
  - Target Cost Per Person
- Presentation Location & Access
  - Directions to Location
  - Parking Instructions
  - Building Access
- Miscellaneous Notes
  - ie: "Head of Marketing the will be in attendance."

## Workflow
1.  User Signup (Presenter only available currently)
2.  Create new lunch-and-learn event invitation
3.  User has a new "pending event" in their dashboard
4.  User recieves confirmation email that the invitation has been sent successfully
5.  Presentee receives email with link to the event details page
6.  Presentee fills out required fields such as: presentation date (presenter's unavailable dates are unselectable), number of attendees, food preferences etc.
7.  Once event details are submitted, Presentee recieves confirmation email that event is been finalized.
8.  Initial User receives an email notification that the Presentee has filled out the necessary event details.
9.  User logs into dashboard. Event has moved from "pending" to "confirmed". 
10.  In the specific event tile, the app suggests the best catering options by querying the Yelp API using the provided location and food preferences data.

## Technologies

- Ruby- 2.4.5


## Version
- 0.1 MVP/Proof of Concept
