import 'reflect-metadata'

import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(helmet())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/* → ここからRoutes */

/* ← ここまでRoutes */

app.listen(process.env.APP_PORT, () => {
  console.log(`🚀 listen on port ${process.env.APP_PORT}`)
})
