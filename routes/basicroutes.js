const express=require('express');
const { title } = require('process');

const router=express.Router();
router.use(express.json())
router.use(express.urlencoded({extended:true}))
var arr_obj=[{name:'sanju',age:22,location:'kln'},{name:'manju',age:23,location:'knr'},
    {name:'chinju',age:22,location:'tvm'}];
    router.get('/students',(req,res)=>{
        res.render("students",{
            title:'students',
            arr_obj
        })
    })

router.post('/add',(req,res)=>{

    const data=req.body;
    console.log(data)
     arr_obj.push(data)
     res.send('post successfull')
})
// put
router.put('/edit/:id',(req,res)=>{
    const id=req.params.id
    const data=req.body;
    arr_obj.splice(1,1,data);
    
res.send(arr_obj);
})
// delete
router.delete('/remove',(req,res)=>{
    arr_obj.pop()
    res.send(arr_obj)
})







    module.exports=router