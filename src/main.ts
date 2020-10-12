import express from 'express'
import { AddressInfo } from 'net'

const app = express()

app.use((req, res) => {
    res.send(`${+new Date()}`)
})

const server = app.listen(process.env.PORT || 3000, () => {
    const addr = server.address() as AddressInfo
    console.log(`listening on ${addr.address}:${addr.port} [${addr.family}]`)
})
