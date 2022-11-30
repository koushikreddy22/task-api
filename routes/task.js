
const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Task=mongoose.model("tasks")
let id=0
router.get('/v1/tasks',(req,res)=>{
    Task.find().then(task=>{
        res.json({task})
    }).catch(err=>{
        console.log(err)
    })
})
router.get(' /v1/tasks/{id}',(req,res)=>{
    Task.find({id:req.body.id}).then(task=>{
        res.json({task})
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/v1/tasks',(req,res)=>{
    id=id+1
    const {title,is_completed}=req.body
    const newtask= new Task({
       id,
       title,
       is_completed

    })
    newtask.save().then(result=>{
        res.json({newtask:result})
    }).catch(err=>{
        console.log(err)
    })
})
router.get(' /v1/tasks/{id}', (req,res)=>{
    Task.deleteOne({id:req.body.id}).then(task=>{
        res.json({task})
    })

})
router.get('/v1/tasks', (req,res)=>{
    Task.deleteMany({id:req.body.id}).then(task=>{
        res.json({task})
    })

})
router.put('/update',(req,res)=>{
    Task.updateOne({id:req.body.id},{$set:{is_completed:req.body.is_completed}}).then(task=>{
        res.json({task})

    })
})



module.exports = router