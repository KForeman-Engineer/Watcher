/*
    This File Adds Routes to the API for satellites

    GET - /api/v1/satellite
    GET - /api/v1/satellite/{name, id, type} -- These are Params
 */

use rocket::{Route};

// == Fetch all Satellites from the Cache
#[get("/api/v1/satellite")]
fn allsatellite() -> &'static str{
    return "Satellite 101";
}
// == Get Satellite based on Params (Name, Id, or group)
#[get("/api/v1/satellite/alt")]
fn searchsatellite() -> &'static str{
    return "Meh";
}

// == returns a List of all routes 
pub fn route_index() -> Vec<Route> {
    return routes![searchsatellite, allsatellite]
}