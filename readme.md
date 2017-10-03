# whereis 
This is a huge sofisticated super complex framework to find in which PATH directory a file is located. It can also be built as an executable. If you want just the function whereis() then open file _whereis.js_ and copy paste it.

## run using regular node
```bash
node whereis.js git.exe
git.exe found in C:\Program Files (x86)\Git\cmd\git.exe

node whereis.js blooperdeefloop
blooperdeefloop found nowhere
```

## build for cli
If you have _pkg_ installed you can build whereis by simply running
```bash
pkg .
```
This will compile a single executable for windows, linux and osx. If you add the location of whereis.exe to PATH then you can simply run this in your command line in any folder:

```bash
whereis node.exe
```

## binaries
I have included a build for windows/linux/osx using Node v8.5.0 but it is generally advised to build things yourself.