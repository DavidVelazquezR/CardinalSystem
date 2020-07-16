const { 
  Client, 
  MessageEmbed, 
  VoiceChannel
} = require("discord.js");
const bot = new Client();

const token = "NzMzMTQ1NDUyNDYzMTI4NjE3.Xw__tA.27Rxqjz7_GIIzLYo7a7JsmgN1e0";


bot.on("ready", () => {
    console.log(`Link Start!`);
 });

 bot.on("message", (message) => {  

  let comando = message.content.substring(0,1);
  if (comando === ">") 
  {
    console.log("Simbolo > reconocido !!");  
    let comando2 = message.content.substring(1).split(" ");
    console.log("1: " + comando2[0]);
    console.log("2: " + comando2[1]);
    let comandoxd = comando2[0] +" "+ comando2[1];
    console.log("SUMA:" + comandoxd);
    if (comandoxd=== "sc play") 
    {
      if (comando2[2] === undefined) 
      {
        console.log("Cancion: " + comando2[2]);
        message.channel.send("Necesitas el nombre o URL de la cancion !!");
      }else
      {
        let cancion = message.content.substring(8,message.content.length);
        message.channel.send("Cancion a buscar: " + cancion);
        console.log("Comando play aceptado");     
      }
    } else if (comandoxd === "sc pause") 
    {
      message.channel.send("Comando pausa aceptado");   
    }else 
    {
      message.channel.send("El comando no existe !!");
    }
  }

   if (message.content === ">help") {
     const embed = new MessageEmbed()
     .setColor("BLUE")
     .addField("Modulo de musica", ">sc play  -  Reproducir cancion \n" +
     ">sc pause  -  Pausar cancion");
     const embed2 = new MessageEmbed()
     .setColor("BLUE")
     .addField("Ayuda de comandos", ">help");
     message.channel.send(`----- Comandos aceptados para Cardinal System -----`);
     message.channel.send(embed2);
     message.channel.send(embed);
   }

   if (message.content === "hola") {
     message.channel.send(`Wassup dude ${message.author} Bienvenido`);
   }

 });
 
 bot.login(token);