'use strict'

import TipoEvento from './TipoEvento.Model.js'

export const testCHabitacion = (req, res) => {
    return res.send({ message: 'Conexion a CHabitacion' })
}

export const tipoEventoDefault = async (req, res) => {
    try {
        let existe = await TipoEvento.findOne({ nombre: 'Default' })
        if (!existe) {
            let data = {
                nombre: 'Default'
            }
            let tipoEvento = new TipoEvento(data)
            await tipoEvento.save()
            console.log('Type Evente Default Create')
        }
        console.log('Type Evente already exists')
    } catch (err) {
        console.error(err)
        return res
            .status(500)
            .send({ message: 'Error course could not be added', err })
    }
}

export const addTipoEvento = async (req, res) => {
    try {
        let data = req.body
        let tipoEvento = new TipoEvento(data)
        await tipoEvento.save()
        return res.send({ message: 'saved category room', tipoEvento })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}
/*
export const viewCHabitacion = async (req, res) => {
    try {
        let cHabitaciones = await CHabitacion.find({})
        return res.send({ message: cHabitaciones })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}

export const updateCHabitacion = async (req, res) => {
    try {
        let { id } = req.params
        let existCHabitacion = await CHabitacion.findOne({ _id: id })
        if (!existCHabitacion)
            return res
                .status(404)
                .send({ message: 'The category room not exist' })
        let data = req.body
        let cHabitacionUpdate = await CHabitacion.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        if (!cHabitacionUpdate)
            return res
                .status(401)
                .send({ message: 'The category room could not be updated' })
        return res.send({ message: 'Updated course', cHabitacionUpdate })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}

//@ Modified By: Yerick Aguilar
export const deleteCHabitacion = async (req, res) => {
    try {
        let { id } = req.params
        //# Validate If Exists
        let existCHabitacion = await CHabitacion.findOne({ _id: id })
        if (!existCHabitacion)return res.status(404).send({ message: 'This Category Does Not Exists' })

        //# Update CHabitacion To: 'Default'
        const defaultCHabitacion = await CHabitacion.findOne({Nombre: 'Default'})
        await Habitacion.updateMany({cHabitacion: id}, {cHabitacion: defaultCHabitacion._id})

        //# Delete CHabitacion
        let cHabitacionDelte = await CHabitacion.findOneAndDelete({ _id: id })
        if (!cHabitacionDelte)return res.status(404).send({ message: 'Category Not Found, Not Deleted' })
        return res.send({message: `The category room: ${cHabitacionDelte.Nombre} has been successfully removed`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err })
    }
}
*/