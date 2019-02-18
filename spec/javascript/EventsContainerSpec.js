// import EventsContainer from "../../app/javascript/react/containers/EventsContainer";
//
// import fetchMock from 'fetch-mock'
//
// let wrapper;
// let body;
//
// beforeEach(() => {
//   fetchMock.restore()
//   body = {
//     company:{
//       avatar: {url: "https://welunchandlearn.s3.amazonaws.com/uploads/Herman_Miller-logo-c.jpg"},
//       created_at: "2019-02-17T22:57:06.840Z",
//       description: "Herman Miller is a 100-year-old-plus company that places great importance on design, the environment, community service, and the health and well-being of our customers and our employees. Innovative ways to improve the performance of our customers’ organizations have become our hallmark.",
//       id: 2,
//       name: "Herman Miller",
//       updated_at: "2019-02-17T22:57:06.860Z",
//     },
//     confirmed:[
//       {
//         address: "300 Summer Street",
//         attendees: 34,
//         city: "Boston",
//         client_company: "Fusion Design Consultants",
//         confirmed: true,
//         contact_email: "elizabeth@fusion.com",
//         contact_first_name: "Elizabeth",
//         contact_last_name: "Caron",
//         contact_phone: "617-123-4567",
//         created_at: "2019-02-17T22:57:08.178Z",
//         date: "2019-02-20",
//         description: "Learn about a new line of ultra-durable funiture fabrics. They're beautiful AND strong!",
//         email: "elizabeth@fusion.com",
//         food_one: "pizza",
//         food_two: "salad",
//         id: 1,
//         name: "Strongest Fabrics for Office Furniture",
//         notes: "We have our own entrance off Summer Street",
//         restaurants_one: [
//           {
//             address1: "11 1/2 Thacher St",
//             categories: [
//               "Pizza",
//               "Italian",
//               "Wine Bars",
//             ],
//             city: "Boston",
//             country: "US",
//             display_phone: "(617) 227-0765",
//             distance: 2608.8694646254,
//             id: 1,
//             image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/6_j2VgsFthPHf5TGxBhVLA/o.jpg",
//             name: "Regina Pizzeria",
//             price: "$$",
//             rating: 4,
//             review_count: 1719,
//             state: "MA",
//             zip_code: "02113"
//           }
//         ],
//         restaurants_two: [
//           {
//             address1: "44 Province St",
//             categories: [
//               "Delis",
//               "Sandwiches"
//             ],
//             city: "Boston",
//             country: "US",
//             display_phone: "(617) 357-6861",
//             distance: 592.33748876547,
//             id: 4,
//             image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/JcSU7Vgu3iQPrJ60FMLiUA/o.jpg",
//             name: "Sam LaGrassa's",
//             price: "$$",
//             rating: 4.5,
//             review_count: 932,
//             state: "MA",
//             zip_code: "02108",
//           }
//         ],
//         state: "MA",
//         suite: "15",
//         time: "12:00PM",
//         vegetarian: "3",
//         zip: "02210",
//       }
//     ],
//     user: {
//       avatar: null,
//       bio: null,
//       company_id: 2,
//       created_at: "2019-02-17T22:57:07.375Z",
//       email: "gil@gmail.com",
//       first_name: "Gilbert",
//       id: 1,
//       last_name: "Hsu",
//       profile_photo: {url: "https://welunchandlearn.s3.amazonaws.com/uploads/0.jpeg"},
//       rep: true,
//       title: "Account Executive",
//       updated_at: "2019-02-17T22:57:07.426Z"
//     }
//   }
//   fetchMock.get(`/api/v1/users/1`, {
//     status: 200,
//     body: body
//   });
//
//   wrapper = mount(
//     <EventsContainer events= {events.confirmed} />
//   );
//
// });
//
// afterEach(fetchMock.restore)
//
// describe('Event Container', () => {
//
//   it('state is updated with fetch api data from /api/v1/users/1', (done) => {
//     setTimeout(() => {
//       console.log(wrapper.debug())
//       expect(wrapper.state('confirmed')).toEqual(body.confirmed)
//       done()
//     }, 0)
//   })



//   it('should have review tiles with a rating', (done) => {
//     setTimeout(() => {
//       expect(wrapper.find('.review-tile').nodes.length).toEqual(restaurantCont.restaurant.reviews.length)
//       expect(wrapper.contains(<h4>Rating: {restaurantCont.restaurant.reviews[0].rating}/5</h4>)).toEqual(true)
//       done()
//     }, 0)
//   })
//
//   it('successfully adds to the reviews when a valid review is supplied', (done) => {
//   fetchMock.post('/api/v1/reviews/', {
//     status: 201,
//     body: {
//       review:{
//         comment: "test",
//         created_at: "2019-01-28T22:37:03.535Z",
//         id: 4,
//         rating: 5,
//         restaurant_id: 1,
//         updated_at: "2019-01-28T22:37:03.535Z",
//         user_id: 5,
//         review_user_email: 'hello@gmail.com'
//       }
//     }
//   });
//   setTimeout(() => {
//     let reviewLength = wrapper.find('.review-tile').nodes.length
//     wrapper.find('.submit').simulate('submit')
//     setTimeout(() => {
//       expect(wrapper.contains(<h4>Rating: 5/5</h4>)).toEqual(true)
//       expect(wrapper.contains(<p>test</p>)).toEqual(true)
//       expect(wrapper.find('.review-tile').nodes.length).toEqual(reviewLength + 1)
//       done()
//     })
//   }, 0)
// })
// })
