# haxe-browserify-js
Libraries with externs for browserify.js api


## Browserify
See browserify repository and native browserify api at (https://github.com/browserify/browserify)[Github]


## Required
- only js target
- installed node.js 7+
- haxe dependency `hxnodejs`


## Installation
1. install haxelib package `haxelib install browserify-js`
2. init node package and add browserify as dependency `npm i browserify`
3. add dependency in your build config.hxml: 
```
--library hxnodejs 
--library browserify-js
```


## Example of usage
For example we have in root directory file two linked js files:
```javascript
//./test.js
const a = 12;
const b = a + 4;
const printGreeting = () => {
    console.log("This is test file!");
    console.log(require("./test2").greeting);
}
printGreeting();
```
and
```javascript
//./test2.js
const greeting = "Hello! I was required!";
module.exports = { greeting: greeting }
```
and haxe source file to test work of package:
```haxe
//file ./hx/BrowserifyTest.hx -> ./js/BrowserifyTest.js
package;

import js.node.Fs;
import js.Syntax;
import js.node.Path;
import browserifyJs.Browserify;

class BrowserifyTest {

	public static function main() {
		var testFilePath = Path.resolve(
			Syntax.code( "module.path" ),
			"..",
			"test.js"
		); //test file path
		var b = Browserify.browserifyFiles( [FilePath( testFilePath )] );
		b.bundle( ( err, src ) -> { //on bundling
			Sure.sure( err == null ); //check no error
			Fs.writeFileSync( Path.resolve( Syntax.code( "module.path" ), "..", "out.js" ), src );
            //write generated source to file
			trace( "success!" );
			return str; //Need return something
		} );
	}
}

```
config for build:
```hxml
--library hxnodejs
--library sure
--library browserify-js
--class-path hx
--main BrowserifyTest
--js ./js/BrowserifyTest.js
--cmd node ./js/BrowserifyTest
--cmd node ./out.js
```
will get result:
```
This is test file!
Hello! I was required!
```


## Api
```haxe
package browserifyJs;

/**
	Public class is static api and decorator for native class
**/
class Browserify {

	public var pipeline( get, null ) : Any;

	public function get_pipeline() : Any {...}

    /* Constructors: */
	public static function browserifyFiles(
		?inputFiles : Array<InputFile>,
		?opts : Opts
	) : Browserify {...}

	public static function browserify(
		?opts : Opts
	) : Browserify {...}

    /* Methods: */
    public function getNative() : BrowserifyNativeObject {...}

	public function add( files : Array<InputFile>, ?opts : Opts ) : Browserify {...}

	public function require( file : InputFile, ?opts : Opts ) : Browserify {...}

	public function bundle( 
        ?onBundle : ( err : Any, src : Buffer ) -> Any 
    ) : ReadStream {...}

	public function external<T>( files : Array<String>, ?opts : T ) : Browserify {...}

	public function externalBundle( b : Browserify ) : Browserify {...}

	public function ignore<T>( file : String, ?opts : T ) : Browserify {...}

	public function exclude<T>( file : String, ?opts : T ) : Browserify {...}

	public function transformByModule<T>( module : String, ?opts : T ) : Browserify {...}

	public function transformByFunction<T>(
		f : ( file : String, ?opts : T ) -> ReadStream,
		?opts : T
	) : Browserify {...}

	public function pluginModule<T>( module : String, ?opts : T ) : Browserify {...}

	public function pluginFunction<T>(
		f : ( b : Browserify, ?opts : T ) -> Any,
		?opts : T
	) : Browserify {...}

	public function reset<T>( ?opts : T ) : Void {...}

    /* Events: */
	public function onFile(
		listener : ( file : String, id : String, parent : Any ) -> Any
	) : Browserify {...}

	public function onPackage(
		listener : ( pkg : Any ) -> Any
	) : Browserify {...}

	public function onBundle(
		listener : ( bundle : ReadStream ) -> Any
	) : Browserify {...}

	public function onReset(
		listener : () -> Any
	) : Browserify {...}

	public function onTransform(
		listener : ( tr : ReadStream, file : String ) -> Any
	) : Browserify {...}
}
```


## Realization details
Realized as a decorator class `Browserify` over native extern class `BrowserifyNativeObject`.
Its needs to gives comfortable static-typed api to construct and control browserify object,
case native object has too much dynamic and variative api.

You may access `BrowserifyNativeObject` from `Browserify` by method `.getNative()`


## License
MIT


## Author
Anatoly Starodubtsev
tostar74@mail.ru
tg: @pantagruel74