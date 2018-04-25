import { MongoClient, Db } from "mongodb";



export class Init {

    public db: Db;

    public connect() {

        MongoClient.connect("mongodb://localhost:14458/Markers")

            .then(err => {
                console.log(err);
            });
    }
}