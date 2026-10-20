
mod features;
use features::satellite::satellitecontroller::route_index;

#[macro_use] extern crate rocket;

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", route_index())
}


