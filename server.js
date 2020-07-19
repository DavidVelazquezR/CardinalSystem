const { 
  Client, 
  MessageEmbed
} = require("discord.js");
const bot = new Client();

const token = "NzMzMTQ1NDUyNDYzMTI4NjE3.XxKmjQ.YOJTq-ullif_K1cztankBmFJ73k";
const ytdl = require("ytdl-core");
let conectado = false;

bot.on("ready", () => {
    console.log(`Link Start!`);
 });


 bot.on("message", async message => {  

  let comando = message.content.substring(0,1);

  if (!message.guild) 
  {
    console.log("NO");
    return;
  }
  if (message.content === ">help") 
  {
    muestraInfo();  
  }else
  {
  if (comando === ">") 
  {
    console.log("Simbolo > reconocido !!");  
    let comando2 = message.content.substring(1).split(" ");
    console.log("1: " + comando2[0]);
    console.log("2: " + comando2[1]);
    let comandoxd = comando2[0] +" "+ comando2[1];
    console.log("SUMA:" + comandoxd);
    if (comandoxd=== "systemcall play") 
    {
      if (comando2[2] === undefined) 
      {
        console.log("Cancion: " + comando2[2]);
        message.channel.send("Necesitas el nombre o URL de la cancion !!");
      }else
       {
         if (conectado) 
         {
          let cancion = message.content.substring(8,message.content.length);
          if (ytdl.validateURL(cancion)) 
          {
            message.channel.send("Reproduciendo tu cancion... ♩ ♪ ♫ ♬");
            console.log("Comando play aceptado");   
            //Aqui debe ir el comando para agregar la cancion
            const voiceChanel = message.member.voice.channel;

            voiceChanel.join().then(connection => {
              let stream = ytdl(cancion, {filter: "audioonly"});
              const dispatcher = connection.play(stream);

              
            });
          }else{
            message.reply("Por el momento solo acepto un URL !!");
          }  
         }else{
           message.reply("Necesito estar conectado a un chat de voz !!");
         }
       }
    } else if (comandoxd === "systemcall pause") 
    {
      if (conectado) 
      {
        message.channel.send("Comando pausa aceptado");   
      }else{
        message.reply("Necesito estar conectado a un chat de voz !!");
      }
    }else if (comandoxd === "link start")
    {
      if (message.member.voice.channel) 
      { 
        let con = await message.member.voice.channel.join();
        conectado = true;
        var voicA = message.member.voice.channel;
        voicA.join().then(cone => {
          let audiolel = ytdl("https://www.youtube.com/watch?v=wrImjIfYu64", {filter: "audioonly"});
          const audio = cone.play(audiolel);
        });
      }else{
        message.reply("Debes estar en un canal de voz crack !!");
      }
    }else if (comandoxd === "systemcall leave")
    {
      if (message.member.voice.channel) 
      { 
        sonidoSalida();
      }else{
        message.reply("Debes estar en un canal de voz crack !!");
      }  
    }else
    {
      message.channel.send("El comando no existe !!");
    }
  }
}

  function muestraInfo () 
  {
     const embed = new MessageEmbed()
     .setColor("BLUE")
     .addField("Modulo de musica", ">systemcall play  -  Reproducir cancion \n" +
     ">systemcall pause  -  Pausar cancion");
     const embed2 = new MessageEmbed()
     .setColor("BLUE")
     .addField("Ayuda de comandos", ">help");
     const embed3 = new MessageEmbed()
     .setColor("BLUE")
     .addField("Modulo de Cardinal System", ">link start  -  Agregar bot al canal de voz \n" +
     ">systemcall leave  -  Salir del canal de voz");
     message.channel.send(`----- Comandos aceptados para Cardinal System -----`);
     message.channel.send(embed2);
     message.channel.send(embed3);
     message.channel.send(embed);
   }

   function sonidoSalida()
   {
    var voiceS = message.member.voice.channel;
    (conex => {
      let audiolel2 = ytdl("https://www.youtube.com/watch?v=7zTDVdp2SDU", {filter: "audioonly"});
      const audio = conex.play(audiolel2);
      console.log("Saliendo...");
    });
    salida();
   }

   function salida()
   {
      message.member.voice.channel.leave();
      conectado = false;
   }

   if (message.content === "hola") {
     message.channel.send(`Wassup dude ${message.author} Bienvenido`);
   }

 });
 
 bot.login(token);