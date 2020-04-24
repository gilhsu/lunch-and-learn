# weLunch&Learn
A scheduler app that helps initate and coordinate lunch-and-learn events with intuitive 2-party forms, automated mailers and appointment scheduling functionality.

## About
Thanks for checking out weLunch&Learn. This is my first capstone project as a programmer and it was built during my time at Launch Academy, a Boston-area web development bootcamp focused on React and Ruby on Rails.

## The Business Problem
A lunch-and-learn is a catered lunch event where an external or internal presenter shares his or her wisdom to a group of presentees. While this my sound trivial, a slew of important information needed to coordinate such an event. Below is the information typically shared and coordinated via email. There must be a better way!
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

## Workflow & Functionality
1.  User Signup (Presenter only available currently)
2.  Create new lunch-and-learn event invitation.
3.  User has a new "pending event" in their dashboard.
4.  User recieves confirmation email that the invitation has been sent successfully.
5.  Presentee receives email with a link to the event details page.
6.  Presentee fills out required fields such as: presentation date (Presenter's unavailable dates are not selectable), number of attendees, food preferences etc.
7.  Once event details are submitted, Presentee recieves confirmation email that event is been finalized.
8.  Initial User receives an email notification that the Presentee has filled out the necessary event details.
9.  User logs into dashboard. Event has moved from "pending" to "confirmed". 
10.  In the specific event tile, the app suggests the best catering options by querying the Yelp API using the provided location and food preferences data.

## Technologies

- React: 15.4.2
- Rails: 5.2.2
- Ruby: 2.4.5
- Devise: 4.6.1
- Carrierwave: 1.0

## Version
- 0.1 MVP/Proof of Concept
