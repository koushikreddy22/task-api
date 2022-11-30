const mongoose=require('mongoose')
const taskschema=mongoose.Schema

let task= new taskschema({
    id:{type:Number},
    title:{
        type:String
    },
    is_completed:{
        type:Boolean
    }
})
mongoose.model("tasks",task)
