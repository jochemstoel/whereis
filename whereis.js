/* whereis | find something in PATH */
var fs = require('fs')
var path = require('path')

function find() {
    var pathSep = process.platform === 'win32' ? ';' : ':'
    var directories = process.env.PATH.split(pathSep)
    for (var i = 0; i < directories.length; i++) {
    	for (var j = 0; j < arguments.length; j++) {
    		var filename = arguments[j]
	        var filePath = path.join(directories[i], filename)

	        if (fs.existsSync(filePath)) {
	            return [filePath, directories[i]]
	        }
	    }
    }
    return null
}

let that, where, there

if(process.argv.length==3)
	that = process.argv[2]
else {
	console.log('whereis what?')
	process.exit()
} 

where = find(that)

if(where==null)
	there = 'nowhere'
else
	there = `in ${where[0]}`

console.log(
	`${that} found ${there}`
)