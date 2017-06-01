T^2 Bot
=======

Long live the Empire of [Screeps](https://www.screeps.com)!

Overview
--------

A [Screeps](https://www.screeps.com) AI designed to command creeps and grow the Empire.

How to Use
----------

1. **Install** Node.js from [here](https://nodejs.org/en/download/)  
  This will install Node.js and most importantly (in our case) the 'npm' command line tool
2. **Install** ['grunt-screeps'](https://github.com/screeps/grunt-screeps) in the terminal  
   ```javascript
   npm install grunt-screeps
   ```
3. **Create** a file named '.screeps.json'  
   ```javascript
   {
   "email": "<screeps account email>",
   "password": "<screeps account password>",
   "branch": "<branch name to push to>",
   "ptr": false
   }
   ```
   This attaches your account config to the Gruntfile
 4. **Test** your setup in the terminal  
    ```bash
    grunt screeps
    ```
    This should push to your screeps account on the given branch. 
    
If you require more help, refer to the [grunt-screeps repo](https://github.com/screeps/grunt-screeps).
