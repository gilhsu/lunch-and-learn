# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

company1 = Company.create(name: "No Company")
company2 = Company.create(name: "Herman Miller", avatar: "https://assets.fontsinuse.com/static/use-media-items/14/13518/full-1400x513/56702756/Herman_Miller-logo.png?resolution=0", description: "Herman Miller is a 100-year-old-plus company that places great importance on design, the environment, community service, and the health and well-being of our customers and our employees. Innovative ways to improve the performance of our customers’ organizations have become our hallmark.")

user1 = User.create(email: "gil@gmail.com", password: "password", rep: true, first_name: "Gilbert", last_name: "Hsu", profile_photo: "img", company_id: 2)

img = File.open(File.join(Rails.root, '/app/assets/images/0.jpeg'))
User.find(1).update(profile_photo: img)

confirmedEvent1 = Event.create(
  user_id: 1,
  client_company: "Fusion Design Consultants",
  email: "elizabeth@fusion.com",
  name: "Strongest Fabrics for Office Funiture",
  description: "Learn about a new line of ultra-durable funiture fabrics. They're beautiful AND strong!",
  date: DateTime.strptime("03/04/2019 12:00", "%m/%d/%Y %H:%M"),
  contact_first_name: "Elizabeth",
  contact_last_name: "Caron",
  contact_email: "liz@elkus.com",
  contact_phone: "617-123-4567",
  address: "300 Summer Street",
  suite: "15",
  city: "Boston",
  state: "MA",
  zip: "02210",
  food_one: "pizza",
  food_two: "salad",
  notes: "We have our own entrance off Summer St. Please use that instead of the mail building entrance. We have one nut allergy.",
  confirmed: true,
  time: "12:00PM",
  vegetarian: "3",
)
confirmedEvent2 = Event.create(
  user_id: 1,
  client_company: "Dyer Brown Architects",
  email: "rachel@dyerbrown.com",
  name: "2019 Office Furniture Lines",
  description: "Come see our newest furniture lines at our showroom!",
  date: "2019-02-20",
  contact_first_name: "Rachel",
  contact_last_name: "Woodhouse",
  contact_email: "rachel@dyerbrown.com",
  contact_phone: "617-123-4567",
  address: "1 Winthrop Square",
  suite: "300",
  city: "Boston",
  state: "MA",
  zip: "02110",
  food_one: "sandwiches",
  food_two: "salad",
  notes: "Parking in the back. Talk to Hank at reception and he'll swipe you in.",
  confirmed: true,
  time: "12:00PM",
  vegetarian: "2",
)
confirmedEvent3 = Event.create(
  user_id: 1,
  client_company: "Eklus Manfredi",
  email: "jeff@elkus.com",
  name: "Open Office Design Charrette",
  description: "Join us for an inspiring charrette with the best designers in the business.",
  date: DateTime.strptime("03/03/2019 12:00", "%m/%d/%Y %H:%M"),
  contact_first_name: "Jeff",
  contact_last_name: "Mulliken",
  contact_email: "jeff@elkus.com",
  contact_phone: "617-123-4567",
  address: "30 Seaport Boulevard",
  suite: "1200",
  city: "Boston",
  state: "MA",
  zip: "02112",
  food_one: "pizza",
  food_two: "soup",
  notes: "Please use the East entrance. Also please note that we have (1) peanut allergy and (2) shellfish allergies. Thanks!",
  confirmed: true,
  time: "12:30PM",
  vegetarian: "1",
)
pendingEvent1 = Event.create(
  user_id: 1,
  client_company: "Stantec",
  email: "jennifer@stantec.com",
  name: "Modern A/V Design for Offices",
  description: "This lunch and learn partners with Spectrum A/V to discuss the latest trends in office tech."
)

# for Event 1, Food Choice 1
restaurant1 = Restaurant.create(
  name: "Regina Pizzeria",
  image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/6_j2VgsFthPHf5TGxBhVLA/o.jpg",
  categories: ["{\"alias\"=>\"pizza\", \"title\"=>\"Pizza\"}", "{\"alias\"=>\"italian\", \"title\"=>\"Italian\"}", "{\"alias\"=>\"wine_bars\", \"title\"=>\"Wine Bars\"}"],
  rating: 4.0,
  address1: "11 1/2 Thacher St",
  city: "Boston",
  zip_code: "02113",
  country: "US",
  state: "MA",
  display_phone: "(617) 227-0765",
  distance: 2608.8694646254,
  price: "$$",
  review_count: 1719
)

