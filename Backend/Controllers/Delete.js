import loop from "../Models/Demo";

exports.del = async (req,res) => {
   try {
    const {id}= req.params.id;
    const nomore = await loop.execute(
        'DELETE FROM posts WHERE id = ?',[id]
    )
    res.status(200).json(`post is deleted from ${id}`);
   } catch (error) {
    res.status(401).json("error");
   } 
}