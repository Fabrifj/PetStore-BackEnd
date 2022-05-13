import AnimalModel from "../models/AnimalModel"
import Adoption from "../models/AdoptionModel"
// Metodos para el CRUD

// Mostrar todos los registros
export const getAllAnimals = async (req, res) => {
    try {
        const appointments = await AnimalModel.findAll()
        res.json(appointments)
    } catch (error) {
        res.json( {message: error.message} )
    }
}



// Crear un registro
export const adoptAnimal = async (req, res) => {
    try {
        await Adoption.create(req.body)
        res.json( {"message": "Registro creado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}
