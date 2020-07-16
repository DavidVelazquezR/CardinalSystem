const { 
  Client, 
  MessageEmbed, 
  VoiceChannel
} = require("discord.js");
const bot = new Client();

const token = "NzMzMTQ1NDUyNDYzMTI4NjE3.Xw_Gmw.Nthi4CeQxt9hnH34JrGSVQEBqAk";
const comando = ">";


bot.on("ready", () => {
    console.log(`Link Start!`);
 });

 bot.on("message", (message) => {  

  let datos = message.content.substring(comando.length).split(" ");
  if (datos[0] === "play") 
  {
    if (datos[1] === undefined) 
    {
      message.channel.send("Necesitas un nombre o URL de la cancion");
    }else
    {
      message.channel.send("Reproduciendo cancion...");
    }
    console.log("DATO 1: " + datos[1]);
  }else
  {
    message.channel.send("Comando incorrecto");
  }

   if (message.content === ">help") {
     const embed = new MessageEmbed()
     .setColor("BLUE")
     .addField("Buscar cancion", ">sc play")
     .addField("Pausar cancion", ">sc pause");
     const embed2 = new MessageEmbed()
     .setColor("BLUE")
     .addField("Ayuda de comancdos", ">help");
     message.channel.send(`----- Comandos aceptados para Cardinal System -----`);
     message.channel.send(`    * Modulo de ayuda *`);
     message.channel.send(embed2);
     message.channel.send(`    * Modulo de musica *`);
     message.channel.send(embed);
   }

   if (message.content === "hola") {
     message.channel.send(`Hola ${message.author} Bienvenido`);
   }

 });
 
 bot.login(token);