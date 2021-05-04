
require('dotenv').config();
const os = require('os')
const path =require('path');
const fs = require('fs').promises;

//Write a program that uses fs, os, and dotenv packages to read os information of a 
//system and write that in a file. The file and directory path should be relative, 
//stored as a env variable in .env file. e.g PATH= /Desktop/OSInfo use 
//promises and async/await functions to perform this task.

let readOSInfo = () => {
    return new Promise(resolve => {
        resolve({
            Type: os.type(), 
            Platform: os.platform(),
            Architecture: os.arch(),
            HostName : os.hostname(),
            Version : os.version(),
            Freemem: os.freemem(),
            CPUS : os.cpus(),
            Home_Directory: os.homedir(),
            Release: os.release(),
            Temp_Directory: os.tmpdir(),
            Network_Interface:os.networkInterfaces()
            })
    })
}

(async function main(){
    try{
        let info = await readOSInfo()
        
        //this path is to save file in current folder directory 
        let current_folder_path = path.join(__dirname + '/' + process.env.FILE_NAME + process.env.FILE_EXTENSION)
        
        //this path is for saving file on home root directory
        let os_home_path = os.homedir() + '/' + process.env.FILE_NAME + process.env.FILE_EXTENSION
        await fs.writeFile(current_folder_path, JSON.stringify(info))
        console.log('file is created Successfully!')
       }catch(err){
           throw err
       }
})();
