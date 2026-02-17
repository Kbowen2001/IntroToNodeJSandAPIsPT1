NOTES

 code .  -to open the current project folder in VS Code.

npm install installs dependencies from package.json.
npm start runs the "start" script (node index.js).



code package.json - opens json file

 cd "c:\Users\kbowen44_s.tooeletec\Desktop\filename"
 npm install
npm start
 > npm start >
  in browser type: http://localhost:3000





If page does not load
Confirm terminal shows server running message.
Keep terminal open while testing.
Try http://127.0.0.1:3000.
Check for errors in terminal.
Ensure port matches (3000 in code and URL).

Troubleshooting (PowerShell)

1. Go to project folder
Set-Location "C:\Users\kbowen44_s.tooeletec\Desktop\IntroToNodeJSandAPIsPT1"

2. If port 3000 is busy, stop the process
$conn = Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue
if ($conn) { Stop-Process -Id $conn[0].OwningProcess -Force }

3. Start server
npm start

 Test routes
http://localhost:3000/
http://localhost:3000/ttech

Common mistakes
- Typo in route path: use /ttech 
- app.listen should only be in root index.js.
- Routes should be defined in routes/index.js and call controller methods.