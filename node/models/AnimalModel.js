import db from "../database/db.js"; // importar la conexion
import { DataTypes } from "sequelize";

const AnimalModel = db.define('Animal', {
    animlaId: {type: DataTypes.INTEGER},
    age: {type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING}
})

export default AnimalModel