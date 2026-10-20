/*
    This File Adds Routes to the API for satellites

    GET - /api/v1/satellite
    GET - /api/v1/satellite/{name, id, type} -- These are Params
 */

#[macro_ise] extern crate rocket;

use rocket::serde::{Serialize, json::Json};
use rocket::get;

fn satellite() -> Json<impl Serialize> {
    
}