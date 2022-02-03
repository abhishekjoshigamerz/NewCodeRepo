const firstMessage = require('./first-message');
const { MessageCollector } = require("discord.js-collector");
var Airtable = require('airtable');
const { User } = require('discord.js');
let connection3 = new Airtable({apiKey: 'keyO9r6GZwrBdL1I8'}).base('appOcuGMttEK2B9rJ');
//newcomment to push it
module.exports = client => {
  //910886706117492776  
    const channelId = '938321495556497429';
    let data;
    var timeout;
    const getEmoji = emojiName => client.emojis.cache.find(emoji => emoji.name === emojiName);

    const emojis = {
        happy : 'invitelink'
    }
    

    const reactions = [];
    let emojiText='';
    for(const key in emojis){
        const emoji = getEmoji(key)
        reactions.push(emoji)
  
        const role = emojis[key]

        emojiText +=`**Learn & Earn **${emoji}\n**Learn 4 Free** is so old school.\n**Learn & Earn **is the new sexy!.\n**Dropping a new value bomb 💣 **\n\nStart learning game development with our new **Learn and Earn** courses where you get incentivized to learn.Complete your submission and Unlock rewards at every stage.\n To get access, React with ${emoji} emoji to unlock.\n${emoji}\n`
    }
    firstMessage(client, channelId,emojiText,reactions);

    const handleReaction2 = (reaction, user, add) => {
        // if (user.id === '723819104045105172') {
        //   return
        // }
    
        const emoji = reaction._emoji.name
    
        const { guild } = reaction.message
    
        const roleName = emojis[emoji]
        if (!roleName) {
          return
        }
    
        const role = guild.roles.cache.find((role) => role.name === roleName)
        const member = guild.members.cache.find((member) => member.id === user.id)
    
        if (add) {
          member.roles.add(role)
        } else {
          member.roles.remove(role)
        }
      }
    
      client.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.channel.id === channelId) {
          handleReaction2(reaction, user, true)
          let userData = [];
           data = user.id;
           
           if(reaction._emoji.name == "happy" && reaction.message.id ==938389316890148886){
             console.log("Message id is "+ reaction.message.id);
               //await client.users.cache.fetch(data).send('MM');
            let EmailUser2 =  EmailVerifier3(data,reaction,userData);  
        }    
    }
      })
    
      client.on('messageReactionRemove', (reaction, user) => {
        if (reaction.message.channel.id === channelId) {
          handleReaction2(reaction, user, false)
        }
      })
      const NameCollector2 = async function CollectName2(data,reaction,userData){
        let USER =  await client.users.cache.get(data);
        console.log(USER);
        if(data == '580313243306688522'){
          console.log("Not sending message to a bot itself");
         }else{
          let USER =  await client.users.cache.get(data);
          console.log(USER);
          let botMessage = await USER.send("May I know your Name ?");
          const userName = await MessageCollector.asyncQuestion({
            botMessage,
            user: data,
            collectorOptions: {
                time: 100000
            }
        }).catch(() => {
            USER.send("Time out");
            console.log("Time out now!");
            timeout = 1;
        });

        if(timeout==1){
          USER.send("Request Timed out because you did not responded in time from local discord bot");
          console.log("Request timed out because you did not responded in time ");
          timeout = 0;
          return 0;
        }else{
          userData[1] = userName.content;
          console.log(userData);
  
          connection('Leads_Starter Pack').create([
            {
              "fields": {
                "Email Address":userData[0],
                "Discord User id": data,
                "Name": userData[1],   
              }
            },
          ], function(err, records) {
            if (err) {
              console.error(err);
              return;
            }      
          });
  
          await USER.send("Thank you " + userData[1] + 
          " You have unlocked access to 1000+ resources for game development. We have shared the Starter Kit with you over the email address you shared.Incase you have entered the wrong email ID, Please Unreact and React again.");
  
          return userData[1];
        }
      }   
    }

      const EmailVerifier3 = async function VerifyEmailAddress4(data,reaction,userData){
         console.log("Inside email verifier",data);
         if(data == '580313243306688522'){
          console.log("Not sending message to a bot itself");
         }else{
          let USER =  await client.users.cache.get(data);
          let newInvite2 = await client.channels.cache.get('937987826170073091').createInvite({maxAge: 0, maxUses: 0,unique: true});  

          console.log(USER);

        let userCODE = newInvite2;
          
         // console.log(newInvite2);
          let URL = "https://discord.gg/"+newInvite2;  
          console.log(URL);
         let botMessage = await USER.send("Welcome to the world of  Learn and Earn\nYou are entering a virtual verse that rewards you for learning.\nSounds interesting?\n\nStart learning & Earning here 👉 "+ URL + "\n");
        
         connection3('InviteCodeLogger').create([
            {
              "fields": {
                "Discord Inviter Username":USER.username,
                "Discord Inviter user id":USER.id,
                "Discord Inviter Code":userCODE.code,            
              }
            },
          ], function(err, records) {
            if (err) {
              console.error(err);
              return;
            }else{
                console.log("New Invite Code generated successfully!");
            }
        });        
    }
       
        
        
    }
}
