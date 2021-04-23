import { http } from './http'
import "./websocket/client"

http.listen(3003, () => console.log("Server is running on port 3003."))