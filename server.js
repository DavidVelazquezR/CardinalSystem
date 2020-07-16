const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Link Start!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("-sc music")) {
     message.channel.send("Comando system call para musica!!");
   }
 
 });
 
 client.login("NzMzMTQ1NDUyNDYzMTI4NjE3.Xw-6Cg.pPhCDnVH0qKdhXV4L0cidss7HhE");