import loop from "../Models/Demo";

exports.updateId = async (req,res) => {
   try {
    const {id,post,author} = req.body;
    const [update] = await loop.execute(
        'UPDATE posts SET post = ?, author= ?  WHERE id =?',[
            post,author,id
        ]
    );
    res.status(200).json()
   } catch (error) {
    
   } 
}