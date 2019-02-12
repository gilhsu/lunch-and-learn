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


event1 = Event.create(
  user_id: 1,
  client_company: "Dyer Brown Architects",
  email: "rachel@dyerbrown.com",
  name: "2019 Office Furniture Lines",
  description: "Come see our newest furniture lines at our showroom!",
)
event2 = Event.create(
  user_id: 1,
  client_company: "Eklus Manfredi",
  email: "jeff@elkus.com",
  name: "Open Office Design Charrette",
  description: "Join us for an inspiring charrette with the best designers in the business."
)
event3 = Event.create(
  user_id: 1,
  client_company: "Fusion Design Consultants",
  email: "elizabeth@fusion.com",
  name: "Strongest Fabrics for Office Funiture",
  description: "Learn about a new line of ultra-durable funiture fabrics. They're beautiful AND strong!"
)
event4 = Event.create(
  user_id: 1,
  client_company: "Stantec",
  email: "jennifer@stantec.com",
  name: "Modern A/V Design for Offices",
  description: "This lunch and learn partners with Spectrum A/V to discuss the latest trends in office tech."
)
