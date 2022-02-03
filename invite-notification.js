let Airtable2 = require('airtable');
let connection3 = new Airtable2({apiKey: 'keyO9r6GZwrBdL1I8'}).base('appOcuGMttEK2B9rJ');
module.exports = (client) => {
    const invites = {} // { guildId: { memberId: count } }
    let Array = [];
    const getInviteCounts = async (guild) => {
      return await new Promise((resolve) => {
        guild.fetchInvites().then((invites) => {
          const inviteCounter = {} // { memberId: count }
  
          invites.forEach((invite) => {
            const { uses, inviter,id } = invite
            const { username, discriminator } = inviter
            console.log("ID is ",invite.code);
            
            const name = `${username}#${discriminator}`
            Array[name] = [inviter,[invite.code]];
            inviteCounter[name] = (inviteCounter[name] || 0) + uses
          })
  
          resolve(inviteCounter)
        })
      })
    }
  
    client.guilds.cache.forEach(async (guild) => {
      invites[guild.id] = await getInviteCounts(guild)
    })
  
    client.on('guildMemberAdd', async (member) => {
      const { guild, id } = member
  
      const invitesBefore = invites[guild.id]
      const invitesAfter = await getInviteCounts(guild)
  
      console.log('BEFORE:', invitesBefore)
      console.log('AFTER:', invitesAfter)
  
      for (const inviter in invitesAfter) {
        if (invitesBefore[inviter] === invitesAfter[inviter] - 1) {
          const channelId = '937987923205304390'
          const channel = guild.channels.cache.get(channelId)
          const count = invitesAfter[inviter]
         let userID =  client.users.cache.find(u => u.tag === inviter).id;
         console.log("USERID",inviter.code); 
         channel.send(
            `Please welcome <@${id}> to the Discord! Invited by ${inviter} (${count} invites)`
          )
            
          invites[guild.id] = invitesAfter
          return
        }
      }
    })
  }
  
  