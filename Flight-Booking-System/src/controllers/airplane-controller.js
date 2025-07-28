const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');
const { response } = require('express');
const { error } = require('winston');

async function createAirplane(req , res) {
    try{
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                message: 'Successfully create an airplane',
                data: airplane,
                error: {}
            })
    }catch(error){
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: 'Somthing went wrong while creating data',
                data: {},
                error:error
            })
    }
}

module.exports ={
    createAirplane
}



