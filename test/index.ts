import { Client } from "../src";

const client = new Client("Ganyu", "trstream-xxx") //Cek page id di : https://trakteer.id/manage/my-page/settings
client.start()

client.on("connect", ()=> {
    console.log("connected")
})

client.on("donation", (donation:Object)=>{
    console.log(donation)
})

client.getGoal().then(result=>{
    console.log(result)
})