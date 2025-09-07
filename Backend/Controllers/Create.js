import loop from "../Models/Demo";

exports.crate =async(req,res)=>{
    try {
        const  {post,author} = req.body;
        const [profile] = await loop.execute(
            'INSERT INTO posts(posts,author) VALUES (?,?)',[
                post,author
            ]

        )
        res.status(201).json({id:profile.post,author})
    } catch (error) {
        res.status(500).json(error);
    }
}