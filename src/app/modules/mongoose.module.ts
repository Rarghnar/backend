

import mongoose, { ConnectionOptions } from "mongoose"

function connect(): Promise<typeof mongoose> {
  const mongoUri: string = 'mongodb+srv://AppAdmin:Rhns8Vmmuw0JQgWT@cluster0.j819i.mongodb.net/'
  const databaseName: string = 'backend-Hospital'

  const options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  } 

  return mongoose.connect(mongoUri + databaseName, options);
}

export default { connect };