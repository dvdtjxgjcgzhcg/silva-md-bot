const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VU25KiSBT8l3rVGEHuRHTEIiiCd1FUNuahhAKrwQKLQsEJ/30Cu3umH3Zne3mCoiJPnsw85wcgOS7RBDVA/wEKiq+QofaVNQUCOhhUcYwo6IIIMgh0MFsahjiuUdhLzLV7dcODH1Dbt6zOvdfgFHK1m90NcxcL4Qt4dEFRHTMc/gEwrvfVMdg3F61KaFGZYTX3e5ZYHLxdJaJQLiXNV8jW4vDwBTxaRIgpJsmwOKEzojCboGYJMf0afXlc19NGFqQj2/DRKNoczeWU3zY931Y7c5ftyjO/nLg1R7iv0d9pvZiDm1x2R0e57FQTFEzgUAoHrpqxBdOOri1tZ1opvIpv9EucEBQ5ESIMs+bLuhvmRCsnPnPpcMdFA2Eib92+Q/fKayckWcCfqsa6uAfP89OvERfV6d1D9Sg+BYT50aw4M9NT7L1UzwMXe2dnOUkvWB0b5+1n4kv6kZX0/+ieL70IwrFdbbP+Fl+4paROr3t/sT9S1yPxjapQ2vVco8qcr9HfpzelPjibdNWsKRuoZh/eyC5yzF4TC2Gm+qt+xmRymt0+0Yeson9iub5l2iVCyvQqBs1JkgJ3ARFbQzMc9C2VjOJ4Nrhk+WXDL1ztYhSDm0KVuT9S0f1wE6SkWJgS7TmrV/ei2FeYKpcttFYvz45S1DgR0PlHF1CU4JJRyHBOnmey0gUwunoopIg95QWLCztM6hyJN8r8K3YjR7ku9ueTej3PxlNWYHhq/KFh3LnVC+iCguYhKksUjXHJctrMUFnCBJVA//t7FxBUszfj2nIC3wUxpiXbkqrIchh9uPrxE4ZhXhHmNSQ02xdEgc79PkaMYZKUrY4VgTQ84SsyT5CVQI9hVqJfHSKKIqAzWqFfU2vmUSv8wXKc4Xxsgy44Pw3BEdCBxiuKIPN9TlH7Ov9X+e3WosKi+EYQA12QPW/1+yovagLHCbwq8O3F9rwLCGyhwNoYG63e72xb8AgxiLMS6MCcVHW2VVflshGb5HAwPMOYGEar4Ed3HzF5s+GarrIRPkfOOqtpQfqjeG3x4iri2C2z7nZysMVXYxOnhpD+EwjQwURIBrntrtl9vsWGJ09l3i3lwFIObFMtiGKG8yBa9Mf8NLWrcca0uSSdO4vZ7tIvetbdFstVkGTauhfkNnPkrZOudobx0laL0BWH6HOx2fSqrsUFO/Cn4t6IEo3DAo2cMl3AykcrUhHruNAsX72/do6ztRgdxVN6q+pQ7ct8J1Vk9BodrUZQYFrOTkPu9XKbm8lbgJ8DlL0vLvyMVutb+xlj9NwD7xb8l49vvNu0cY/uJ4j3xfIvwzk4SkN3fSiINwxCKAfaac+tNDQcR9PQXal1bg8q5zYUJGMugcfjexcUGWRxTs9AB5BENH/GhOZVG1+HxPkfipkG55hGYraNZ7Bkxu+R2OAzKhk8F0DnFVlWBEnklbdbS5oXY1ie2vUarJey1+a7MYrCY5B9TBgw2scmR/D4CQyy96x9BwAA
> *SILVA TECH NEXUS*",
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "✦ Silva ✦ MD ✦",
    AUTO_STATUS_REACT: convertToBool(process.env.AUTO_STATUS_REACT, "true"),
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
    DELETE_LINKS: convertToBool(process.env.DELETE_LINKS, "false"),
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254700143167",
    OWNER_NAME: process.env.OWNER_NAME || "✦ Silva ✦ MD ✦",
    DESCRIPTION: process.env.DESCRIPTION || "*© ✦ Silva ✦ MD ✦*",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/5uli5p.jpeg",
    LIVE_MSG: process.env.LIVE_MSG || "> SILVA MD IS ACTIVE ⚡",
    READ_MESSAGE: convertToBool(process.env.READ_MESSAGE, "false"),
    AUTO_REACT_NEWSLETTER: convertToBool(process.env.AUTO_REACT_NEWSLETTER, "true"), // Newsletter auto-react
    ANTI_BAD: convertToBool(process.env.ANTI_BAD, "false"),
    AUTO_STATUS_SEEN: convertToBool(process.env.AUTO_STATUS_SEEN, "true"),
    AUTO_STATUS_REPLY: convertToBool(process.env.AUTO_STATUS_REPLY, "true"),
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*👀 Seen by Silva MD ✅*",
    MODE: process.env.MODE || "both", // both, public, or private
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE, "true"),
    AUTO_TYPING: convertToBool(process.env.AUTO_TYPING, "true"),
    AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING, "false"),
    
    // Anti-Delete Settings
    ANTIDELETE_GROUP: convertToBool(process.env.ANTIDELETE_GROUP, "true"),
    ANTIDELETE_PRIVATE: convertToBool(process.env.ANTIDELETE_PRIVATE, "true"),
    
    // Debug Settings
    DEBUG: convertToBool(process.env.DEBUG, "true")
};


