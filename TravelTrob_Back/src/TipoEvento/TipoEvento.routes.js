'use strict'

import { Router } from 'express'
import { isAdmin, validateJwt } from '../middlewares/validateJwt.js'
import { addTipoEvento } from './TipoEvento.Controller.js'

const api = Router()

api.post('/addTipoEvento', [validateJwt, isAdmin], addTipoEvento)

export default api