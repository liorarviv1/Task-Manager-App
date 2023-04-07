const User=require('./userModel')

const getAllUsers=()=>
{
    return User.find({})
}

const getUser=(id)=>
{
    return User.findById({_id: id})
}

const addUser= async (obj)=>
{
    const us=new User(obj)
    await us.save();
    return 'Created!'
}

const updateUser=async (id,obj)=>
{
    await User.findByIdAndUpdate(id,obj);
    return 'Updated!';
}



const deleteUser= async(id)=>
{
    await User.findByIdAndDelete(id);
    return 'Deleted!';
}

// const updatetasks=async (userid,taskid, obj)=>
// {
//     console.log("3")
//     let user = await User.findById(userid);
//     console.log(user)
//    let task =  user.tasks.find(x => x.id == taskid);
//    task.completed = obj.completed;
//    user.save()

//     return 'Updated tasks!';
// }

module.exports=
{
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
    // updatetasks
};