
mod features;
use features::satellite::satellitecontroller::route_index;

#[macro_use] extern crate rocket;
use rocket::fs::FileServer;
#[launch]
fn rocket() -> _ {
    rocket::build()
    .mount("/data", route_index())
    .mount("/", FileServer::from("./src/ui"))
}


