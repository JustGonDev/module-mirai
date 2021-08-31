module.exports.config = {
    name: "girl",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JustGon", //Giữ Credit tôn trọng thằng làm ra
    description: "request ảnh",
    commandCategory: "girl",
    usages: "[tag]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
    }
};
module.exports.run = async function ({ event, api, args }) {
    const { threadID, messageID } = event;
    var reply = {
        body: "ảnh gái",
        attachment: (await global.nodemodule["axios"]({
            url: (await global.nodemodule["axios"]('https://api.ditlolichapfbi.tk/image?type=gai')).data.data, //Nếu api dạng chatfuel thì là .data[0].data '-'
            method: "GET", 
            responseType: "stream"
        })).data
        
    }
    return api.sendMessage(reply, threadID, messageID);

}