const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID ||  FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0UyQXZDak5Sd05ubncvdzdDblNTK0FHNkg4ckIrK0x0eTFsWGs0M3czdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkVRYm1MbEtuL0tYcHJabTlpMlU4U0dkNjV3THIzUVZYRWt5WFFyai9pbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSGoyUGUwNEhMTmhjSnhteGlveFl2dnIzQ2VGdzhwK3MxK1Z1Nm82UW5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyWnZlcGlHZitlTHFXbDZ5RlEraWJWVG5KTTU0eFRRNHpxVFFtWmN2aUUwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktHRWdSdytlcSt3ZzJoRzZXTGp3VkcrZW40d21oUUl5WmN6dzQxOUpjVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhsQ2NsUGFvTzdTWXFIZHEyWVpHMGxKMXoySDc0RGpDZmhGanVWeHMvMjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZzSTh3NFVFa2psTjhTUVVJeUpVVUFBamNQa1k5ZEJwZkVhZmVITHUxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVnQnV2WWdQdCt0SSt4NGpKbCt6ZzdYNmpNZE9iT1R3Yk5qRDVzQmJFUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFiaEN2a21iZmNyVjBGaFpVV3JUVUx5ZzY1NWpOWkhVRTY2SGVIeE9nL3VHaVpENkYvbFprMWdEWXFObmh0V3JZL3h0RHMwQUYxYy9udWtqWUIxUml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6IjA2bDk0WUlxNk1INm9ERTdvTkR6VjRVM2ZWM25sb3JuQWtINGM5T2tXa0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik1TWUszOW45UmlHQ1pHMzkwWUJzOGciLCJwaG9uZUlkIjoiMDNjYzliYWMtNmM5Yy00ZTMxLTkyOGQtODU4NmQxZDI4YmE2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRhK3o1ODU2VHorVnh5SWFYa3F0bGFXUDZLaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3YkovMStaZm5SUnVkZEw1K0p2dXgyYzA3ejA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTjJDTUZSR1EiLCJtZSI6eyJpZCI6IjI0MjA2NDc2NTU5NzoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkbPwnZG28J2RufCdkatfJl9TaGFkb3cifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BHOHRQRUZFUEdZdmJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImI0RlVDMlJuVTd6RHpDcUFMM1c2OUhTV3JEQ0hmWTF4SFZ0TVVYdE8wMlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJwTmtMNWxoU1ptTnpYa0VtVUZlejVWRkk5d0I4bmpuMlNQV3V0K1p4VHZMcXpBSFlGUUhwa05YVTVrVjNuSWpSdm5vSzNhRWxZN1o3S2NCeEdHVEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLZ1hiZElkMk1BMThhRnE4T3NiV0tRYlBUWHF2bTlKUWdCY1hoM2V0aEhYa1BqMUZXUVozSXEzMEVQdk1vbjJvV2RUVWgvdm4yaVhVeEZyQTlNNUxqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MjA2NDc2NTU5NzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlcrQlZBdGtaMU84dzh3cWdDOTF1dlIwbHF3d2gzMk5jUjFiVEZGN1R0TmsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY5NTg3MTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzlZIn0=;;;=>',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "l'éternel inconnu",
    OWNER_NUMBER : process.env.OWNER_NUMBER ||242 06 476 5597, 
    A_REACT : process.env.AUTO_REACTION || 'on',     
    AUTO_READ_STATUS: process.env.AUTO_VIEW_STATUS || "on",
AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "on",
CHATBOT: process.env.CHAT_BOT || "on",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_SAVE_STATUS || 'off',
    BOT : process.env.BOT_NAME || 'FLASH-MD',
    //OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || '',
    MODE: process.env.BOT_MODE || "private",
    PM_PERMIT: process.env.PM_PERMIT || 'off',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    PRESENCE : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_MESSAGE || "on",
//    ADM : process.env.ANTI_DELETE_MESSAGE || 'off',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd" : "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