# for Event 1, Food Choice 1
restaurant2 = Restaurant.create(
  name: "Galleria Umberto",
  image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/TMLkJ5Oh-eHuupb8BCRPSg/o.jpg",
  categories: ["{\"alias\"=>\"pizza\", \"title\"=>\"Pizza\"}", "{\"alias\"=>\"italian\", \"title\"=>\"Italian\"}"],
  rating: 4.5,
  address1: "289 Hanover St",
  city: "Boston",
  zip_code: "02113",
  country: "US",
  state: "MA",
  display_phone: "(617) 227-5709",
  distance: 2323.15597603675,
  price: "$",
  review_count: 592
)

# for Event 1, Food Choice 1
restaurant3 = Restaurant.create(
  name: "Pastoral - Artisan Pizza, Kitchen & Bar",
  image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/JLbyHv19ZDgf-MJ53YQ6ug/o.jpg",
  categories: ["{\"alias\"=>\"pizza\", \"title\"=>\"Pizza\"}", "{\"alias\"=>\"beerbar\", \"title\"=>\"Beer Bar\"}", "{\"alias\"=>\"cocktailbars\", \"title\"=>\"Cocktail Bars\"}"],
  rating: 3.5,
  address1: "345 Congress St",
  city: "Boston",
  zip_code: "02210",
  country: "US",
  state: "MA",
  display_phone: "(617) 345-0005",
  distance: 1225.74855975373,
  price: "$$",
  review_count: 407
)

# for Event 1, Food Choice 2
restaurant4 = Restaurant.create(
  name: "Sam LaGrassa's",
  image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/JcSU7Vgu3iQPrJ60FMLiUA/o.jpg",
  categories: ["Delis", "Sandwiches"],
  rating: 4.5,
  address1: "44 Province St",
  city: "Boston",
  zip_code: "02108",
  country: "US",
  state: "MA",
  display_phone: "(617) 357-6861",
  distance: 592.33748876547,
  price: "$$",
  review_count: 932
)

# for Event 1, Food Choice 2
restaurant5 = Restaurant.create(
  name: "Pauli's",
  image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/rONCwS2qWOELG-PjqFXqKA/o.jpg",
  categories: ["Sandwiches", "Caterers", "Seafood"],
  rating: 4.5,
  address1: "65 Salem St",
  city: "Boston",
  zip_code: "02113",
  country: "US",
  state: "MA",
  display_phone: "(857) 284-7064",
  distance: 585.648673644725,
  price: "$$",
  review_count: 907
)

# for Event 1, Food Choice 2
restaurant6 = Restaurant.create(
  name: "Boston Chowda",
  image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/lm6uRQnJ_6gdTIXVLYrRAA/o.jpg",
  categories: ["Seafood", "Soup", "Sandwiches"],
  rating: 4.0,
  address1: "1 Faneuil Hall Market Pl",
  city: "Boston",
  zip_code: "02109",
  country: "US",
  state: "MA",
  display_phone: "(617) 742-4441",
  distance: 260.042969385942,
  price: "$$",
  review_count: 906
)

# for Event 1, Food Choice 1
caterer1 = Caterer.create(
  event: confirmedEvent1,
  restaurant: restaurant1,
  selection: 1
)

# for Event 1, Food Choice 1
caterer2 = Caterer.create(
  event: confirmedEvent1,
  restaurant: restaurant2,
  selection: 1
)

# for Event 1, Food Choice 1
caterer3 = Caterer.create(
  event: confirmedEvent1,
  restaurant: restaurant3,
  selection: 1
)

# for Event 1, Food Choice 2
caterer4 = Caterer.create(
  event: confirmedEvent1,
  restaurant: restaurant4,
  selection: 2
)

# for Event 1, Food Choice 2
caterer5 = Caterer.create(
  event: confirmedEvent1,
  restaurant: restaurant5,
  selection: 2
)

# for Event 1, Food Choice 2
caterer6 = Caterer.create(
  event: confirmedEvent1,
  restaurant: restaurant6,
  selection: 2
)
