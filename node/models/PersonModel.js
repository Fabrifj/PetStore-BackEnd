import db from "../database/db.js"; // importar la conexion
import { DataTypes } from "sequelize";

const PersonModel = db.define('Person', {
    id : {type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING}
})

export default PersonModel