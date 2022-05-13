import db from "../database/db.js"; // importar la conexion
import { DataTypes } from "sequelize";

const AdoptionModel = db.define('AdoptionModel', {
    date: {type: DataTypes.STRING},
    personId: {type: DataTypes.INTEGER},
    AnimlaId: {type: DataTypes.INTEGER}

})

export default AdoptionModel