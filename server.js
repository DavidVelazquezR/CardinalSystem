const { 
  Client, 
  MessageEmbed
} = require("discord.js");
const bot = new Client();

const token = "NzMzMTQ1NDUyNDYzMTI4NjE3.XxPreA.J5iwPgi8MjTuB53Q6c1KpWQVF2s";
const ytdl = require("ytdl-core");
let conectado = false;
let flag = false;
var videos2;
var lista = [];
const yts = require('yt-search');
//const cola = new colaD();

bot.on("ready", () => {
    console.log(`Link Start!`);
 });


 bot.on("message", async message => {  

  let comando = message.content.substring(0,1);
  
  if (flag) 
    {
      console.log("NUMERO CANCION: "+ message.content);
      var zelda;
      let flag2 = false; //Sirve para reconocer si escogio una cancion entre 1 y 5
      var titulo;
      var duracion;
      if (message.content === ">1") 
      {
        zelda = videos2[0].url;
        titulo = videos2[0].title;
        duracion = videos2[0].timestamp;
        flag2 = true;
      } else if (message.content === ">2") 
        {
          zelda = videos2[1].url;
          titulo = videos2[1].title;
          duracion = videos2[1].timestamp;
          flag2 = true;
        } else if (message.content === ">3") 
          {
            zelda = videos2[2].url;
            titulo = videos2[2].title;
            duracion = videos2[2].timestamp;
            flag2 = true;
          } else if (message.content === ">4") 
            {
              zelda = videos2[3].url; 
              titulo = videos2[3].title;
              duracion = videos2[3].timestamp;
              flag2 = true; 
            } else if (message.content === ">5") 
              {
                zelda = videos2[4].url;
                titulo = videos2[4].title;
                duracion = videos2[4].timestamp;
                flag2 = true;
              }
        if (flag2) 
        {
          message.channel.bulkDelete(2);
          lista.push(zelda);
          let msj = new MessageEmbed();
          msj.setDescription("Reproduciendo tu cancion... ♩ ♪ ♫ ♬ \n"
          + `** ${titulo} || (${duracion}) **`);
          msj.setColor("BLUE");
          message.channel.send(msj);
          //cola.inserta(zelda);
          await reproduceMusica();
        }
      }

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
      let memoria = message.content.substring(0,34);
      console.log("MEMORIA: " + memoria);
      console.log("1: " + comando2[0]);
      console.log("2: " + comando2[1]);
      var comandoxd = comando2[0] +" "+ comando2[1];
      console.log("SUMA:" + comandoxd);
      if (comandoxd=== "systemcall play" || comandoxd === "sc play") 
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

            yts(cancion, function (err, r){
              if (err) throw err
              const videos = r.videos;
              videos2 = [videos[0], videos[1], videos[2], videos[3], videos[4]];
              var cont = 1;
              flag = true;
              message.channel.send("** Selecciona una cancion con '>numeroDeCancion' **");
              videos2.forEach(function (v){
                message.channel.send("["+ cont  +"] "+ ` ${v.title} || (${v.timestamp})`);
                cont++;
              });
              
            });

            if (ytdl.validateURL(cancion)) 
            {
              message.channel.send("Reproduciendo tu cancion... ♩ ♪ ♫ ♬");
              console.log("Comando play aceptado");   
              //Aqui debe ir el comando para agregar la cancion
              const voiceChanel = message.member.voice.channel;

              voiceChanel.join().then(connection => {
                let stream = ytdl(lista[0], {filter: "audioonly"});
                const dispatcher = connection.play(stream);

                
              });
            }else{
              //message.reply("Por el momento solo acepto un URL !!");
            }  
          }else{
            message.reply("Necesito estar conectado a un chat de voz !!");
          }
        }
      } else if (comandoxd === "systemcall pause" || comandoxd === "sc pause") 
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
      }else if (comandoxd === "systemcall leave" || comandoxd === "sc leave")
      {
        if (message.member.voice.channel) 
        { 
          sonidoSalida();
        }else{
          message.reply("Debes estar en un canal de voz crack !!");
        }  
      }else if(message.content === ">1" || message.content === ">2" || message.content === ">3"
               || message.content === ">4" || message.content === ">5")
            {
              if (flag) 
              {
                console.log("Comando de musica, reproduciendo musica !!");  
              }
            }else if (memoria === ">systemcall remove core protection")
            {
              var memorias = message.content.substring(0).split(" ");
              console.log("MENSAJE: " + message.content);
              console.log("MEMORIAS ELIMINADAS: " + memorias[4]);
              
              message.channel.bulkDelete(memorias[4]);
              message.channel.send("Sacred Art ejecutada...memorias eliminadas");
            }else
            {
              message.channel.send("El comando no existe !!");
            }
    
  }
}

  async function reproduceMusica()
  {
    //var song = cola.elimina();
    
    const voiceChanel = message.member.voice.channel;
    voiceChanel.join().then(connection => {
    const stream = ytdl(lista[0] , {filter: "audioonly"});
    const dispatcher = connection.play(stream);
    flag = false;
    flag2 = false;
    }); 
  }

  function muestraInfo () 
  {
     const embed = new MessageEmbed()
     .setColor("BLUE")
     .addField("Modulo de musica", ">systemcall play o >sc play  -  Reproducir cancion \n" +
     ">systemcall pause o >sc pause-  Pausar cancion");
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

   if (message.content === "hola" || message.content === "Hola") {
     message.channel.send(`Como estas ${message.author} ? Bienvenido a este servidor :)`);
   }

 });
 
 bot.login(token);