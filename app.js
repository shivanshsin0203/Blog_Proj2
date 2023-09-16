const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
require('dotenv').config();
const app=express();
const port=process.env.Port;
app.use(express.static("public"));
var posts=[];
app.use(bodyParser.urlencoded({extended:true}));
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hello, I'm Shivansh Singh, currently in my second year of undergraduate studies at National Institute of Technology Hamirpur. My passion lies in the fascinating world of web development. As I continue my educational journey, I've been focusing on expanding my understanding and proficiency in building interactive, effective websites. The joy I derive from learning is a driving force as I traverse the dynamic landscape of web development, continuously exploring new technologies, frameworks, and coding techniques. Beyond the confines of my coursework, I frequently immerse myself in personal projects and collaborations, applying theoretical concepts to practical, real-world scenarios. I truly believe that there's no hurdle too great if one has the passion and the grit to overcome it. As a budding developer, I am ready and excited for the challenges and learning experiences that lie ahead.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
app.listen(port,function(req,res){
     console.log('Server Started at port '+port);
});
app.get("/",function(req,res){
   res.render("home.ejs",{start:homeStartingContent,posts:posts});
  });
app.get("/about",function(req,res){
    res.render("about.ejs",{start:aboutContent});
 });
 app.get("/contact",function(req,res){
    res.render("contact.ejs",{start:contactContent});
 });
 app.get("/compose",function(req,res){
    res.render("compose.ejs",{});
 });
 app.post("/compose",function(req,res){
     const tit=req.body.title;
     const dis=req.body.dis
      var post={
       title:req.body.title,
       body:req.body.dis,
     };
     posts.push(post);
    res.redirect("/");
 });
 app.get("/posts/:poastName",function(req,res){
    const rt=_.lowerCase(req.params.poastName);
    posts.forEach(function(post){
        const st=_.lowerCase(post.title);
        if(st===rt){
            console.log("Match Found");
            res.render("post.ejs",{
                title:post.title,
                body:post.body
            })
        }
        else{
            console.log("Math not found");
        }
    });
   
 });