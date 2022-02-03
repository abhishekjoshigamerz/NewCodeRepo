require('dotenv').config();
const {Client} = require('discord.js');
const client = new Client();
const serverID =937987826170073088;
client.login(process.env.DISCORDJS_BOT_TOEKN);
var Airtable2 = require('airtable');
var connection3 = new Airtable2({apiKey: 'keyO9r6GZwrBdL1I8'}).base('appOcuGMttEK2B9rJ');
const roleClaim4 = require('./roleclaim4');
//const invites = new Map();
const inviteNotifications = require('./invite-notification');

client.on('ready',async (message)=>{
    console.log("Bot has started now");
    inviteNotifications(client);
    //let channel = client.channels.fetch('937987826170073091');
   // roleClaim4(client);
    // for(let i=0;i<500;i++){
    //   let newInvite2 =  client.channels.cache.get('937987923205304390').createInvite({maxAge: 0, maxUses: 0,unique: true});
    //   console.log("This is a test of API",newInvite2);
    // }
    
    let myGuild = client.guilds.resolve(serverID);
     //message.channel.createInvite({ maxAge: 0, maxUses: 0 });
    //let newInvite = createInvite({ maxAge: 0, maxUses: 0 });
 
   // for(let i=0;i<10;i++){
    //   console.log("Value of i is ",i);

    // }

    //console.log(myGuild);
    // client.guilds.cache.forEach(async (guild) => {
    // //     // Fetch all Guild Invites
        
    //     const firstInvites = await guild.fetchInvites();
    //     // Set the key as Guild ID, and create a map which has the invite code, and the number of uses
    //     invites.set(guild.id, new Map(firstInvites.map((invite) => [invite.code, invite.uses])));
    //     //console.log("Invites",invites);
        
    // });
});





// client.on("inviteCreate",async(invite)=>{
//   client.guilds.cache.forEach(async (guild) => {
//     //     // Fetch all Guild Invites        
//         const firstInvites = await guild.fetchInvites();
//         // Set the key as Guild ID, and create a map which has the invite code, and the number of uses
//         invites.set(guild.id, new Map(firstInvites.map((invite) => [invite.code, invite.uses])));
//         //console.log("Invites",invites);
        
//     });
  
// //  console.log("A new invite has been created!");  
// //  console.log(invite.code);
//   let InviteCode = invite.code;
//   let OwnerID = invite.inviter.id;
//   let OwnerTag = invite.inviter.username;



//   connection3('InviteCodeLogger').create([
//     {
//       "fields": {
//         "Discord Inviter Username":OwnerTag,
//         "Discord Inviter user id":OwnerID,
//         "Discord Inviter Code":InviteCode,            
//       }
//     },
//   ], function(err, records) {
//     if (err) {
//       console.error(err);
//       return;
//     }else{
//         console.log("New Invite Code generated successfully!");
//     }
// });


  //console.log("Owner ID here is ",invite.inviter.id, "And username is ",invite.inviter.username);
  
  // let InviteCode = invite.code;
  // let InviterUserID = member.user.id;
  // let Inviter = client.users.cache.get(invite.inviter.id);
  // let InviterTag = inviter.tag;

  // console.log("Invite Code is ",InviteCode," InviterUserID ",InviterUserID," Inviter", Inviter, "InviterTag", InviterTag);

//});


// client.on("guildCreate", (guild) => {
//     // We've been added to a new Guild. Let's fetch all the invites, and save it to our cache
//     guild.fetchInvites().then(guildInvites => {
//       // This is the same as the ready event
//       invites.set(guild.id, new Map(guildInvites.map((invite) => [invite.code, invite.uses])));
//     })
//   });
  
  // client.on("guildDelete", (guild) => {
  //   // We've been removed from a Guild. Let's delete all their invites
  //   invites.delete(guild.id);
  // });

//   client.on("guildMemberAdd", member => {
//     // To compare, we need to load the current invite list.
//     member.guild.fetchInvites().then(newInvites => {
//       // This is the *existing* invites for the guild.
//       const oldInvites = invites.get(member.guild.id);
//       // Look through the invites, find the one for which the uses went up.
//       const invite = newInvites.find(i => i.uses > oldInvites.get(i.code));
//       // This is just to simplify the message being sent below (inviter doesn't have a tag property)
//       const inviter = client.users.cache.get(invite.inviter.id);
//       // Get the log channel (change to your liking)
//       const logChannel = member.guild.channels.cache.find(channel => channel.name === "logchannel");
      
//     let userTag = member.user.tag;
//     let userID = member.user.id;    
//     let InviteCode = invite.code;
// //    console.log("UserTag is ",userTag);
// //    console.log("UserID is ",userID);
// //    console.log("InviteCode is ",InviteCode);


//     //let data = InviteTrackerfun(userTag,userID,InviteCode);
//     inviter
//         ? client.channels.cache.get('937987923205304390').send(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`): client.channels.cache.get('937987923205304390').send(`${member.user.tag} joined but I couldn't find through which invite.`);

//         connection3('DiscordJoinner').create([
//             {
//               "fields": {
//                 "Discord User Name":userTag,
//                 "DiscordUserID":userID,
//                 "Discord Invite Code":InviteCode,            
//               }
//             },
//           ], function(err, records) {
//             if (err) {
//               console.error(err);
//               return;
//             }else{
//                 console.log("Data created for code tracking of discord");
//             }
//         }); 
//     });
//   });  