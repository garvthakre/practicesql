import loop from "../Models/Demo";
exports.getID= async (req,res) => {

    try {
        const {id}= req.params.id;
        const [post] = await loop.execute(
            "SELECT * FROM posts WHERE id = ?",[id]
        );
        if(post.length==0) return res.status(404).json("NO POSTS FOUND")
        res.status(200).json(post[0]);
    } catch (error) {
        res.status(500).json("error");
    }

}