import Contact from "../model/contact.js";

export const getContact = async(req,res,next) =>{
    try{
        const contacts = await Contact.find();
        return res.status(200).json({
            contact : contacts
        })
    }catch(error){
        return res.status(500).json({message : error.message})
    }   
}

export const postContact = async(req,res,next) =>{
    try{
        const {name,email,message} = req.body;

        const newContact = new Contact({
            name : name,
            email : email,
            message : message
        })

        await newContact.save();

        return res.status(200).json({
            status : true,
            name : name
        });
    }catch(error){
        return res.status(500).json({message : error.message})
    }   
}